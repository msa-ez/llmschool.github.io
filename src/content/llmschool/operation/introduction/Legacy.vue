<template>
    <div>
        <mark-down class="content">
            

## AI를 활용한 레거시 분석 및 전환

- 먼저 https://github.com/msa-school/food-delivery-app-gen 에 접속하여 Github Repository fork를 진행합니다.

- 이후, fork한 Repository를 PC에 내려받은 후 Cursor IDE에서 프로젝트를 실행합니다.

- Ctrl + L > '@'입력 > 'Folders'클릭 > 'order-management'클릭을 진행하여 폴더 내부의 파일 전체에 관한 질문을 보낼 수 있습니다.

- 이후, 폴더 내부에 위치한 파일들의 이해를 목적으로 하는 프롬프트를 다음과 같이 입력합니다.
```
Prompt: 이 폴더가 전체적으로 뭘 하는지 설명해줘
```
- 프롬프팅 결과, 아래과 같이 코드 설명에 대한 내용을 생성합니다.
```
order-management 폴더는 주문 관리 시스템을 구현한 것입니다. 
이 시스템은 Spring Boot, JDBC, H2 데이터베이스를 사용하여 주문 생성 및 주문 상태를 업데이트하는 기능을 제공합니다. 
더불어 클래스나 JPA 리포지토리를 사용하지 않고, 서비스 레이어 컨트롤러에서 직접 SQL을 실행하여 데이터베이스와 상호작용합니다.


주요 구성 요소는 다음과 같습니다:

- Controller: HTTP 요청을 처리하며, 주문 생성 및 주문 상태 업데이트 요청을 서비스 계층으로 전달합니다.
  - OrderController는 /orders 엔드포인트를 통해 주문 생성(POST) 및 주문 상태 업데이트(PUT) 요청을 처리합니다.

- Service: 비즈니스 로직을 수행합니다. 주문 생성 및 주문 상태 업데이트 요청을 처리합니다.
  - OrderService는 JDBC를 사용하여 데이터베이스에 주문 정보를 생성하거나 업데이트합니다.

- DTO(Data Transfer Object): 클라이언트와 서버 간 데이터 전송에 사용되는 객체입니다.
  - OrderRequest와 UpdateOrderStatusRequest는 각각 주문 생성 및 주문 상태 업데이트 요청에 필요한 데이터를 담습니다.

- Database Schema: H2 데이터베이스에 주문 정보를 저장하기 위한 스키마를 정의합니다.
  - schema.sql 파일에는 orders 테이블 생성 구문이 포함되어 있습니다.

- Maven Configuration (pom.xml): 프로젝트의 의존성 및 빌드 설정을 정의합니다. Spring Boot 3, H2 데이터베이스, JDBC 등의 의존성이 포함되어 있습니다.

- Execution Script (run.sh): 프로젝트를 실행하고 실행하기 위한 스크립트입니다. Maven 명령어를 사용하여 Spring Boot 어플리케이션을 실행합니다.

이 프로젝트는 주문 받고, 주문 상태를 업데이트하는 간단한 주문 관리 시스템을 구현하는 데 필요한 주요 구성 요소를 포함하고 있습니다.
```

다음은 폴더를 멘션한 상태에서 코드 품질을 평가하는 예제입니다.

- 코드 분석을 진행한 Copilot 창에서 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 어떤 아키텍쳐 스타일? 1.트랜잭션 스크립트 2. 액티브 오브젝트 3. 도메인 클래스
```
- 프롬프팅 결과, 아래와 같이 폴더가 사용중인 아키텍쳐 스타일에 대한 설명이 생성된 것을 확인할 수 있습니다.
```
이 프로젝트는 레거시 시스템을 아키텍처 스타일을 사용하고 있습니다. 이는 도메인 클래스나 JPA 리포지토리를 사용하지 않고, 
서비스 레이어에서 직접 SQL을 사용하여 데이터베이스와의 통신을 처리하는 방식으로 구현되어 있기 때문입니다. 
예를 들어, OrderService 클래스에서는 JDBC를 사용하여 직접 SQL 쿼리를 실행하고 있습니다.
OrderService.java
public String createOrder(OrderRequest orderRequest) {
    String sql = "INSERT INTO orders (order_id, menu, delivery_address, payment_method) VALUES (?, ?, ?, ?)";
}

