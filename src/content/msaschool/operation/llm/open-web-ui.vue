<template>
    <div>
        <mark-down class="content">
            
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
    // @group 05_01_05
    export default {
        name:'Open-Web',
        data() {
            return {}
        },
        props: {
            "Open Web UI": {
                type: String
            },
        },
    }
</script>