<template>
    <div>
        <mark-down class="content">
            
# Open Source LLM

## 설치형 LLM의 필요성

업무 프로세스를 진행함에 있어 LLM을 사용 시 모델 자체의 결함이나 보안 상의 문제로 고민을 하는 경우가 많습니다.

이러한 문제를 해결하기 위해 등장한 설치형 오픈소스 LLM은 데이터 시큐리티나 프라이버시 문제로부터 자유롭다는 장점을 가지고 있고, 사내 인트라넷에서도 사용할 수 있을 정도로 보안 상 메리트가 있습니다.

또한 기존에 AI를 기반으로 한 업무를 진행하기 위해서는 내부의 인공지능 전문가를 유지하기 위해 상당한 비용이 요구되었지만, 지금은 시장에서 ChatGPT 3.5 수준의 오픈소스 LLM을 쉽게 확보할 수 있습니다.

이 외에도 설치형 LLM을 도입하게 되면 벤더 사의 영향을 적게 받을 수 있고, 언어모델을 자사의 소스에 맞게 직접 커스터마이징하는 등 다양한 장점을 갖습니다.

## 설치형 LLM 기반 개발 환경 구성

![4 38 51](https://github.com/msa-ez/llmschool.github.io/assets/113568664/f0141250-f215-472f-bb4b-246e60612eeb)

설치형 LLM 기반으로 환경을 구성하려면 LLM Provider와 LLM Model이 필요합니다. 

시장에 다양하게 구비되어 있는 모델들 중 용도에 맞는 특정 모델을 다운로드 받게 되면 LLM 툴이 해당 모델을 메모리에 로드해서 일종의 서버처럼 동작하게 됩니다. 

그 후 네트워크를 통해 랭체인과 같은 어플리케이션이 네트워크에 접속해서 모델을 가져다 쓰는 구조로 작동합니다. 즉, LLM 프로바이더가 마치 Chat GPT 같은 역할을 하게 되는 것입니다. 

그리고 랭체인 같은 경우는 LLM 프로바이더와 같이 스스로 모델을 로드할 수도 있는데, 사용법에 난이도가 조금 있어 별도의 학습이 병행되어야 합니다.

        </mark-down>

    </div>
</template>


<script>
    // @group 05_01_03
    export default {
        name:'LLM-Setting',
        data() {
            return {}
        },
        props: {
            "설치형 LLM 개발 환경 구성": {
                type: String
            },
        },
    }
</script>