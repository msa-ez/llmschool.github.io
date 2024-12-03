<template>
    <div>
        <div class="content" style="margin-top:-40px;">
           <h3 class="con-tit w160">LLM School 은</h3>
            <p style="font-weight: 700;">AI 코딩과 설치형 LLM에 기반한 소프트웨어 아키텍처링부터 레가시 전환, 다양한 AI 코딩 도구를 활용한 소프트웨어 아키텍처링과 프롬프트 엔지니어링 교육을 진행합니다.</p>
             <!-- <h3 class="con-tit">LLM School 에서는</h3>
            <div style="margin-bottom: 15px; line-height: 1.5; color:#444d56;">
                - 기획(Biz) 단계를 위한 AI 어시스트 모델링으로 시장 분석, 고객 세분화, 제품 개발에 AI를 활용하는 방법 등을 소개하고 있습니다.
                <br>
                <br>
                - 마이크로서비스 구현을 위한 도메인 분석에 사용되는 애자일한 프랙티스들과 설계 표준 방법론인 이벤트스토밍(Eventstorming) 모델도 AI기반 생성 기법을 제공합니다.
                <br>
                <br>
                - 구현(Dev) 단계에서는 레가시 시스템 분석, 테스트 코드 작성, 마이크로서비스 자동 코드생성 등 AI-First IDE를 활용한 패어 프로그래밍 기법과 CoPilot과 같은 코딩 어시스턴트의 사용법, 비즈니스 로직 및 테스트 코드 작성을 어떻게 간소화하는지 사례를 들어 설명합니다. 또한, GPT-Enginner를 활용한 에이전트 기반 개발과 CrewAI 등 멀티 에이전트 개발 프레임워크(Multi-agent Development Framework)에 대해서도 코딩 기법을 제시하고 있습니다.
                <br>
                <br>
                - 운영(Ops) 파트에서는 마이크로서비스의 Cloud 런타임인 Kubernetes 플랫폼 상에서 활용가능한 AI 도구를 이용하여 구현 및 테스트가 완료된 서비스를 배포하고, 배포된 서비스의 SLA(Service Level Aggrement) 준수를 위한  리자일런스 피처를 오케스트레이션 하며, Kubernetes Cluster의 보안과 트러블 슈팅 등 서비스 운영 관점에서의 최적화 방법을 소개합니다.
                <img src="https://github.com/acmexii/demo/assets/35618409/0f9e2a00-13b2-4d28-9a4f-b704331616f3" alt="">
            </div>
            <h3 class="con-tit w250">또한, LLM School에서는</h3>
            <div style="margin-bottom: 15px; line-height: 1.5; color:#444d56;">
                LLM School에서는 대표적인 오픈 소스 LLM 프로바이더인 Ollama, GPT4All 등을 기반으로 다양한 오픈소스 모델(Mistral, llama2, Codelama, Alpaca, Huggingface, etc)을 활용해 기업내 AI 기반 AM(Application Moderniztion) 및 DX(Digital eXchange) 역량 강화 방안을 제시합니다.
                <br>
                <br>
                그 내용으로는 오픈소소 LLM의 개요와 설치방법 및 기업 환경에서의 활용 사례를 다루고 있으며, 설치형 LLM을 활용해 내부 데이터 처리, 고객 서비스 향상, 제품 개발 등 다양한 분야에서 어떻게 혁신을 가져올 수 있는지 구체적인 방법을 제시합니다.
                <br>
                <br>
                <p style="font-weight: 700;">
                    오픈 소스 기반의 설치형 LLM이 필요한 이유는 다음과 같습니다.
                </p>
                <p>
                    - <span style="font-weight: 700;">보안 및 개인 정보 보호 강화:</span> 기업이 직접 관리하는 환경에서 LLMs를 운영함으로써 민감한 정보의 노출 위험을 줄이고, 개인 정보 보호 규정을 보다 효과적으로 준수할 수 있습니다.
                </p>
                <p>
                    - <span style="font-weight: 700;">맞춤형 튜닝과 최적화:</span> 공개 모델을 기업 특정 데이터셋에 맞게 세밀하게 조정하고 최적화하여, 특정 업무나 산업 분야에 더 적합한 성능을 제공할 수 있습니다.
                </p>
                <p>
                    - <span style="font-weight: 700;">비용 관리:</span> 클라우드 기반 서비스의 사용량이 늘어날수록 비용이 증가하는 반면, 자체 서버에서 모델을 운영할 경우 장기적으로 비용을 절감할 수 있습니다.
                </p>
                <img src="https://github.com/acmexii/demo/assets/35618409/4a3cb1c5-b2a5-4be2-b536-f086be57f084" alt=""> -->
            </div>
                

            <div style="margin-top: 50px; margin-bottom: 5px; line-height: 1.5; color:#444d56;">
                <h3 class="con-tit w160">LLM School 맛보기</h3>
            </div>
            <div style="color:#444d56;">
                
            </div>
        <!-- </div> -->
        <v-row style="margin:0;">
            <v-col v-for="(previewCard, index) in previewCards" :key="index"
                cols="12" md="4"
            >
                <a :href="previewCard.link" target="_blank">
                    <div
                        class="clearfix youtube-card-box"
                        outlined
                    >
                        <g-image class="youtube-card-image" style="border: 1px solid #eee;"
                            :src="previewCard.image">
                        </g-image>
                        <div>
                            <div class="card-main-text">{{ previewCard.mainText }}</div>
                            <div class="card-sub-text">{{ previewCard.subText }}</div>
                        </div>
                    </div>
                </a>
            </v-col>
            
            <!-- 
                <a href="https://youtu.be/qUb1BWnyfkw" target="_blank">
                    <div
                        class="clearfix youtube-card-box"
                        outlined
                    >
                        <g-image class="youtube-card-image" style="border: 1px solid #eee;"
                            src="https://github.com/msa-ez/llmschool.github.io/assets/113568664/a0dea1d3-383f-45d5-80b8-1ddcd1eb8cba">
                        </g-image>
                        <div>
                            <div class="card-main-text">[Cursor IDE] 분석-구현-리팩토링</div>
                            <div class="card-sub-text">디시전 테이블 활용</div>
                        </div>
                    </div>
                </a>
                <a href="https://youtu.be/D0rSP2S8hOk" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image" style="border: 1px solid #eee;"
                        src="https://github.com/msa-ez/llmschool.github.io/assets/113568664/b56e3ba4-c4f1-40a3-88f3-22b526b4a96b">
                    </g-image>
                    <div>
                        <div class="card-main-text">[Cursor IDE] 레가시 분석과 모더나이징</div>
                        <div class="card-sub-text">디자인 패턴 적용과 클린 아키텍처 전환</div>
                    </div>
                </div>
            </a>
            <a href="https://youtu.be/XEhYW48WbBg" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image" style="border: 1px solid #eee;"
                        src="https://github.com/msa-ez/llmschool.github.io/assets/113568664/eb1073cc-b3cf-4ade-a6d7-4b8e2353a618">
                    </g-image>
                    <div>
                        <div class="card-main-text">[Cursor IDE] 레가시 분석과 모더나이징</div>
                        <div class="card-sub-text">jsp 파일에 대한 모더나이징</div>
                    </div>
                </div>
            </a> -->
        </v-row>
        <!-- <div style="width:100%; height:3px; background-color:#E2E8F0;margin-top: 20px;"></div> -->
        <!-- <div style="width:100%; height:12px; background-color:#ebf0f4;"></div> -->
    </div>
