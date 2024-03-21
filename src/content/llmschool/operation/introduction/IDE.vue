<template>
    <div>
        <mark-down class="content">
## Cursor IDE란    
Cursor IDE는 AI 기반의 코딩 도구로, 개발자들이 코드를 더욱 신속하고 정확하게 작성할 수 있도록 설계되었습니다. 
이 도구는 반자율부터 전자율, 멀티 에이전트 구현까지 다양한 코딩 작업을 지원하며, 코드 문서화, 재작업 시간 단축 및 오류 감소 등의 이점을 제공합니다. 
Cursor IDE는 코드 품질 향상, 디자인 패턴 적용, 레거시 분석 등 개발 과정의 여러 측면에서 활용될 수 있습니다.        

### Cursor IDE 다운로드 및 Copilot 환경 구축

먼저 Cursor IDE를 다운로드 합니다.
- https://cursor.sh/ 로 접속하여 우측 상단에 위치한 'Download'버튼을 클릭하여 다운로드를 완료하면 Cursor를 이용할 수 있습니다.

- Cursor를 실행하면 다음과 같은 화면이 나타나며, 'Open a folder'를 클릭하여 실행할 프로젝트 폴더를 선택합니다.
</mark-down>
<mark-down class="content" source='
<img src="https://github.com/msa-ez/llmschool.github.io/assets/123912988/48a410d8-faf8-44c8-a955-b7b31e35dca8" width="700" height="600" alt="Cursor IDE 이미지">
'></mark-down>
<mark-down class="content">
- 선택 후, 좌측 영역에 우클릭 > 새 파일 > 'index.html' 입력 > 'Enter'로 파일을 생성합니다.

- index.html 파일 클릭 > Ctrl + L 을 진행하면 Cursor화면 우측에 Copilot 창이 생성되고 코드 생성 및 수정 등 요구사항을 프롬프트로 보내 지원받을 수 있습니다.

### AI 어시스턴트를 활용한 피자가게 주문 화면 생성하기

- Copilot 창이 활성화된 상태에서 질문 영역에 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 피자가게의 주문받기 화면
```
- 프롬프팅 결과, 피자 주문 화면에 대한 코드가 생성됩니다. 이때, 동일한 프롬프트에도 상이한 결과값이 생성될 수 있기에 코드에 대한 평가 후 적용하거나 다시 생성을 진행해야합니다.

- 적용의 경우, 생성된 코드 우측의 '+ Apply diff'를 클릭 > 'Apply to current file'을 클릭하면 생성된 코드가 index.html 파일에 적용된 것을 확인할 수 있습니다.

- 이후 생성한 폴더에 위치한 index.html을 실행하면 생성된 코드에 따른 화면이 아래와 유사한 UI가 생성된 것을 확인할 수 있습니다.
</mark-down>
<mark-down class="content" source='
<img src="https://github.com/msa-ez/llmschool.github.io/assets/123912988/c4de4c4f-6f69-4b50-b055-a2263a3b2f57" width="700" height="600" alt="Cursor IDE 이미지">
'></mark-down>
<mark-down class="content">
### AI 어시스턴트를 활용한 주문 화면 완성하기
Copilot은 이전에 질문한 내용에 이어서 요구사항을 추가할 수 있습니다. 

다음은 기존 생성된 코드에 '불고기 피자를 추가해줘' 라는 요구사항을 추가하는 방법입니다.

- Ctrl + K 를 눌러 요구사항으로 보낼 프롬프트를 다음과 같이 입력합니다.
```
불고기 피자를 추가해줘
```
- 프롬프팅 결과, 전체 코드를 읽어 필요한 부분에 대하여 수정이 진행되며 수정된 내용을 적용할지에 대하여 선택할 수 있습니다.

다음은 멘션(@) 기능을 통해 프롬프트에 참고자료를 첨부하여 요구사항을 추가하는 방법입니다.

- Copilot 창에서 '@' 입력 > 'Docs' > 'Add new doc' >  https://getbootstrap.com/ 입력 > 'Confirm'을 클릭하면 OPEN AI에서 인덱싱을 진행하며 해당 웹사이트에 대한 정보를 가진 채로 질문 할 수 있습니다.
이후, 추가할 요구사항에 대한 프롬프트를 다음과 같이 입력합니다.
```
Prompt: @Bootstrap 부트스트랩을 적용해줘. 카드 레이아웃으로 메뉴들을 표시하고 이미지를 placeholder.com으로 대체
```
- 프롬프팅 결과를 적용시킨 후 다시 index.html파일을 실행하면 아래와 같은 UI가 생성된 것을 확인할 수 있습니다.
</mark-down>
<mark-down class="content" source='
<img src="https://github.com/msa-ez/llmschool.github.io/assets/123912988/ecaf421e-7f1d-4880-a3d3-caf2c6741bbb" width="700" height="600" alt="Cursor IDE 이미지">
이와같이 Cursor IDE와 Copilot을 활용하면 AI기반으로 웹 어플리케이션을 쉽게 구현할 수 있습니다.
'></mark-down>
    </div>
</template>


<script>
    // @group 01_01_02
    export default {
        name:'IDE',
        data() {
            return {}
        },
        props: {
            "Cursor IDE": {
                type: String
            },
        },
    }
</script>
