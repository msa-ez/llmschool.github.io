<template>
    <div>
        <mark-down class="content">
            
## Fast Food Delivery 이벤트스토밍 모델

주어진 모델은 아래 기능적 요구사항이 (심플하게) 반영된 이벤트스토밍 모델이다.

- 고객이 메뉴를 선택하고, 선택한 메뉴에 대해 결제함으로써 주문이 발생한다.
- 주문이 되면 입점 상점주에게 주문정보가 전달된다.
- 상점주는 주문을 수락하거나 거절할 수 있다.
- 상점주는 요리 시작시와 완료 시점에 시스템에 상태를 입력한다.
- 고객은 아직 요리가 시작되지 않은 주문을 취소할 수 있다.
- 요리가 시작되면, 고객 지역 인근의 라이더들에 배송정보가 전달된다.
- 라이더가 해당 요리를 Pick up한 후, 출발전 앱에 등록하면 배송시작 정보가 고객에게 통보된다.
- 라이더가 요리를 주문한 고객에게 전달되면 배송이 완료된다.

## 모델 복제 및 Auto Pilot 템플릿 적용
- 상단 메뉴의 'FORK'를 눌러 모델을 복제한다.
- 이때, 모델(Project) 이름은 유일해야 하므로 기본 Definition ID 뒤에 "-GitHub ID"를 추가한다.
![image](https://github.com/acmexii/demo/assets/35618409/f1cb5cac-e11c-4746-bd66-8131a2cbbc04)

- 복제가 완료되면 좀더 많은 메뉴가 상단에 나타나게 된다.
- 메뉴 중 CODE > Code Preview 를 클릭하면, 아래와 같은 화면이 나타나는데 기본 Spring-boot 템플릿으로 조회된다.
![image](https://github.com/acmexii/demo/assets/35618409/1c21cb93-e25e-4adb-a56a-15b8b7844c3c)

- AI기반 패어 프로그래밍을 위해, 위 BASE 영역을 클릭한 다음 팝업 창에서 Marketplace를 선택하고 GPT-Engineer 템플릿을 적용한다.
![image](https://github.com/acmexii/demo/assets/35618409/785c9897-387b-45b8-bde9-855f85d47aae)

- 다시 한번 fine-tunning된 템플릿을 아래 순서대로 설정하면 모델 설정이 마무리된다.
![image](https://github.com/acmexii/demo/assets/35618409/2203d272-8da0-4322-92fa-1c0ebf0e0497)

#### 이제, 각 바운디드 서비스 폴더(order, store, delivery)의 내용을 펼쳐서 살펴보자. 


## 내 GitHub에 Model 코드와 Prompt Push

이제는 Auto Pilot이 설정된 fast Food Delivery 모델을 내 GitHub Repository에 푸쉬해 보자. 
푸쉬는 아래처럼  Preview에서 확인된 코드를 UI를 통해 내 보낼 수 있다.
![image](https://github.com/acmexii/demo/assets/35618409/a1c641dd-8f1c-4980-b440-e8f230eb7156)

'Create' 클릭 후, 잠시 기다리면 모든 코드가 저장소로 export되고 내 Github에서 조회가 가능해 진다.


        </mark-down>

    </div>
</template>


<script>
    // @group 01_04_03
    export default {
        name:'Ai-ops',
        data() {
            return {}
        },
        props: {
            "AI기반 자동생성": {
                type: String
            },
        },
    }
</script>