OrderService.java
public String updateOrderStatus(String orderId, UpdateOrderStatusRequest updateOrderStatusRequest) {
    String sql = "UPDATE orders SET status = ? WHERE order_id = ?";
}
이러한 형식은 각 트랜잭션을 개발 스크립트로 처리하는 트랜잭션 스크립트 패턴의 특징을 나타냅니다.
```

### 클래스다이어그램을 통한 정적분석

- 클래스다이어그램을 통해 폴더를 분석하기 위해 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 이 모듈의 구조를 클래스다이어그램으로 설명해줘
```
- 프롬프팅 결과, 아래와 같이 클래스 다이어그램으로 생성된 것을 확인할 수 있습니다.
</mark-down>
<mark-down class="content" source='
<img src="https://github.com/msa-ez/llmschool.github.io/assets/123912988/f7f85504-2e84-4ded-ac84-da7d8802f017" width="700" height="600" alt="">
'></mark-down>
<mark-down class="content">
### 시퀀스다이어그램을 통한 동적분석

- 시퀀스다이어그램을 통해 폴더를 분석하기 위해 다음과 같이 프롬프트를 입력합니다.

```
Prompt: 이 모듈의 동작구조를 시퀀스다이어그램으로 설명해줘
```
- 프롬프팅 결과, 아래와 같이 시퀀스 다이어그램이 생성된 것을 확인할 수 있습니다.
```
시퀀스 다이어그램은 객체 간의 상호작용을 시간 순서에 따라 나타내는 UML 다이어그램입니다. OrderController와 관련된 클래스들의 동작 과정을 시퀀스 다이어그램으로 표현하면 다음과 같습니다.

이 시나리오에서는 클라이언트가 OrderController를 통해 새로운 주문을 생성하는 과정을 나타냅니다.

1. 클라이언트(Client)가 OrderController에 주문 생성 요청을 1회 요청합니다.
2. OrderController는 OrderService의 createOrder 메소드를 호출하여 비즈니스 로직을 처리합니다.
3. OrderService는 주문 정보를 데이터베이스에 저장하기 위해 JdbcTemplate을 사용합니다.
4. 데이터베이스 작업이 성공적으로 완료되면, OrderService는 주문 ID를 반환합니다.
5. OrderController는 클라이언트에게 응답을 반환합니다.

+----------------+                     +-------------------+                     +----------------+
|     Client     |                     |   OrderController |                     |  OrderService  |
+----------------+                     +-------------------+                     +----------------+
        |                                       |                                       |
        |----- createOrder(request) ----------->|                                       |
        |                                       |----- createOrder(request) ----------->|
        |                                       |                                       |----- INSERT INTO orders(...) ----->
        |                                       |                                       |<---- orderId -------------------|
        |<---- Response ------------------------|                                       |
        |                                       |                                       |
+----------------+                     +-------------------+                     +----------------+
```

* 결과값으로 다이어그램이 정상 생성되지 않는다면, 다음과 같이 프롬프트를 추가로 입력하여 나온 결과값을 복사하여 https://sequencediagram.org/ 에 paste를 진행하면 생성된 결과값을 확인할 수 있습니다.

```
Prompt: sequencediagram.org 문법으로 작성해줘
```

### 신규 코드 스타일로 레거시 전환

AI를 활용한다면 설계 패턴에 따라 코드를 변경하거나 다른 마이크로서비스의 코드를 참조하여 코드 스타일을 변경할 수 있습니다.

먼저 설계 패턴에 따라 코드를 변경하는 방법입니다.