</template>

<script>
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            model: null,
            previewCards: [
                {
                    link: "https://youtu.be/qUb1BWnyfkw",
                    image: "https://github.com/msa-ez/llmschool.github.io/assets/113568664/a0dea1d3-383f-45d5-80b8-1ddcd1eb8cba",
                    mainText: "[Cursor IDE] 분석-구현-리팩토링",
                    subText: "디시전 테이블 활용"
                },
                {
                    link: "https://youtu.be/D0rSP2S8hOk",
                    image: "https://github.com/msa-ez/llmschool.github.io/assets/113568664/b56e3ba4-c4f1-40a3-88f3-22b526b4a96b",
                    mainText: "[Cursor IDE] 레가시 분석과 모더나이징",
                    subText: "디자인 패턴 적용과 클린 아키텍처 전환"
                },
                {
                    link: "https://youtu.be/XEhYW48WbBg",
                    image: "https://github.com/msa-ez/llmschool.github.io/assets/113568664/eb1073cc-b3cf-4ade-a6d7-4b8e2353a618",
                    mainText: "[Cursor IDE] 레가시 분석과 모더나이징",
                    subText: "jsp 파일에 대한 모더나이징"
                }
            ]
        }
    },
    mounted() {

    },
}
</script>
  
<style>
.banner-mo {
    display: none;
}
@media only screen and (max-width:676px) {
    .banner-pc {
        display: none;
    }
    .banner-mo {
        display: block;
    }
}
</style>