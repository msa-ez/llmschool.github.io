<template>
    <div>
        <mark-down class="content">
            
## 코파일럿을 활용한 클라우드 배포준비 (Dockerizing & CI)

오토 파일럿과 코파일럿으로 코드 작업이 완료었으면 클라우드 배포를 위한 준비 작업을 진행한다. 
클라우드 배포를 위해 이미지를 생성하고 GitHub Action으로 CI 파이프라인을 생성해 보자. 

### application.yml 확장

- 로컬에서 사용한 'default' profile 파일에 클라우드에서 사용할 'docker' profile을 추가해 보자.
- 먼저, application.yml을 에디터에 로딩한다.
- 전체 내용을 선택하고, (Cmd+L, Ctrl+Shift+L)을 눌러 코파일럿로 창으로 보낸다.
```
prompt : 위 default 프로파일을 복제해서, 'docker' 프로파일을 default 프로파일 아래에 추가해 줘.
```
- 생성 결과를 application.yml에 반영하고, 추가된 docker 프로파일의 Kafka broker endpoint를 'my-kafka:9092'로 수정되도록 프롬프팅해 본다.
```
brokers: my-kafka:9092
```
- 최종, 완성된 application.yml을 인스펙션한다.


### Dockerfile 생성

- 먼저, store 루트 폴더에서 Dockerfile을 생성하고, Continue 코파일럿으로 스크립트를 추가해 보자.
```
prompt : JDK17 이미지를 베이스로 하고, 8080포트를 expose하는 Dockerfile을 생성해줘
```
- 생성 결과를 Dockerfile에 반영하고, 정합성 있는 Dockerfile이 완성되도록 프롬프팅해 본다.
```
- Base Image :eclipse-temurin:17-jdk-jammy
- Jar filename : my-application 대신 store 사용
```

- 최종, 완성된 Dockerfile을 인스펙션한다.

### LLM 모델 코드의 활용

- 교육 진행의 통일성을 위해, LLM이 생성한 아래 브랜치를 로딩하여 확인한다.
```
git checkout branch-rc-0.7
```

## GitHub Workflow 생성과 실행

- 이제, GitHub Action을 활용해 GitHub 서버에서 이미지를 생성하고 Docker Hub에 푸쉬하는 CI 파이프라인을 생성해 보자.
- 탐색기 루트에서 '.github/workflows' 폴더를 생성한다.
- workflows 폴더에서 github-action.yml 파일을 생성한 다음, 코파일럿에서 다음을 프롬프팅한다.
```
prompt : store 서비스를 Github action으로 이미지를 생성해 푸쉬하는 스크립트를 생성해 줘
```

- 추가 정보(대상 브랜치 Main, 빌드환경은 temurin jdk17, 도커허브 계정, projectname, 빌드 및 푸쉬에 활용할 컨텍스트는 ./store)로 스크립트를 좀더 구체화 시켜본다.  

- 랩 프로젝트는 메이븐 빌드 환경이므로, 마지막으로 메이븐 타스크를 추가해 보자
```
prompt : 여기에 maven package 스텝을 추가하되, 빌드시 테스트는 Skip하도록 해줘
```

- 최종, 완성된 github-action.yml을 인스펙션한다.

### LLM 모델 코드의 활용

- LLM이 생성한 아래 브랜치를 로딩하여 실습한 내용을 바탕으로 github-action.yml을 리뷰해 본다.
```
git checkout branch-rc-0.9
```
- GitHub Workflow의 정상적인 실행을 위해, github-action.yml 에서 내 Docker hub 정보로 수정한다. 
- 이제, 해당 브랜치를 리파지토리에 코드를 커밋하여 반영한다.
    - 코드 커밋을 위해, 먼저 아래 이미지와 같이 Codespace 왼쪽 사이드 바에서 'Source Control' 아이콘을 클릭한다.
    -  커밋 메시지와 커밋 대상을 선택하고 (branch-rc-0.9 브랜치에) 커밋&푸쉬를 수행한다. 
![image](https://github.com/acmexii/demo/assets/35618409/b6b61453-7224-4800-aed9-96b55435efd1)

### Main Branch Merge & Push

- 현재, Git 파이프라인은 Main Branch의 'Push' 액션에 설정되어 있다.
- Main 브랜치에서 Git Action 코드가 커밋된 브랜치를 머지하고, Main 브랜치를 다시 Push하게 되면 Git Action이 트리거 된다.
- 아래 커맨드를 한줄씩 천천히 수행해 본다.
```
git checkout main # 메인 브랜치로 이동 
git pull origin main # 메인 브랜치를 최신 상태로 업데이트
git merge branch-rc-0.9 # 작업(Github Action)한 브랜치를 메인 브랜치에 병합
git push origin main # 변경 사항을 원격 저장소에 푸시
```

### 실행 확인

- Github 리파지토리의 'Actions' 메뉴를 통해 파이프라인이 동작하는지 확인하고, 실행이 종료되고 난 후, 내 Docker hub에도 store 이미지가 생성되어 있음을 사이트(https://hub.docker.com)에서 확인한다.




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