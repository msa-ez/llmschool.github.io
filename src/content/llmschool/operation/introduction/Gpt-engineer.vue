<template>
    <div>
        <mark-down class="content">
            
## GPT-Engineer
GPT-Engineer는 프로젝트 생성을 돕는 AI 도구로써, 프롬프트에 빌드하고 싶은 내용을 입력하면 코드베이스를 생성해 주는 역할을 수행합니다.

GPT-Engineer를 사용하는 방법에는 2가지가 있습니다.

첫 번째로, GPT-Engineer를 실행할 환경을 구축하여 진행하는 방법입니다.

- 먼저 GPT-Engineer 환경을 구축하기 위해 https://github.com/msa-school/gpt-engineer 에 접속하여 Github Repository fork를 진행합니다.

- 이후, fork한 Repository에서 Code > Codespaces를 실행합니다.

- 터미널에 다음과 같이 API_KEY를 등록합니다.
```
export OPENAI_API_KEY="API_KEY"
```
- 등록이 완료되면, prompt에 작성된 요구사항을 기반으로 코드 생성을 수행할 수 있습니다.

프롬프트는 다음과 같이 구성되어있습니다.
```
기능적 요구사항

- 고객이 메뉴를 선택하여 주문한다.
- 고객이 선택한 메뉴에 대해 결제한다.
- 주문이 되면 주문 내역이 입점상점주인에게 주문정보가 전달된다
- 상점주는 주문을 수락하거나 거절할 수 있다
- 상점주는 요리시작때와 완료 시점에 시스템에 상태를 입력한다
- 고객은 아직 요리가 시작되지 않은 주문은 취소할 수 있다
- 요리가 완료되면 고객의 지역 인근의 라이더들에 의해 배송건 조회가 가능하다
- 라이더가 해당 요리를 pick 한후, pick했다고 앱을 통해 통보한다.
- 고객이 주문상태를 중간중간 조회한다
- 주문상태가 바뀔 때 마다 카톡으로 알림을 보낸다
- 고객이 요리를 배달 받으면 배송확인 버튼을 탭하여, 모든 거래가 완료된다

사용언어

- Java 11
- Spring Boot 

구현과정을 한글로 설명해줘.
```
prompt 기반 코드 생성을 위해 터미널에 다음과 같이 입력합니다.
```
docker-compose up
```
터미널 결과로 prompt에 작성된 요구사항을 토대로 코드가 생성되며, 이후 구조에 맞게 폴더와 파일을 생성하는 것을 확인할 수 있습니다.

두 번째로, 오픈소스를 활용하여 GPT-Engineer를 실행하는 방법입니다.

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