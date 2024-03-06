<template>
    <div>
        <mark-down class="content">
            
## GPT-Engineer
GPT-Engineer는 AI로 프로젝트 생성을 돕는 도구로써, 프롬프트에 빌드하고 싶은 내용을 입력하면 코드베이스를 생성해 주는 역할을 하고 있습니다.

GPT-Engineer를 사용하는 방법은 2가지 방법이 있습니다.

첫 번째로 GPT-Engineer를 실행할 환경을 구축하여 진행하는 방법입니다.

- 먼저 GPT-Engineer 환경을 구축하기 위해 https://github.com/msa-school/gpt-engineer 에 접속하여 Github Repository fork를 진행합니다.

- 이후, fork한 Repository에서 Code > Codespaces를 실행합니다.

- 터미널에 다음과 같이 OPENAI_API_KEY를 등록합니다.
```
export OPENAI_API_KEY="OPENAI_API_KEY"
```
- 등록이 완료한 후, GPT-Engineer 실행을 위해 다음과 같이 입력합니다.
```
docker-compose up
```
명령어를 입력하면 터미널에 prompt 파일에 작성된 내용을 토대로 코드가 생성되며, 완료된 이후 생성된 코드에 맞는 폴더와 파일이 생성되는 것을 확인할 수 있습니다.

두 번째로 오픈소스를 활용하여 GPT-Engineer를 실행하는 방법입니다.

- 먼저 터미널에 다음과 같이 입력하여 GPT-Engineer를 설치합니다.
```
python -m pip install gpt-engineer
```
- 다음 GPT-Engineer를 실행할 폴더를 생성하기 위해 다음과 같이 입력합니다.
```
gpt-engineer <폴더이름\>
```
명령어를 통해 폴더 생성이 완료되면 터미널에 GPT-Engineer로 생성할 요구사항을 입력하면 요구사항을 토대로 코드가 터미널에 생성되는 것을 확인할 수 있습니다.
코드 생성이 완료된 이후 실행 및 적용 여부를 터미널에서 입력해야 생성하였던 폴더 하위에 코드가 생성됩니다.

        </mark-down>

    </div>
</template>


<script>
    // @group 01_01_05
    export default {
        name:'GPT-Engineer',
        data() {
            return {}
        },
        props: {
            "GPT-Engineer": {
                type: String
            },
        },
    }
</script>