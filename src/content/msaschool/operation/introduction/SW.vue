<template>
    <div>
        <mark-down class="content">
            

## Cursor IDE를 활용한 SW공학
소프트웨어를 개발할 때 가장 중요한 것은 비즈니스 요청자와의 소통으로 개발자에게 전달되는 요구사항에 대하여 이해하는것이 가장 중요합니다. 
이를 위해 TDD(Test Driven Development)즉, 테스트를 먼저 작성한 이후 개발을 진행하는 방식을 필요로하며, AI를 통해 요구사항에 걸맞는 TDD를 손쉽게 작성할 수 있습니다.

다음은 보험상품에 대하여 자바로 테스트 코드를 작성하는 예제입니다.

- 먼저 다음의 이미지를 복사 > Cursor IDE 이동 > Ctrl + L > "다음은 보험상품의 디시전 테이블이다. 이 규칙을 담은 JUnit Test를 작성해줘" 입력을 진행합니다.
![](https://github.com/msa-ez/llmschool.github.io/assets/123912988/99894c8e-19b9-4dc2-a2a8-499ed7beea15)

- 입력이 완료되면 다음과 유사한 JUnit Test 코드가 작성된 것을 확인할 수 있습니다.
![](https://github.com/msa-ez/llmschool.github.io/assets/123912988/b6db900b-5180-44d8-b435-c91dca377798)

생성된 JUit Test 코드를 기반으로 테스트를 통과할 수 있는 코드 생성을 위해 다음과 같이 프롬프트를 입력합니다.
```
위의 테스트를 통과할 수 있는 모듈을 작성해
```
- 생성된 결과는 다음과 유사한 코드가 작성된 것을 확인할 수 있습니다.
![](https://github.com/msa-ez/llmschool.github.io/assets/123912988/dcaae7a2-16bf-475a-abc0-ff7a519f7172)

다음은 생성된 테스트 코드에 대해 확장성 보완을 위해 디자인 패턴들을 추천받아 코드를 리팩토링하는 방법입니다.

- 먼저 OPEN AI에 디자인 패턴을 추천받기 위해, 다음과 같이 프롬프트를 입력합니다.
```
if ~ then ~ else가 확장성이 떨어져 보여. 이를 해결할 디자인 패턴들이 있다면 하나이상 추천해줘
```
- 위의 프롬프트에 대해 다양한 전략패턴을 생성하며, 생성된 전략패턴 중 하나를 선택해 적용하는 프롬프트를 입력하면 전략패턴에 맞는 보완된 코드로 리팩토링 하는 결과값을 확인할 수 있습니다.

        </mark-down>

    </div>
</template>


<script>
    // @group 01_01_03
    export default {
        name:'SW',
        data() {
            return {}
        },
        props: {
            "Cursor를 통한 SW공학": {
                type: String
            },
        },
    }
</script>
