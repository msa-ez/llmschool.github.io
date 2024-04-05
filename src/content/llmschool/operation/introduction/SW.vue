<template>
    <div>
        <mark-down class="content">
            

## Cursor IDE를 활용한 테스트 생성
소프트웨어를 개발할 때 가장 중요한 것은 비즈니스 요청자와의 소통으로 개발자에게 전달되는 요구사항에 대하여 이해하는것이 가장 중요합니다. 
이를 위해 TDD(Test Driven Development)즉, 테스트를 먼저 작성한 이후 개발을 진행하는 방식을 필요로하며, AI를 통해 요구사항에 걸맞는 TDD를 손쉽게 작성할 수 있습니다.

다음은 보험상품에 대하여 자바로 테스트 코드를 작성하는 예제입니다.

- 아래 이미지 복사 > Cursor IDE > Ctrl + L 을 눌러 Copilot 창에서 아래 프롬프트를 입력합니다.
```
Prompt: 다음은 보험상품의 디시전 테이블이다. 이 규칙을 담은 JUnit Test를 작성해줘
```
</mark-down>
<mark-down class="content" source='
<img src="https://github.com/msa-ez/llmschool.github.io/assets/123912988/99894c8e-19b9-4dc2-a2a8-499ed7beea15" width="700" height="600" alt="">
'></mark-down>
<mark-down class="content">
- 프롬프팅 결과, 아래와 유사한 JUnit Test 코드를 AI가 생성해 준다.
```
import static org.junit.Assert.*;
import org.junit.Test;

public class InsuranceProductTest {

    @Test
    public void testARankAgeBetween20And40() {
        InsuranceProduct product = new InsuranceProduct();
        String result = product.evaluate(30, "g", "n"); // age, condition3, condition4
        assertEquals("A rank", result);
    }

    @Test
    public void testARankAgeOver40() {
        InsuranceProduct product = new InsuranceProduct();
        String result = product.evaluate(45, "g", "n"); // age, condition3, condition4
        assertEquals("A rank", result);
    }

    @Test
    public void testDRankAgeOver40Condition3BCondition4Y() {
        InsuranceProduct product = new InsuranceProduct();
        String result = product.evaluate(45, "b", "y"); // age, condition3, condition4
        assertEquals("D rank", result);
    }
}
```

생성된 JUit Test 코드를 기반으로 테스트를 통과할 수 있는 코드 생성을 위해 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 위의 테스트를 통과할 수 있는 모듈을 작성해
```
- 프롬프팅 결과, 아래와 유사한 보험상품의 로직 코드를 AI가 생성해 준다.
```
public class InsuranceProduct {
    public String evaluate(int age, String condition3, String condition4) {
        if (age >= 20 && age < 41 && "g".equals(condition3) && "n".equals(condition4)) {
            return "A rank";
        } else if (age >= 40 && "g".equals(condition3) && "n".equals(condition4)) {
            return "A rank";
        } else if (age >= 20 && age < 41 && "g".equals(condition3) && "y".equals(condition4)) {
            return "B rank";
        } else if (age >= 40 && "g".equals(condition3) && "n".equals(condition4)) {
            return "B rank";
        } else if (age >= 20 && age < 41 && "b".equals(condition3) && "n".equals(condition4)) {
            return "C rank";
        } else if (age >= 40 && "b".equals(condition3) && "n".equals(condition4)) {
            return "C rank";
        } else if (age >= 20 && age < 41 && "b".equals(condition3) && "y".equals(condition4)) {
            return "D rank";
        } else if (age >= 40 && "b".equals(condition3) && "y".equals(condition4)) {
            return "D rank";
        }
        // 기타 조건으로 처리되지 않는 경우
        return "Unknown rank";
    }
}
```
### 디자인 패턴을 활용한 리팩토링

확장성 보완을 위해 디자인 패턴들을 추천받아 코드를 리팩토링하는 방법은 다음과 같습니다.

- 먼저 OPEN AI에 디자인 패턴을 추천받기 위해, 다음과 같이 프롬프트를 입력합니다.
```
Prompt: if ~ then ~ else가 확장성이 떨어져 보여. 이를 해결할 디자인 패턴들이 있다면 하나이상 추천해줘
```
- 프롬프팅 결과, 아래와 같은 다양한 전략패턴을 생성합니다. 
```
1. 전략 패턴 (Strategy Pattern):
- 각 전략에 대한 행동들을 별도의 클래스로 분리하여, 실행 중에 알고리즘을 선택할 수 있게 합니다.
- 장점: 알고리즘을 사용하는 클라이언트와 독립적으로 알고리즘을 변경할 수 있습니다.
- 단점: 많은 수의 클래스가 생성될 수 있으며, 각 전략에 대한 객체를 생성할 필요가 있을 수 있습니다.

