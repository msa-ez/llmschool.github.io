<template>
    <div>
        <mark-down class="content">
            


## Kubernetes AI Plug-in

AI 어시스턴트를 활용한 페어 프로그래밍으로 구현 및 테스트가 끝난 마이크로서비스는 메뉴얼 방식, 또는 파이프라인을 통한 자동방식으로 쿠버네티스에 배포합니다. 쿠버네티스에 배포하려면 배포를 위한 메니페스트(Manifest), 즉 배포 내용을 선언적으로 기술한 배포 기술자(Deployment Descriptor)가 필요합니다.

LLM School에서는 배포를 위한 Manifest 자동생성과 배포된 마이크로서비스에 대한 오케스트레이션, 쿠버네티스 Security Scanning 및 트러블 슈팅을 위한 Kubernetes AIOps Plug-in인 Kubectl-ai, Kubectl GPT, K8sGPT에 대해 간략히 소개합니다.

### AIOps Plug-ins

1. Kubectl-ai

쿠버네티스를 컨트롤하는 로컬 머신에 설치되어 'kubectl ai'와 같이 쿠버네티스 클라이언트의 오퍼레이션으로 동작합니다.
동작을 위한 샘플 프롬프트와 그 결과는 아래와 같습니다. 
```
kubectl ai "3개의 복제본을 가지는 주문서비스 배포 YAML을 생성해"
```

위 프롬프트에 대해, AI 어시스턴트는 아래 YAML을 생성해 줍니다.
```
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
    	image: nginx:1.7.9
    	ports:
    	- containerPort: 80
```    	

응답 결과에서 사용자는 'Reprompt'로 재 생성하거나, 'Apply'를 통해 바로 내 클러스터에 객체를 생성할 수 있습니다.  


2. Kubectl-gpt

이 플러그인은 배포된 마이크로서비스에 대해 운영 관점에서 오케스트레이션 명령을 생성해 주는 AI 어시스턴트로, 자동 스케일 아웃, 클라우드 볼륨 핸들링(PVC), 등 배포된 서비스에 대한 지속적인 관리에 필요한 쿠버네티스 커맨드를 자동 생성해 줍니다.

쿠버네티스를 컨트롤하는 로컬 머신에 설치되어 'kubectl gpt'와 같이 쿠버네티스 클라이언트의 오퍼레이션으로 동작합니다.
동작을 위한 샘플 프롬프트와 그 결과는 아래와 같습니다. 
```
kubectl gpt "주문 서비스의 복제본을 5개로 확장시켜 줘."
```

위 프롬프트에 대해, AI 어시스턴트는 아래 Kubernetes Command를 생성해 줍니다.
```
kubectl scale deployment order --replicas=5
```

3. K8sGPT

K8sGPT는 Kubernetes 클러스터 내에서 발생하는 문제를 표시하도록 설계된 기본 명령이 포함된 CLI 도구입니다. 현재 쿠버네티스 클라이언트에 설정된 컨텍스트 클러스트 상에 문제점을 파악하고, 문제점을 해결하기 위한 솔루션을 자연어 기반으로 제공해 줍니다.


쿠버네티스를 컨트롤하는 로컬 머신에 설치되어 'k8sgpt'와 같이 별도의 바이너리로 실행되어 동작합니다.
동작을 위한 샘플 프롬프트와 그 결과는 아래와 같습니다. 
```
k8sgpt analyze --explain
```

위 프롬프트에 대해, AI 어시스턴트는 설정된 타겟 클러스터의 문제점을 파악하고, 모든 문제점에 대한 솔루션을 제시하며, 노드, 포드, PVC, ReplicaSet, 서비스, 이벤트, 수신, StatefulSet, 배포, CronJobs, NetworkPolicies, 심지어 HPA 및 PDB를 포함한 수많은 Kubernetes 객체에 대한 내장 분석기를 제공합니다. 


위에 언급된 AIOps 플러그인들은 최신 LLM 모델상에서도 동작하며 자연어(NLP: Natural Language Processing)처리를 지원합니다. 플러그인들이 동작하려면 OpenAI API 키 설정이 추가로 필요합니다.
        </mark-down>

    </div>
</template>


<script>
    // @group 01_01_07
    export default {
        name:'Kubernetes',
        data() {
            return {}
        },
        props: {
            "쿠버네티스 AI 플러그인": {
                type: String
            },
        },
    }
</script>
