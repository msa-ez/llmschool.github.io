<template>
    <div>
        <mark-down class="content">


            
## GPT-Engineer를 활용한 마이크로서비스 구현

GPT-Engineer를 활용하여 Fast Food Delivery 모델의 마이크로서비스중 하나인 'store'의 코드를 구현하는 방법은 다음과 같습니다.

먼저 기본 환경을 설정합니다.

1. Codespace의 빌트인 JDK는 11 버전으로 JDK 17로 버전업을 위해 터미널에 다음의 명령어를 입력합니다.
```
java -version # JDK 11로 확인될 때,
sdk install java 17.0.4.1-tem &lt; /dev/null
```

2. 좌측 사이드 바 'Extension'으로 마겟플레이스에서 아래 확장 기능을 검색해 설치합니다.
```
- Extension Pack for Java
- Continue  # Copilot

# after install Copilot run 'Extension Update' from Menu, and apply new version & Reload IDE.
``` 

3. Continue Copilot 설정
Continue는 OPENAI의 API-Key를 설정하여 다양한 LLM 모델을 지정할 수 있습니다. 다음은 Continue로 GPT-4 모델을 지정하는 방법입니다.
```
- 좌측 사이드바에 생긴 'Continue' 아이콘을 클릭 후 드래그하여 (편의상) IDE 우측에 위치시킵니다.
- 'Continue' 패널 아래쪽 '+'를 눌러, AI Backend Provider와 LLM 모델을 지정합니다.
- 'OepnAI' 프로바이더에 API-Key를 넣은 다음 'GPT-4' 모델을 선택합니다.
```

## Auto Pilot 스크립트 설정
탐색기 영역에서 gpt-engineer > docker-compose.yml를 열어 마이크로서비스별 GPT-Engineer의 생성 옵션을 확인하면 다음과 같습니다.
![image](https://github.com/acmexii/demo/assets/35618409/84537a7e-7b18-4377-ad58-3a0cb1eefef9)

- Auto Pilot(GPT Engineer)가 사용할 LLM 연동을 위해 API Key를 등록합니다. 
- gpt-engineer 폴더 하위에 .env 파일을 생성하고 다음과 같이 API-Key를 설정합니다.
```
OPENAI_API_KEY=my api key
```
- docker-compose.yml을 오픈하여, 'generate-store'를 제외한 나머지 생성 설정을 주석(#) 처리합니다.
- 코드 생성 대상인 'store' 프로젝트의 'prompt'를 클릭해 LLM에 전달할 프롬프트를 확인한다.
- GPT Engineer로 코드를 생성하기 위해, 다음의 명령어를 터미널에 입력합니다.
```
cd gpt-engineer
docker-compose up
```

### 생성 코드 Review

- GPT Engineer가 프롬프트에 대해 생성한 코드는 'store' 루트에 생성된 .gpteng 폴더 all_output.txt 파일에서 log로 확인할 수 있습니다.
- store 서비스 루트에 생성된 코드는 AI에 의해 생성마다 다른 코드가 생성될 수 있습니다. 따라서 생성된 결과값이 마음에 들지 않을 경우 다음의 명령어로 GPT Engineer 생성된 리소스를 삭제하고 재 생성할 수 있습니다.
```
sudo rm -rf .gpteng src target run.sh pom.xml script
cd gpt-engineer
docker-compose up
```
        </mark-down>
    </div>
</template>


<script>
    // @group 01_03_02
    export default {
        name:'GPT-Engineer-dev',
        data() {
            return {}
        },
        props: {
            "GPT-Engineer를 활용한 MSA 구현": {
                type: String
            },
        },
    }
</script>