2. 상태 패턴 (State Pattern):
- 객체의 상태 변화에 따라 객체의 행동을 변화할 수 있게 합니다. 즉, 객체의 내부 상태에 따라서, 객체에게 적절한 행동을 요청합니다.
- 장점: 상태에 따른 행동 변화를 클래스 분리를 통해 명확하게 표현할 수 있습니다.
- 단점: 상태가 많아질수록 관련 클래스도 많아지고 복잡도가 증가할 수 있습니다.

3. 체인 오브 리스폰서빌리티 패턴 (Chain of Responsibility Pattern):
- 요청을 처리할 수 있는 기회를 하나 이상의 객체에게 부여하여, 한 객체에서 다른 객체로 요청을 전달하는 방식입니다.
- 장점: 요청을 보내는 객체는 받는 객체의 존재를 몰라도 되며, 객체 사이의 결합도를 낮출 수 있습니다.
- 단점: 요청 처리기가 예측하기 어려운 방식으로 연결될 수 있습니다.

4. 테이블 주도 패턴 (Table-driven Pattern):
- 조건과 결과를 데이터 형태로 표현하여, 로직을 데이터 구조로 변환합니다.
- 장점: 조건 분기가 복잡한 경우 용이하며, 로직을 데이터로 관리할 수 있습니다.
- 단점: 복잡한 조건의 경우 데이터의 복잡성이 증가할 수 있으며, 성능 저하가 발생할 수 있습니다.

전략 패턴과 상태 패턴은 유사한 점이 많지만, 전략 패턴은 알고리즘의 교체에 초점을 맞추고, 상태 패턴은 객체의 상태 변화에 따른 행동의 변화에 초점을 맞춥니다. 체인 오브 리스폰서빌리티 패턴은 요청을 처리할 수 있는 객체 사이의 체인을 형성하고, 각 객체가 요청을 처리할 수 있는지 확인합니다. 테이블 주도 패턴은 데이터 중심의 접근 방식으로, 조건과 결과를 데이터로 관리하여 유연성을 제공합니다.
이러한 패턴들 중에서, 본문 상황과 문맥을 고려할 때 가장 적합한 패턴은 전략 패턴이나 테이블 주도 패턴일 수 있습니다. 전략 패턴은 각 조건별로 별도의 클래스로 구현할 수 있으며, 테이블 주도 패턴은 조건과 데이터를 관리하여 유연성을 제공합니다.
```
- 생성된 디자인 패턴중 전략패턴을 적용하여 리팩토링 하기 위해 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 전략패턴을 적용해줘
```
- 프롬프팅 결과, 아래와 같이 전략패턴이 적용된 코드가 생성된 것을 확인할 수 있습니다.
</mark-down>
<mark-down class="content" source='
```
1. 평가 전략 인터페이스
public interface EvaluationStrategy {
    String evaluate(int age, String condition3, String condition4);
}


2. 구체적인 전략 클래스
public class ARankStrategy implements EvaluationStrategy {
    @Override
    public String evaluate(int age, String condition3, String condition4) {
        if (age >= 20 && age < 41 && "g".equals(condition3) && "n".equals(condition4)) {
            return "A rank";
        } else if (age >= 40 && "g".equals(condition3) && "n".equals(condition4)) {
            return "A rank";
        }
        return null;
    }
}

public class BRankStrategy implements EvaluationStrategy {
    @Override
    public String evaluate(int age, String condition3, String condition4) {
        if (age >= 20 && age < 41 && "g".equals(condition3) && "y".equals(condition4)) {
            return "B rank";
        } else if (age >= 40 && "g".equals(condition3) && "n".equals(condition4)) {
            return "B rank";
        }
        return null;
    }
}

3. 컨텍스트 클래스

import java.util.List;

public class InsuranceProduct {
    private List<EvaluationStrategy> strategies;

    public InsuranceProduct(List<EvaluationStrategy> strategies) {
        this.strategies = strategies;
    }

    public String evaluate(int age, String condition3, String condition4) {
        for (EvaluationStrategy strategy : strategies) {
            String result = strategy.evaluate(age, condition3, condition4);
            if (result != null) {
                return result;
            }
        }
        return "Unknown rank";
    }
}

4. 전략 사용
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<EvaluationStrategy> strategies = Arrays.asList(
            new ARankStrategy(),
            new BRankStrategy(),
            // ... 다른 전략 클래스들 여기에 추가 ...
            new CRankStrategy(),
            new DRankStrategy()
        );

        InsuranceProduct product = new InsuranceProduct(strategies);
        String rank = product.evaluate(25, "g", "n");
        System.out.println("The rank is: " + rank);
    }
}

```
'>
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
            "테스트생성과 리팩토링": {
                type: String
            },
        },
    }
</script>
