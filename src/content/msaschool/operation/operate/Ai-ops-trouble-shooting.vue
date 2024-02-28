<template>
    <div>
        <mark-down class="content" source='

## OpenAI K8sGPT 활용

CNCF에 등재된 K8sGPT OpenAI를 활용해 Kubernetes Cluster를 자동 진단하고 지속적인 운영을 위한 가이드로 내 클러스터의 문제점과 개선사항들을 자동으로 스캔하고 문제점을 해결할 수 있는 트러블 슈팅 HowTo를 학습한다. 

### Instruction

랩에서 사용할 OpenAI는 K8sGPT를 활용한다. Cli 버전의 K8sGPT를 설치하여 원격에서 자동 탐지하는 방법과 K8s를 클러스터에 설치하여 운영하는 2가지 방식을 아래 가이드에 따라 실습한다.

### 1. K8sGPT Cli 설치하기

#### Homebrew를 활용한 Cli 설치
```
brew tap k8sgpt-ai/k8sgpt
brew install k8sgpt
```

#### 설치 확인
```
k8sgpt version
k8sgpt --help
```

#### Open AI Key 생성과 설정

K8sGPT를 사용하기 위해서는 OpenAI 계정으로 생성한 API Key(https://platform.openai.com/account/api-keys)가 있어야 하며, 이를 K8s gpt에 아래 명령으로 등록한다.
```
k8sgpt auth add openai
Enter openai Key: 

openai added to the AI backend provider list
```
- K8s gpt에는 기본 프로바이더외에 AzureOpenAI, Cohere, Amazon Bedrock, SageMaker 등 다양한 AI엔진을 백엔드를 설정해 프로바이더로 활용가능하다.
- 설정값들은 ~/.config/k8sgpt/k8sgpt.yaml에 저장된다.

#### 등록된 Backends Provider 확인
```
k8sgpt auth list
```

### K8sGPT 사용하기

#### 먼저, 다음 (존재하지 않는) nginx 이미지로 YAML을 배포한다.
```
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.100
        ports:
        - containerPort: 80
EOF
```

#### k8sgpt로 클러스터를 분석한다.
```
k8sgpt analyze
```

#### 분석결과와 추천 솔루션을 포함하도록 요청한다.
```
k8sgpt analyse --explain
```

#### 출력 언어를 한글로 설정한다.
```
k8sgpt analyse --explain --language "Korean"
```

#### 설정을 추가하여 JSON 응답으로 Pretty하게 요청해 본다.
```
k8sgpt analyze -o json --explain --filter=Pod -c --language "Korean" | jq .
```

- 응답 결과는 다음과 같다.
```json
{
  "provider": "openai",
  "errors": null,
  "status": "ProblemDetected",
  "problems": 1,
  "results": [
    {
      "kind": "Pod",
      "name": "default/nginx-deployment-744d99ff97-ngk6h",
      "error": [
        {
          "Text": "Back-off pulling image \"nginx:1.14.100\"",
          "KubernetesDoc": "",
          "Sensitive": []
        }
      ],
      "details": "Error: 이미지 \"nginx:1.14.100\" 가져오기를 다시 시도합니다.\nSolution: \n1. 도커 허브에서 nginx:1.14.100 이미지가 있는지 확인합니다.\n2. 도커 허브에 문제가 있다면, 다른 도커 레지스트리에서 이미지를 가져옵니다.\n3. 이미지 를 가져올 수 없는 경우, 이미지 이름 또는 태그를 확인하고 올바른 이미지를 사용합니다.\n4. 네트워크 연결을 확인하고 필요한 경우 다시 시도합니다.",
      "parentObject": "Deployment/nginx-deployment"
    }
  ]
}
```

### 2. K8sGPT 확장하기

K8sGPT는 Grafana, Prometheus와 같은 모니터링 도구와 쉽게 통합되며, K8sGPT용 플러그인을 생성해 연동하는 것도 가능하다. 현재 지원하고 있는 플러그인 중, 클라우드 네이티브 Security Scanner인 Trivy를 다음과 같이 적용할 수 있다.

```
k8sgpt integration list
```

- 이 Trivy Security Scanner를 다음과 같이 적용하여 취약점 분석에 사용할 수 있다.
```
k8sgpt integration activate trivy
k8sgpt analyze --filter=VulnerabilityReport --explain
```
- 클러스터 보안취약점 분석 결과 예시
![image](https://github.com/acmexii/demo/assets/35618409/9e328b9e-3d7c-4b84-bded-26d01a251272)


### 3. K8sGPT Operator 설치하기

k8sgpt를 쿠버네티스 클러스터에 설치하여 주기적으로 배포된 객체들을 진단하고, 그 결과를 프로메테우스와 Grafana로 집계하고 시각화하여 운영할 수 있다.

- 먼저 k8sgpt Helm 리파지토리를 추가한다.
```
helm repo add k8sgpt https://charts.k8sgpt.ai/
helm repo update
```

- 진단 결과 모니터링을 위해 Prometheus와 Grafana 서비스와의 연결을 활성화 시킨다.
```
helm show values k8sgpt/k8sgpt-operator > values.yml
vi values.yml

# 아래처럼 serviceMonitor, GrafanaDashboard를 활성화 시키고 저장한다.
serviceMonitor:
  enabled: true

GrafanaDashboard:
  enabled: true
```

- K8sGPT Operator를 수정한 설정정보를 가진 values.yml로 설치한다.
```
helm install release k8sgpt/k8sgpt-operator -n k8sgpt-operator-system --create-namespace --values values.yml
```

- K8sGPT가 사용할 kube-prometheus-stack으로 Prometheus와 Grafana를 설치한다.
```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install prom prometheus-community/kube-prometheus-stack -n k8sgpt-operator-system --set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false
```

- OpenAI Key Secret 객체를 생성한다.
```
export OPENAI_TOKEN=<YOUR API KEY HERE>
kubectl create secret generic k8sgpt-sample-secret --from-literal=openai-api-key=$OPENAI_TOKEN -n k8sgpt-operator-system
```

- K8sGPT Operator가 사용할 GPT 버전과 백엔드 프로바이더를 주입한다.
```
kubectl apply -f - << EOF
apiVersion: core.k8sgpt.ai/v1alpha1
kind: K8sGPT
metadata:
  name: k8sgpt-sample
  namespace: k8sgpt-operator-system
spec:
  ai:
    enabled: true
    model: gpt-3.5-turbo
    backend: openai
    secret:
      name: k8sgpt-sample-secret
      key: openai-api-key
    # anonymized: false
    # language: english
  noCache: false
  repository: ghcr.io/k8sgpt-ai/k8sgpt
  version: v0.3.24      # k8sgpt version으로 조회된 값 입력
EOF
```

### 3. K8sGPT Operator 진단결과 확인

#### Operator 설치 후, 아래 커멘드로 결과 조회가 가능하다.
```
kubectl get results -n k8sgpt-operator-system
```

#### Grafana를 통한 진단결과 시각화

- 실행 중인, Grafana로 접속한다.
```
kubectl port-forward service/prom-grafana -n k8sgpt-operator-system 3000:80
```
> 아이디: admin, 비번: prom-operator
> 접속정보 확인: kubectl get secrets --namespace=k8sgpt-operator-system prom-grafana -ojsonpath="{.data.admin-user}" | base64 -d

#### Dashboards > K8sGPT Overview 메뉴를 통해 결과를 확인할 수 있다.
![image](https://github.com/acmexii/demo/assets/35618409/d0da9ca9-d341-41b4-b6aa-4e87f7630208)
'></mark-down>

    </div>
</template>


<script>
    // @group 01_04_04
    export default {
        name:'Ai-ops-trouble-shooting',
        data() {
            return {}
        },
        props: {
            "AI Ops Trouble shooting": {
                type: String
            },
        },
    }
</script>