- Copilot 창에 폴더 멘션을 진행한 상태에서 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 해당 어플리케이션을 Clean Architecture와 JPA를 사용하는 방식으로 전환해줘
```
- 프롬프팅 결과, 아래와 같이 전환된 코드가 생성되는 것을 확인할 수 있습니다.
</mark-down>
<mark-down class="content" source='
```
1. 도메인 엔티티
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MenuSelection> menuSelections;

    private String deliveryAddress;
    private String paymentMethod;
    private String status;

    // Getters and setters
}

2. 리포지토리 인터페이스
public interface OrderRepository extends JpaRepository<Order, Long> {
}

3. 서비스 계층
기존의 JDBC를 사용하는 방식에서 JPA 리포지토리를 사용하는 방식으로 변경합니다.
@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order createOrder(OrderRequest orderRequest) {
        Order order = new Order();
        // Order 객체 생성
        return orderRepository.save(order);
    }
}
```
'></mark-down>
<mark-down class="content">
다음은 JSP기반으로 구성된 파일을 분리하여 요구사항에 맞게 코드를 전환하는 예제입니다.
JSP란 Java를 이용한 서버 사이드 템플릿 엔진이며, 자바를 웹서버에서 사용하기 위한 도구를 의미합니다.

- 먼저, 'createPayment.jsp'파일을 띄운 후 Ctrl + L OPEN AI를 실행합니다.

- 이후 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 이 jsp파일을 클린아키텍쳐로 전환하려고해. 프론트엔드는 react.js로 백엔드는 spring-boot로 전환할거고 이해했다면 ok라고만 답해줘.
```
프롬프트에 대한 결과값을 바로 반환하지 않는 이유는 예상되는 결과값 즉, context가 클 경우 OPEN AI가 가지고 있는 토큰수의 범위내에서 답변하려는 성질로 인해 좋은 결과값을 기대하기 어렵습니다.
따라서 사전에 파일과 요구사항에 대한 정보를 제공하고 이후 전체 요구사항을 분리하여 더욱 좋은 결과값을 반환시키도록 해야합니다. 

- 먼저 백엔드에 대한 코드를 생성하기 위해 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 백엔드부터 클린아키텍쳐로 전환해줘
```
- 프롬프팅 결과, 사전에 제공받은 정보중 백엔드에 관한 정보를 토대로 클린아키텍쳐로 전환한 코드를 아래와 같이 생성합니다.
</mark-down>
<mark-down class="content" source='
```
1. Domain
package com.example.paymentmanagement.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;

@Entity
public class Payment {
    @Id
    private String paymentId;
    private String method;
    private BigDecimal amount;

    // Constructors, Getters and Setters
}

2. Repository
package com.example.paymentmanagement.repository;

import com.example.paymentmanagement.domain.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, String> {
}

3. Service

package com.example.paymentmanagement.service;

import com.example.paymentmanagement.domain.Payment;

public interface PaymentService {
    Payment createPayment(Payment payment);
}

```
'></mark-down>
<mark-down class="content">
    
- 이후 프론트엔드에 대한 코드를 생성하기 위해 다음과 같이 프롬프트를 입력합니다.
```
Prompt: 프론트엔트도 전환해줘
```
- 프롬프팅 결과, 백엔드와 마찬가지로 사전에 제공받은 정보중 프론트엔드에 관한 요구사항을 토대로 전환한 코드를 아래와 같이 생성된 것을 확인할 수 있습니다.

```
import React, { useState } from 'react';
import axios from 'axios';

function CreatePaymentComponent() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/payments', {
                method: paymentMethod,
                amount: amount,
            });
            console.log('Payment Created:', response.data);
            // Reset form or handle success
        } catch (error) {
            console.error('Error creating payment:', error);
            // Handle error
        }
    };
</mark-down>
<mark-down class="content" source='
```
    return (
        <div>
            <h2>Create Payment</h2>
            <form onSubmit={handleSubmit}>
                Payment Method: <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />
                Amount: <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default CreatePaymentComponent;
```
'></mark-down>
    </div>
</template>


<script>
    // @group 01_01_04
    export default {
        name:'Legacy',
        data() {
            return {}
        },
        props: {
            "레거시분석과 모더나이징": {
                type: String
            },
        },
    }
</script>
