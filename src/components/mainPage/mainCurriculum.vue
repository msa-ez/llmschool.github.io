<template>
    <div>
        <div class="content" style="margin-top:-30px;">
            <h3 class="con-tit w220">LLM School 교과정은</h3>
            <p style="font-weight: 700;">클라우드 네이티브 전문가가 되는 체계적인 업계 최고 커리큘럼이 준비되어 있습니다. 또한, 수강하시는 기업을 위해 다양하게 스케줄링된 학습 유형을 제공합니다.</p>
        </div>
        <br>
        <div class="is-not-mobile-main-top">
            <div style = "font-size: 16px; font-weight: 600; margin-bottom: 10px;">교육 과정 Overview</div>
            <table class="tbl-edu" style="width:100%;">
                <th style="padding: 0;">
                    <div class="tbl-title" style="width: 97%;">
                        <a class="tbl-title-txt"></a>
                    </div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title">
                        <a class="tbl-title-txt" style="color: #fff;" href="/operation/education/fundamental/">LLM Application Development</a>
                    </div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title">
                        <a class="tbl-title-txt" style="color: #fff;" href="/operation/education/curriculum/">Intermediate</a>
                    </div>
                </th>
                <th style="padding: 0;">
                    <div class="tbl-title">
                        <a class="tbl-title-txt" style="color: #fff;" href="/operation/education/advanced/">Advanced</a>
                    </div>
                </th>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center;">Biz</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Prompt Engineering의 기본<br>
                        &nbsp;&nbsp;- In-Context Learning<br>
                        &nbsp;&nbsp;- CoT; Chain of Thought<br>
                        &nbsp;&nbsp;- ReAct<br>
                        &nbsp;&nbsp;- Plan-and-solve<br>
                        &nbsp;&nbsp;- Context Window Limitations<br><br>
                        • Open Al API를 직접 사용하기<br>
                        &nbsp;&nbsp;- curl을 기반으로 한 간단한 회원 안내 서비스<br>
                        &nbsp;&nbsp;- 비전 api를 이용한 회원 가입 사진 등록 판독<br>
                        &nbsp;&nbsp;- 회원 아바타 이미지 자동 생성<br><br>
                        • Langchain 기본<br>
                        &nbsp;&nbsp;- 파이썬 기본과 개발환경 설정<br>
                        &nbsp;&nbsp;- Why Langchain<br>
                        &nbsp;&nbsp;- 간단한 Tool 호출을 하는 챗봇 만들기<br>
                        &nbsp;&nbsp;- chain 구현<br>
                        &nbsp;&nbsp;- Langsmith을 이용한 디버깅<br><br>
                        • Langchain 심화 - RAG 애플리케이션 만들기<br>
                        &nbsp;&nbsp;- RDB를 기반한 RAG<br>
                        &nbsp;&nbsp;- 벡터 데이터베이스와 Pinecone을 기반한 RAG<br>
                        &nbsp;&nbsp;- Knowledge Graph와 RAG<br>
                        &nbsp;&nbsp;- LlamaIndex<br><br>
                        • 서비스 론칭<br>
                        &nbsp;&nbsp;- Langserve을 이용한 웹 서비스화<br>
                        &nbsp;&nbsp;- 도커라이징 하여 서비스를 구글 클라우드 런에 서비스 하기<br>
                        &nbsp;&nbsp;- 서비스를 GPTs 를 통하여 OpenAI 마켓에 공유하기<br><br>
                        • 하이퍼 오토메이션- Langgraph<br>
                        •&nbsp;&nbsp;- Langraph 을 이용한 복잡한 에이전트 연동<br>
                        &nbsp;&nbsp;- CrewAl와 Langgraph를 연한 멀티에이전트<br>
                        &nbsp;&nbsp;- (ProcessGPT)<br><br>
                        • 폐쇄형 환경<br>
                        &nbsp;&nbsp;- 설치형 LLM<br>
                        &nbsp;&nbsp;- 설치형 VSCode Copilot<br><br>
                        • 파인튜닝<br>
                        &nbsp;&nbsp;- LORA<br><br>
                    </td>
                    <td style="border-left: 1px solid #aaa;">
                        • Eventstorming<br>
                        - Eventstorming E-Commerce Domain<br>
                        - Big picture & Design level Eventstorming<br>
                        - Context Mapping, CQRS<br><br>
                        
                        • Aggregate Modeling<br>
                        -  Entity Design with Class Diagrams
                    </td>
                    <td style="border-left: 1px solid #aaa;">
                        • Eventstorming for various Domains<br><br>
                        • Core-supporting-generic domain prioritization<br>
                        - Wardlley mapping, Impact mapping<br><br>
                        
                        • 중요도에 따른 구현 전략<br>
                        - Transaction Script<br><br>
                        • Apply Ubiquitous Language 
                    </td>
                </tr>
                <!-- <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center;">Dev</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Obejct Oriented Programming<br>
                        - Object Oriented Framework<br>
                        - Spring boot, JDBC and JPA<br>
                        - Web UI (VueJS)<br><br>
                        • Understanding GitHub & GitPod<br><br>
                        • Build automation tool<br>
                        - Maven, Gradle<br><br>
                        • Linux OS Basics
                    </td>
                    <td style="border-left: 1px solid #aaa;">
                        • Microservice Clean Architecture<br>
                        - ES Model and Implementation mapping<br><br>
                        • Circuit Breaker Pattern<br>
                        - Req/Res with FeignClient<br><br>
                        • Event driven Microservice<br>
                        - Event Pub/Sub, Compensation & CQRS<br><br>
                        • Message Broker – Kafka<br><br>
                        • Application Packaging & Dockerizing
                    </td>
                    <td style="border-left: 1px solid #aaa;">
                        • Extending Event driven Microservice<br>
                        - 멱등성, 트랜잭션, Kafka Parallel Processing, Deadline 처리<br>
                        - Dedicated Framework (Eventuate, Axon)<br><br>
                        • Inter-service communication<br>
                        - CDC, gRPC Client/Server, Spring Reactive<br><br>
                        • Microservice Authentication/ Authorization<br>
                        - Centralized Session (Redis, Memcached)<br>
                        - Client Token (JWT)
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center;">Ops</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Cloud Infra, VM<br>
                        - CSP introduction<br>
                        - VM managed Service<br><br>
                        • Deploy to VM<br>
                        - VM, Dabase provisioning<br>
                        - Deploy to Cloud VM
                    </td>
                    <td style="border-left: 1px solid #aaa;">
                        • Cloud Software Platform, Docker<br><br>
                        • Kubernetes 인 액션<br>
                        - Kubernetes SLA features & Telemetry<br>
                        - Deploy manifests Diagramming<br><br>
                        • Service Mesh (Istio)<br>
                        - Traffic Management (Retry, Timeout, Circuit breaker)<br><br>
                        • DevOps Pipeline (Jenkins, CSP managed)
                    </td>
                    <td style="border-left: 1px solid #aaa;">
                        • Service Mesh deep dive<br>
                        - Security, Monitoring, EnvoyFilter, Tracing<br><br>
                        • GitOps Methodology<br>
                        - Workflow with Jenkins & ArgoCD<br>
                        - Canary Deployment with Canary Scoring<br><br>
                        • Serverless<br>
                        - Knative, Tekton 
                    </td>
                </tr> -->
                <tr>
                    <td>
                    </td>
                    <td>
                        <div style="text-align:center;">
                            <a href="/operation/education/fundamental/">
                                <button style="background-color:#fff;
                                border-radius: 4px;
                                border:2px solid #147c7f;
                                height: 36px;
                                width: 90px;
                                text-align: center;
                                line-height: 1.2;
                                font-size: 14px;
                                font-weight: 700;">세부사항
                                </button>
                            </a>
                        </div>
                    </td>
                    <td>
                        <div style="text-align:center;">
                            <a href="/operation/education/curriculum/">
                            <button style="background-color:#fff;
                                border-radius: 4px;
                                border:2px solid #147c7f;
                                height: 36px;
                                width: 90px;
                                text-align: center;
                                line-height: 1.2;
                                font-size: 14px;
                                font-weight: 700;">세부사항
                            </button>
                            </a>
                        </div>
                    </td>
                    <td>
                        <div style="text-align:center;">
                            <a href="/operation/education/advanced/">
                            <button style="background-color:#fff;
                                border-radius: 4px;
                                border:2px solid #147c7f;
                                height: 36px;
                                width: 90px;
                                text-align: center;
                                line-height: 1.2;
                                font-size: 14px;
                                font-weight: 700;">세부사항
                            </button>
                            </a>
                        </div>
                    </td>
                </tr>
            </table>
            <div style="width:100%; margin-top:20px; display:inline-flex; justify-content: space-evenly; border: 1px dashed #E2E8F0; border-radius:5px; padding: 10px; box-shadow: 0 2px 2px 0 rgba(22,22,22, 0.1);">
                <div><b>교육 문의</b> : help@uengine.org</div>
                <div><b>정산 담당</b> : 서원주(tjdnjswn@uengine.org)</div>
                <a target="_blank" style="color:blue;" href="https://open.kakao.com/o/sPDIQmEf">카카오톡 오픈채팅</a>
            </div>
        </div>

        <div class="is-mobile-main-top">
            <div style = "font-size:16px; font-weight: 600; margin-bottom: 10px;">교육 과정 Overview</div>
            <div class="tbl-title">
                <a class="tbl-title-txt" style="color:#fff;" href="/operation/education/fundamental/">Fundamental</a>
            </div>
            <table style="width: 100%;">
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Biz</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Object Oriented Design<br>
                        - OOP Design Principles<br><br>
                        • UML & Design Patterns
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Dev</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Obejct Oriented Programming<br>
                        - Object Oriented Framework<br>
                        - Spring boot, JDBC and JPA<br>
                        - Web UI (VueJS)<br><br>
                        • Understanding GitHub & GitPod<br><br>
                        • Build automation tool<br>
                        - Maven, Gradle<br><br>
                        • Linux OS Basics
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Ops</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Cloud Infra, VM<br>
                        - CSP introduction<br>
                        - VM managed Service<br><br>
                        • Deploy to VM<br>
                        - VM, Dabase provisioning<br>
                        - Deploy to Cloud VM
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="text-align:center;">
                            <a href="/operation/education/fundamental/">
                            <button style="background-color:#fff;
                                border-radius: 4px;
                                border:2px solid #147c7f;
                                height: 36px;
                                width: 90px;
                                text-align: center;
                                line-height: 1.2;
                                font-size: 14px;
                                font-weight: 700;">세부사항
                            </button>
                            </a>
                        </div>
                    </td>
                </tr>
            </table>
            <div class="tbl-title">
                <a class="tbl-title-txt" style="color:#fff;" href="/operation/education/curriculum/">Intermediate</a>
            </div>
            <table style="width: 100%;">
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Biz</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Eventstorming<br>
                        - Eventstorming E-Commerce Domain<br>
                        - Big picture & Design level Eventstorming<br>
                        - Context Mapping, CQRS<br><br>
                        
                        • Aggregate Modeling<br>
                        -  Entity Design with Class Diagrams
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Dev</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Microservice Clean Architecture<br>
                        - ES Model and Implementation mapping<br><br>
                        • Circuit Breaker Pattern<br>
                        - Req/Res with FeignClient<br><br>
                        • Event driven Microservice<br>
                        - Event Pub/Sub, Compensation & CQRS<br><br>
                        • Message Broker – Kafka<br><br>
                        • Application Packaging & Dockerizing
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Ops</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Cloud Software Platform, Docker<br><br>
                        • Kubernetes 인 액션<br>
                        - Kubernetes SLA features & Telemetry<br>
                        - Deploy manifests Diagramming<br><br>
                        • Service Mesh (Istio)<br>
                        - Traffic Management (Retry, Timeout, Circuit breaker)<br><br>
                        • DevOps Pipeline (Jenkins, CSP managed)
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="text-align:center;">
                            <a href="/operation/education/curriculum/">
                                <button style="background-color:#fff;
                                border-radius: 4px;
                                border:2px solid #147c7f;
                                height: 36px;
                                width: 90px;
                                text-align: center;
                                line-height: 1.2;
                                font-size: 14px;
                                font-weight: 700;">세부사항
                                </button>
                            </a>
                        </div>
                    </td>
                </tr>
            </table>
            <div class="tbl-title">
                <a class="tbl-title-txt" style="color:#fff;" href="/operation/education/advanced/">Advanced</a>
            </div>
            <table style="width: 100%;">
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Biz</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Eventstorming for various Domains<br><br>
                        • Core-supporting-generic domain prioritization<br>
                        - Wardlley mapping, Impact mapping<br><br>
                        
                        • 중요도에 따른 구현 전략<br>
                        - Transaction Script<br><br>
                        • Apply Ubiquitous Language 
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Dev</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Extending Event driven Microservice<br>
                        - 멱등성, 트랜잭션, Kafka Parallel Processing, Deadline 처리<br>
                        - Dedicated Framework (Eventuate, Axon)<br><br>
                        • Inter-service communication<br>
                        - CDC, gRPC Client/Server, Spring Reactive<br><br>
                        • Microservice Authentication/ Authorization<br>
                        - Centralized Session (Redis, Memcached)<br>
                        - Client Token (JWT)
                    </td>
                </tr>
                <tr style="border-bottom: 1px solid #aaa;">
                    <td class="main-table-subtitle" style="padding-left:15px; text-align:center; width:80px;">Ops</td>
                    <td style="border-left: 1px solid #aaa;">
                        • Service Mesh deep dive<br>
                        - Security, Monitoring, EnvoyFilter, Tracing<br><br>
                        • GitOps Methodology<br>
                        - Workflow with Jenkins & ArgoCD<br>
                        - Canary Deployment with Canary Scoring<br><br>
                        • Serverless<br>
                        - Knative, Tekton 
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="text-align:center;">
                            <a href="/operation/education/advanced/">
                                <button style="background-color:#fff;
                                border-radius: 4px;
                                border:2px solid #147c7f;
                                height: 36px;
                                width: 90px;
                                text-align: center;
                                line-height: 1.2;
                                font-size: 14px;
                                font-weight: 700;">세부사항
                                </button>
                            </a>
                        </div>
                    </td>
                </tr>
            </table>
            <div style="margin-top:20px; display:flex; flex-direction: column; border: 1px dashed #E2E8F0; border-radius:5px; padding: 10px; box-shadow: 0 2px 2px 0 rgba(22,22,22, 0.1);">
                <div style="margin-right:20px;">교육 문의 : help@uengine.org</div>
                <div style="margin-right:20px;">정산 담당 : 서원주(tjdnjswn@uengine.org)</div>
                <a target="_blank" style="color:blue;" href="https://open.kakao.com/o/sPDIQmEf">카카오톡 오픈채팅</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    components: {

    }
}
</script>
  
<style>
</style>    