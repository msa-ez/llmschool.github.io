<template>
    <div>
        <div class="content" style="margin-top:-40px;">
            <h3 class="con-tit w160">LLM School 은</h3>
            <p>LLM(Large Language Model) School은 AI 기반의 협업 도구와 AI Backend를 활용하여 마이크로서비스를 좀더 쉽고 더욱 더 에자일하게 구현하는 다양한 분석, 설계 및 코딩 기법(Pair Programming)과 운영 방법론 배양을 그 목표로 합니다. </p>
            <div style="margin-bottom: 15px; line-height: 1.5; color:#444d56;">
                LLM(대규모 언어모델)이란, 방대한 양의 데이터를 기반으로 사전 학습된 머신 러닝 모델로 주어진 프롬프트에 대해 인간과 유사한 응답을 생성하기 위해 방대한 양의 텍스트 데이터로 훈련된 고급 AI 모델입니다. 이러한 LLM을 SW개발 아키텍처에 잘 활용하기 위해서는 양질의 응답을 위한 양질의 프롬프트(Prompt)로 질의해야 합니다. 그렇게 함으로써 LLM은 입력에 대한 포괄적인 이해를 활용, 상황에 대한 더 적절한 응답을 생성할 수 있습니다.
                <br>
                <br>
                그러나, 이러한 대규모 언어 모델들은 한번에 처리 가능한 컨텍스트 사이즈가 한정되어 있을 뿐 아니라, 입력 컨텍스트가 길어지면 모델의 계산 속도는 느려지고 처리 비용이 증가함은 물론, 짧은 컨텍스트에 비해 상대적으로 응답 콘텐츠 측면에서 단위 품질이 낮아집니다. 
                <br>
                <br>
                이는 마치 도메인의 복잡도를 낯추고 컨텍스트를 작은 단위로 쪼개어서 애자일한 방법으로 단위 서비스의 품질을 높이는 분할과 정복(Divide and Conquer) 패턴의 마이크로서비스와 유사한 점이라 할 수 있습니다. 
            </div>
            <h3 class="con-tit">LLM School 에서는</h3>
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
                <img src="https://github.com/acmexii/demo/assets/35618409/4a3cb1c5-b2a5-4be2-b536-f086be57f084" alt="">
            </div>
                

            <!-- <div style="margin-bottom: 5px; line-height: 1.5; color:#444d56;">
            </div>
            <div style="color:#444d56;">
                
            </div> -->
        </div>
        <!-- <v-row style="margin:0;">
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_j5qld31Owdmf1XvqAinR1" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image" style="border: 1px solid #eee;"
                        src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/c080271b-d7dc-4e5e-ba90-ba8af41b792d">
                    </g-image>
                    <div>
                        <div class="card-main-text">24년 1월 웨비나</div>
                        <div class="card-sub-text">생성형 AI를 이용한 SW아키텍처링과 마이크로서비스 구현</div>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_N7xnmf4XDJv-G-APhjWa-" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/msa-ez/msaschool.github.io/assets/149130268/517e2fc5-3064-4534-9e9c-bce75838404f">
                    </g-image>
                    <div>
                        <div class="card-main-text">23년 11월 웨비나</div>
                        <div class="card-sub-text">오픈소스 기반의 Private 온-프렘 클라우드 플랫폼 사례 및 소개</div>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW9sTeDiSY_D3x7q2NE1f7vK" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/msa-ez/msaschool.github.io/assets/113568664/bc3467a2-2b1e-4eab-abd3-bdd490a3b6a6">
                    </g-image>
                    <div>
                        <div class="card-main-text">23년 10월 웨비나</div>
                        <div class="card-sub-text">ChatGPT와 MSAEZ로 쉽고 빠르게 애견용품 사업을 디지털 비즈니스로 바꿔보자!</div>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW8CYIuf52d06BHfpgS6Q0-X" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/kykim97/factory-pattern/assets/113568664/1b393e58-f09d-4fdc-9126-244ac4a5d98c">
                    </g-image>
                    <div>
                        <div class="card-main-text">23년 8월 웨비나</div>
                        <div class="card-sub-text">ChatGPT와 MSAEZ를 활용해 1시간 만에 기업 기존 시스템을 SaaS로 전환해보기</div>
                    </div>
                </div>
            </a>            
            <a href="https://www.youtube.com/playlist?list=PLEr96Fo5umW_-Ke68S8pmiq8x1pP9qVOY" target="_blank">
                <div
                    class="clearfix youtube-card-box"
                    outlined
                >
                    <g-image class="youtube-card-image"
                        src="https://github.com/kykim97/factory-pattern/assets/113568664/271e0ff2-5aaf-4f73-a27b-c62e14a41fbb">
                    </g-image>
                    <div>
                        <div class="card-main-text">23년 7월 웨비나</div>
                        <div class="card-sub-text">ChatGPT를 활용하여 쉽고 빠르게 서비스 기획부터 사업 구현하기</div>
                    </div>
                </div>
            </a>
        </v-row> -->
        <!-- <div style="width:100%; height:3px; background-color:#E2E8F0;margin-top: 20px;"></div>
        <div style="width:100%; height:12px; background-color:#ebf0f4;"></div> -->
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
            webinarCard : [
                {
                    title: "11월 웨비나",
                    subTitle: "오픈소스 기반의 Private 온-프렘 클라우드 플랫폼 사례 및 소개",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_N7xnmf4XDJv-G-APhjWa-",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/517e2fc5-3064-4534-9e9c-bce75838404f"
                },
                {
                    title: "10월 웨비나",
                    subTitle: "ChatGPT와 MSAEZ로 쉽고 빠르게 애견용품 사업을 디지털 비즈니스로 바꿔보자!",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW9sTeDiSY_D3x7q2NE1f7vK",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/a27eaa0b-1356-420c-91ed-7422e0935e1e"
                },
                {
                    title: "8월 웨비나",
                    subTitle: "ChatGPT와 MSAEZ를 활용해 1시간 만에 기업 기존 시스템을 SaaS로 전환해보기",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW8CYIuf52d06BHfpgS6Q0-X",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/09ebe08a-9c29-4a93-a1e6-e607d5568257"
                },
                {
                    title: "7월 웨비나",
                    subTitle: "ChatGPT를 활용하여 쉽고 빠르게 서비스 기획부터 사업 구현하기",
                    youtubeUrl: "https://www.youtube.com/playlist?list=PLEr96Fo5umW_-Ke68S8pmiq8x1pP9qVOY",
                    imgUrl: "https://github.com/msa-ez/msaschool.github.io/assets/149130268/4ab69e92-c87a-4acf-a722-0f175115ae81"
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