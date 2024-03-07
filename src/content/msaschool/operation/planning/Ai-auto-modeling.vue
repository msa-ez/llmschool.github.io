<template>
    <div>
        <mark-down class="content">
            
## MSAEZ를 활용한 AI 기반 분석 설계 기법

### MSAEZ란?

MSAEZ는 마이크로서비스의 분석, 설계, 구현 및 운영을 지원하도록 설계된 통합 플랫폼입니다. 이 플랫폼을 통해 비즈니스 전문가와 개발자는 도메인 중심 설계 및 이벤트스토밍 기술을 사용하여 대상 도메인을 공동으로 분석하고 설계할 수 있습니다. 또한 설계된 서브 도메인별로 클린 아키텍처(Clean Architecture)를 기반으로 하는 소스 코드의 자동 생성이 가능합니다.

MSAEZ는 전 라이프사이클에 걸쳐 ChatGPT를 활용한 자동화 및 가이드 기능을 지원하고 있어 애자일한 클라우드 네이티브 애플리케이션 구현에 필요한 최적의 수행 환경을 제공합니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/af643a67-7c28-434b-a0cc-d276aff9d4d6)

MSAEZ는 Biz-Dev-Ops 풀 라이프사이클을 지원합니다. 설치가 필요없이 100% 브라우저 기반에서 동작하며 협업기반의 팀워크를 지원하는 최신의 OpenAI 엔진들이 탑재되어 비즈니스 기획자, 데브옵스 개발자, 클라우드 운영자를 위애 비즈니스 기획에서 구현, 테스트, 배포를 아우르는 클라우드 네이티브한 task들을 자동화하며 다양한 에자일한 경험들을 제공합니다.

### 실습 준비

**https://www.msaez.io/#/** 에 접속합니다. 

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/b5f23df0-9291-4910-8114-257b48792a89)

우측 상단 프로필 아이콘을 클릭해 Github 계정으로 로그인합니다. 

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/46639b88-b405-499f-8e3f-e38396fa434f)

### Customer Journey Map 고객 여정맵

입력창 상단에 있는 예제 중 **음식점 배달** 을 선택하고 5가지 옵션 중 **고객 여정맵** 을 선택합니다. 

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/b36b84d9-c9e0-447e-9339-da815b9b837d)

페르소나가 생성되면 하나를 선택하고 **CREATE MODEL** 버튼을 클릭해 고객 여정맵을 생성합니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/79ce75f6-4ad2-412f-be10-502d19bb7a22)

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/2473c945-3906-4c11-9d56-d0ce13e73af4)

### 완성된 고객 여정맵 예시

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/6a882ea1-219a-41ad-bc50-66db282cea56)

### Business Model Canvas 비즈니스 모델 캔버스

옵션 선택 단계로 이동해 **비즈니스 모델 캔버스** 를 선택합니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/116de5ca-73e3-44c8-ba9a-47ab5ec7f960)

### 완성된 비즈니스 모델 캔버스 예시
![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/18deb6c9-73ed-4a8d-bc72-2342f5ad3ec7)

### User Story Map 사용자 스토리 맵

옵션 선택 단계로 이동해 **사용자 스토리 맵** 을 선택합니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/24a359ff-c73d-4277-8fc2-ab47145700c6)

### 완성된 사용자 스토리 맵 예시

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/8f566256-3a4e-4ce2-a3ad-bac06a2eb5e0)

### Eventstorming Model 이벤트스토밍 모델

옵션 선택 단계로 이동해 **이벤트스토밍** 을 선택합니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/a86fc85e-dae5-4ab0-a3a5-31eaf795cee4)

사용자 스토리가 생성되면 **CREATE MODEL** 버튼을 클릭해 이벤트스토밍 모델을 생성합니다. 

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/853f2e9c-0284-4e42-aa50-7e7f54427b33)

사용자 스토리를 기반으로 도메인 이벤트가 자동으로 생성되면 이를 추가, 제거, 수정 후 **CONTINUE** 버튼을 클릭해 이벤트스토밍 모델을 완성합니다. 

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/7b416cef-fe59-46e6-b639-742e77fc324c)

### 완성된 이벤트스토밍 모델 예시

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/b89607f1-bfb6-4430-bc80-4e5c0a51cb85)

</mark-down>

    </div>
</template>


<script>
    // @group 02_01_02
    export default {
        name:'AutoModeling',
        data() {
            return {}
        },
        props: {
            "AI를 활용한 MSA설계": {
                type: String
            },
        },
    }
</script>