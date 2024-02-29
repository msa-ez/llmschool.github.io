<template>
    <div>
        <mark-down class="content">
            
## Kubectl OpenAI 활용

Kubectl OpenAI plugin을 활용하여 배포 Manifest를 자동 생성하고, 배포된 컨테이너 객체에 대한 오케스트레이션을 수행하는 과정은 다음과 같습니다.
각 서비스들의 배포 및 객체들의 Manifest 생성에는 Kubectl-ai 플러그인을, 배포된 서비스 오케스트레이션에는 Kubectl-gpt 플러그인을 활용하겠습니다.

먼저 K8s Copliot 사용을 위해 다음과 같이 설치를 진행합니다.
```
brew tap sozercan/kubectl-ai https://github.com/sozercan/kubectl-ai
brew install kubectl-ai
```
        </mark-down>
        <mark-down class="content" source="
### Set Open-API Key & Endpoint
Kubectl ai를 사용하기 위해서는 OpenAI 계정으로 생성한 API Key(https://platform.openai.com/account/api-keys)가 있어야 합니다.
export OPENAI_API_KEY=<your-key\>
    
    * 3.5 모델 사용시,
    export OPENAI_DEPLOYMENT_NAME=gpt-3.5-turbo	
    
    * OPENAI_ENDPOINT 에는 AI 백엔드 및 모델(e.g Azure OpenAI, LocalAI, Cohere, Amazon Bedrock. etc) 엔드 포인트를 기술합니다. 
    * 생략 시 기본 Open AI 사용합니다.
    export OPENAI_ENDPOINT=<your OpenAI endpoint, like 'https://my-aoi-endpoint.openai.azure.com' or 'http://localhost:8080/v1'> 
        ">
        </mark-down>
        <mark-down class="content">
### AI를 활용한 주문서비스 자동 배포
        
주문서비스 배포를 위해 apexacme/order:v1 이미지를 사용하는 배포 YAML 생성을 위한 프롬프트를 다음과 같이 입력합니다.
```
kubectl ai "8080포트를 사용하는 store 서비스의 복제본 3개를 생성하는 배포 스펙을 만들어 봐, 이미지는 apexacme/store:latest 사용해."
```
- 프롬프트 결과로 AI는 아래와 유사한 YAML을 생성해 보여줍니다.
![image](https://github.com/acmexii/demo/assets/35618409/0155e5e3-1859-4b0e-a46a-f129adfdbe0b)

- 위에서 Apply를 선택해 적용하면 배포가 실행되고 아래와 같이 조회할 수 있습니다.
```
$ kubectl get pod -l app=store

NAME                                READY   STATUS    RESTARTS   AGE
store-deployment-7996bfbb56-4x4vd   1/1     Running   0          77s
store-deployment-7996bfbb56-8pftb   1/1     Running   0          77s
store-deployment-7996bfbb56-txzlm   1/1     Running   0          77s
```

#### 배포된 주문 서비스에 L4 라우터(Service)를 생성하기 위해 다음과 같이 프롬프팅을 진행합니다.
```
kubectl ai "생성된 store 서비스로 라우팅하는 서비스를 생성해줘. 포트는 8080 이 좋겠어."
```
            </mark-down>
            <mark-down class="content" source="
```
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: store
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 8080
```
            "></mark-down>
            <mark-down class="content">
- 서비스 이름이 my-service(혹은, 다른 이름)으로 생성되어 나왔을 경우, Reprompt를 선택하고 다음과 같이 프롬프트를 수정합니다.
- "생성된 store 서비스로 라우팅하는 서비스를 생성해줘. 포트는 8080 이고 서비스 이름도 store가 좋겠어."
                </mark-down>
                <mark-down class="content" source="
```
apiVersion: v1
kind: Service
metadata:
  name: store
spec:
  selector:
    app: store
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 8080
```
- Apply를 선택하여 실행하고, 서비스를 조회하면 'store'로 서비스가 생성된 것을 확인할 수 있습니다.
        
```
$ kubectl get svc
store    ClusterIP   10.36.9.223   <none>   8080/TCP   2m58s
```
        "></mark-down>
        <mark-down class="content">

### 배포된 주문서비스 AI로 오케스트레이션

kubectl-ai로 배포된 서비스에 대해, 오케스트레이션에 특화된 kubectl-gpt를 사용해 자연어 기반으로 관리 할 수 있습니다.

### Installation

'Kubectl-gpt' OpenAPI를 다음과 같은 명령어로 설치합니다.
```
# Install Homebrew: https://brew.sh/
brew tap devinjeon/kubectl-gpt https://github.com/devinjeon/kubectl-gpt
brew install kubectl-gpt
```
- API Key는 위에서 설정한 Key를 재사용하기 때문에 다시 설정하지 않아도 됩니다.

- 주문서비스 개수 확인하기
```
kubectl gpt "현재 실행중인 store 서비스 Pod 개수 알려줘."
```

- kubectl-gpt는 프롬프트를 분석하여 다음의 Kubectl command를 생성하고 확인을 기다리는 방식으로 동작합니다.
```
$ kubectl gpt "현재 store 서비스 Pod 개수 알려줘."
❗[WARNING] Please verify the generated commands before executing them on your k8s cluster, especially `update` and `patch` commands, as GPT-generated commands may be inaccurate.
[Generated Command]
kubectl get pods -l app=store
⎈ Do you really want to execute this command? [y/N]: y
```

#### 서비스 Scale In-Out
```
kubectl gpt "store 서비스의 복제본 개수를 1개로 설정해 줘."
```

```
$ kubectl gpt "store 서비스의 복제본 개수를 1개로 설정해 줘."
❗[WARNING] Please verify the generated commands before executing them on your k8s cluster, especially `update` and `patch` commands, as GPT-generated commands may be inaccurate.
[Generated Command]
kubectl scale deployment store --replicas=1
⎈ Do you really want to execute this command? [y/N]:
```
- 'y'눌러 주문서비스의 인스턴스가 1개로 스케일 인 됨을 확인 할 수 있습니다.

#### CPU 사용율에 따라 동적으로 상점서비스가 Auto Scale-out 되는 커맨드를 요청하겠습니다.
```
kubectl gpt "배포된 store 서비스 명을 찾아서 CPU 기반 평균 30%이상 점유했을 때, 10개 까지 자동 확장하도록 설정해 줘. 배포 이름은 store-deployment 이야."
```
- 'y'를 눌러 적용한 다음, 확인하기 위해 다음과 같이 프롬프팅을 진행합니다.

```
kubectl gpt "store 서비스에 적용된 HPA 설정이 있으면 확인해서 알려줘."
```
        </mark-down>

    </div>
</template>


<script>
    // @group 01_04_03
    export default {
        name:'Kubectl-ai',
        data() {
            return {}
        },
        props: {
            "AI기반 YAML 자동생성 & 오케스트레이션": {
                type: String
            },
        },
    }
</script>