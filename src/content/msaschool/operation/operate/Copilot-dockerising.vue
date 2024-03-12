<template>
    <div>
        <mark-down class="content">
            
## 코파일럿을 활용한 클라우드 배포준비 (Dockerizing & CI)
오토 파일럿과 코파일럿으로 코드 작업이 완료된 후, 클라우드 배포를 위해 이미지를 생성하고 GitHub Action으로 CI 파이프라인을 생성하는 방법은 다음과 같습니다.

### application.yml 확장

- 로컬에서 사용한 'default' profile 파일에 클라우드에서 사용할 'docker' profile을 추가합니다.
- 먼저, application.yml을 에디터에 로딩합니다.
- 이후, 전체 내용을 선택 > (Cmd+L, Ctrl+Shift+L)을 눌러 코파일럿 창에 입력한 후 다음의 프롬프트를 입력합니다.
```
Prompt : 위 default 프로파일을 복제해서, 'docker' 프로파일을 default 프로파일 아래에 추가해 줘.
```
- 프롬프팅 결과를 application.yml에 반영하고, 추가된 docker 프로파일의 Kafka broker endpoint를 'my-kafka:9092'로 수정되도록 추가 프롬프팅을 진행합니다.
```
Prompt: brokers: my-kafka:9092
```
- 완성된 application.yml을 인스펙션합니다.


### Dockerfile 생성

- 먼저, store 루트 폴더에서 Dockerfile을 생성하고, Continue 코파일럿으로 스크립트를 작성하기 위해 다음의 프롬프팅을 진행합니다.
```
Prompt : JDK17 이미지를 베이스로 하고, 8080포트를 expose하는 Dockerfile을 생성해줘
```
- 프롬프팅 결과를 Dockerfile에 반영하고, 정합성 있는 Dockerfile이 완성되도록 추가로 프롬프를 입력합니다.
```
Prompt: 
- Base Image :eclipse-temurin:17-jdk-jammy
- Jar filename : my-application 대신 store 사용
```

- 완성된 Dockerfile을 인스펙션합니다.

## GitHub Workflow 생성과 실행

- GitHub Action을 활용해 GitHub 서버에서 이미지를 생성하고 Docker Hub에 푸쉬하는 CI 파이프라인을 생성하는 방법은 다음과 같습니다.
- 먼저, 탐색기 루트에서 '.github/workflows' 폴더를 생성합니다.
- 이후, workflows 폴더에서 github-action.yml 파일을 생성하고 코파일럿에서 다음과 같이 프롬프팅합니다.
```
Prompt : store 서비스를 Github action으로 이미지를 생성해 푸쉬하는 스크립트를 생성해 줘
```

- 추가 정보(대상 브랜치 Main, 빌드환경은 temurin jdk17, 도커허브 계정, projectname, 빌드 및 푸쉬에 활용할 컨텍스트는 ./store)를 활용하여 스크립트를 좀 더 구체화 할 수 있습니다.  

- 현재 프로젝트는 메이븐 빌드 환경이므로, 메이븐 타스크를 추가를 위해 다음과 같이 프롬프트를 입력합니다.
```
Prompt : 여기에 maven package 스텝을 추가하되, 빌드시 테스트는 Skip하도록 해줘
```

- 프롬프팅 결과로 생성된 github-action.yml을 인스펙션합니다.
- 추가로 GitHub Workflow의 정상적인 실행을 위해, github-action.yml 에서 Docker hub 정보를 수정합니다. 
- 완료되었다면 아래 그림을 따라 변경된 코드를 레파지토리에 커밋&푸쉬를 진행합니다.
![image](https://github.com/acmexii/demo/assets/35618409/b6b61453-7224-4800-aed9-96b55435efd1)

### 실행 확인
- Github 리파지토리의 'Actions' 메뉴를 통해 파이프라인이 동작하는지 확인하고, 실행이 종료되고 난 후, 내 Docker hub에도 store 이미지가 생성되어 있음을 사이트(https://hub.docker.com)에서 확인할 수 있습니다.
        </mark-down>

    </div>
</template>


<script>
    // @group 01_04_02
    export default {
        name:'Fastfood',
        data() {
            return {}
        },
        props: {
            "Copilot을 활용한 클라우드 배포 준비": {
                type: String
            },
        },
    }
</script>