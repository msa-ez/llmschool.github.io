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

## Ollama

Ollama는 로컬 LLM을 구축할 수 있는 솔루션으로, 모든 운영체제에서 사용 가능합니다(Windows는 베타 버전 지원).

**https://ollama.com/** 에서 운영체제 선택 후 다운로드 가능합니다. 

![4 56 35](https://github.com/msa-ez/llmschool.github.io/assets/113568664/fc28b209-97a6-40c8-a6b4-b3be0ca231cd)

**https://ollama.com/library** 에서는 Ollama에서 제공하는 전체 모델 리스트를 확인할 수 있는데, gemma, llama2, mistral 등 인기 있는 모델은 대부분 제공하고 있습니다. 

![4 59 15](https://github.com/msa-ez/llmschool.github.io/assets/113568664/72ef2188-a2c0-461a-b786-794d40c1bbf5)

특정 모델을 선택하면 해당 모델의 정보를 확인할 수 있는데, Tag를 확인해 모델의 구체적인 정보를 선택해 사용할 수 있습니다. **latest** 버전을 선택하면 가장 최신 버전을 적용할 수 있습니다. 

![5 07 38](https://github.com/msa-ez/llmschool.github.io/assets/113568664/e3115dd8-f12f-4d4c-8313-0874c92616ab)

### Ollama Model Tag

|  기본 태그 | 용도 | 파라미터 | 양자화 |
| ---|---|---|---|
|  Latest : 최신모델 | Instruct : 채팅 전용으로 Fine-tuning 한 모델(Default)  | 7b : 7 Billions 모델  | q2, q3, q4, q5, q6, q7, q8 : X Bit로 양자화(높은 비트로 양자화 한 것일수록 손실 적음)  |
|  vX : 모델의 버전 | Text : 텍스트 완성 전용, 초기모델  | 13b : 13 Billions 모델  | K, K_S, K_M, K_L : 변형 방법(일반적으로 성능은 S - M - L 순서대로 좋음)  |

Ollama는 채팅 모델을 기본으로 삼아 주로 Instruct 모델을 latest로 설정합니다.

또한 모델에서 사용하는 실제 파라미터는 디테일 높은 수준의 값을 웨이트로 사용하기 때문에 용량이 너무 크다는 문제점이 있는데, 이를 해결하기 위해 양자화를 통해 정밀도를 낮추고 용량을 아끼는 방법을 채택했습니다. 

굉장히 큰 소수(0.nnnnnnnn...)로 구성된 파라미터를 반올림하는 것인데, 반올림을 얼마나 많이 했는지에 따라 q8부터 q2까지 다양합니다. 

q8은 원본과 거의 비슷한 수준의 정밀도를 보여주지만 용량 면에서도 큰 차이를 보이지 않습니다. q2 수준으로 내려가게 되면 양자화의 반올림 정도가 심해 모델의 정확도가 떨어지게 됩니다.

어느 정도의 성능도 보장이 되면서 용량 절약까지 가져가기 위해서는 q4~5 정도가 적당하고, Ollama에서도 이 정도 수준을 기본 양자화 모델로 채택합니다. 

![스크린샷 2024-03-05 오후 3 17 37](https://github.com/msa-ez/llmschool.github.io/assets/113568664/1ffbc893-2212-4d56-8768-73a828b8a7f3)

하나의 예로 실제 Ollama에서 Mistral 모델의 태그 중 일부를 보면 **7b-instruct-q5_K_S** 와 같은 형태로 나타나는데, 이를 해석하면 7b 파라미터를 가진 instruct 모델을 q5 수준으로 양자화한 버전이라고 해석할 수 있습니다. 

### Ollama 기본 명령어

- Serve : 서버 시작 - Ollama를 실행하면 기본적으로 서버가 올라가므로 별도 입력할 필요 X
- Pull : 모델을 받아서 로컬에 저장
- List : 저장된 모델 조회
- Run : 선택한 모델로 콘솔 테스트 - 앞서 Pull 받지 않아도 Run 명령어 실행 시 자동으로 Pull을 진행
- Rm : 선택한 모델 삭제
- Create : Modelfile로부터 모델 추가 - Ollama에 새로운 커스텀 모델을 등록할 때 사용

위 명령어들을 활용해 Ollama를 활용해 Mistral 모델을 활용하는 방법을 예로 들면 다음과 같습니다. 
```
ollama pull mistral //mistral 모델 로컬에 저장
ollama list //설치된 모델 확인
ollama run mistral //설치된 모델 테스트
```

## Open Web UI

**https://github.com/open-webui/open-webui** 에서 설치할 수 있습니다. 

Open Web UI는 Chat GPT와 비슷한 인터페이스를 제공하며 반응형으로 모바일에서도 사용이 가능한 채팅 인터페이스를 제공합니다. 

별도의 사전 작업이 필요 없는 고유 로컬 RAG를 가지고 있어 샵(#)프롬프트를 활용해 문서나 웹페이지를 임베딩해서 활용할 수 있습니다.

GPT-S와 같은 프롬프트 사전 설정 기능을 지원해 사전에 정의된 도구에 빠르게 액세스하고 인간 피드백을 통한 학습도 지원합니다. 

또한 직접 GGUF 파일 모델을 업로드해 Ollama 모델을 쉽게 생성할 수 있습니다. 

하나의 채팅 인터페이스에 여러 모델을 지정해두고 활용할 수 있는 다중 모델도 지원하는데, 예를 들어 이미지를 업로드하면 llava가 반응하고 텍스트 대화에는 mistral이 반응하도록 설정할 수 있습니다. 

### Open Web UI 설치

Docker Desktop(**https://www.docker.com/products/docker-desktop/**)을 통한 설치를 권장합니다. 

- Ollama가 Localhost에 설치되어 있을 때
```
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data--name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

- Ollama가 다른 서버에 설치되어 있을 때
```
docker run -d -p 3000:8080 -e OLLAMA_API_BASE_URL=https://example.com/api -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

![스크린샷 2024-03-05 오후 5 11 02](https://github.com/msa-ez/llmschool.github.io/assets/113568664/19f6bddf-04e1-48fa-b3f4-fdc96f33f101)

Docker를 통해 설치가 완료되면 위와 같이 Docker Desktop에 **open-webui** 라는 항목이 추가되고 접속할 수 있는 포트가 부여됩니다. 

![스크린샷 2024-03-06 오후 2 31 41](https://github.com/msa-ez/llmschool.github.io/assets/113568664/167d5f99-040a-409e-bd3c-9d638e1dea65)

위 이미지와 같이 모델을 선택할 수 있는 창이 보이면 Open Web UI가 정상적으로 동작하고 있다는 것을 의미합니다. 표시되는 모델들 중 원하는 모델을 선택해 활용할 수 있습니다. 

Open Web UI에서는 기본적인 채팅 외에도 음성 인식, 파일 첨부 등의 기능을 RAG할 수 있고, Document를 저장해두면 샵(#)프롬프트를 활용해 빠르게 액세스할 수 있습니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/b7c8bf38-a10e-4772-8a4b-e36e4d3d67fc)

샵 프롬프트는 별도의 저장된 Document를 불러오는 것 외에도 웹 url을 입력하면 해당 웹페이지를 html 형태로 가져와 RAG합니다. 다만 이미지를 포함한 전체 웹 소스가 아닌 텍스트 위주로 가져오는 모습을 볼 수 있습니다. 

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/e1438ca1-cd9f-4948-a3cc-55d546774047)

### Open Web UI 커뮤니티

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/6cb87ea7-296d-40f0-abaf-52bd93d48b81)

Open Web UI 커뮤니티에서는 프롬프트 및 모델 파일을 공개하고 있습니다. 별도의 작업 없이 이미 누군가가 만들어둔 프롬프트를 가져와 사용하고, 기존 Open Web AI에 없던 모델을 파일 통째로 입혀서 사용하는 개념입니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/b0784954-fe37-46b1-98f9-b006ad5e523b)

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/ef83f5d1-8433-4459-a4fc-0d934165648c)

Get 버튼으로 각 프롬프트를 바로 Open Web UI에 import 하거나 파일을 직접 다운로드 받아 활용할 수 있습니다.

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/da276023-7e88-4966-ade5-225062c97ed7)

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/d69537d1-af8f-401e-9c28-b531f1925eeb)

이미 만들어져있는 모델을 가져오는 것 뿐만 아니라 직접 모델명, 태그, 베이스모델, 프롬프트 제안 등 다양한 옵션을 적용해 새로운 모델을 만들어 커뮤니티에 공유할 수도 있습니다.

### Open Web UI 권한 설정

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/bf55543c-4c03-409a-be09-3086f4976dd6)

기본적으로 Open Web UI에 처음 가입한 유저는 admin 계정으로 설정됩니다. 

그 이후 해당 포트로 접속한 유저들은 일반 user 권한이 주어지고, admin 사용자는 설정 상에서 새로운 멤버들을 user 로 설정할지, pending으로 설정할지 디폴트 값을 설정할 수 있습니다. 

### 그 외 설정

![](https://github.com/msa-ez/llmschool.github.io/assets/113568664/1c06b4a4-b257-42e8-a2ba-19042fe1423c)
        </mark-down>

    </div>
</template>


<script>
    // @group 05_01_02
    export default {
        name:'LLM-Setting',
        data() {
            return {}
        },
        props: {
            "설치형 LLM 기반 개발 환경 구성": {
                type: String
            },
        },
    }
</script>