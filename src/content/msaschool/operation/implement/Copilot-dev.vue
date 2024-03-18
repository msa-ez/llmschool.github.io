<template>
    <div>
        <mark-down class="content" source="


## Copilot으로 Business Logic 구현

앞서 진행한 store 마이크로서비스의 서비스에 Business Logic을 구현하는 방법은 다음과 같습니다.

먼저, store 서비스의 StoreService.java에 위치한 아래 코드를 선택합니다.

```
@Bean
public Consumer<Message<OrderPlaced>> wheneverOrderPlaced_AcceptOrder() {
    return event -> {
        // Logic to handle OrderPlaced

}
```
">

</mark-down>
<mark-down class="content">

이후, ^M('Select Code')을 눌러 나타난 프롬프트 창에서 Food Delivery의 다음의 시나리오를 만족하도록 프롬프트를 입력합니다.
```
시나리오: 주문이 발생하면 상점주를 위한 'store' 서비스로 주문 정보가 자동 전달된다.
Prompt: 

- @Codebase OrderPlaced 이벤트를 읽어, Store 도메인에 저장하는 코드를 생성하고, OrderAccepted 이벤트를 발송하는 코드를 생성해
- @Codebase 저장할 도메인 클래스는 Store이고, 저장이 끝나면 OrderAccepted로 저장된 정보를 복사해 발송하는 로직으로 수정해 
```

- @Codebase ?? - Continue가 제공하는 임베딩기반 검색
```
- 코드베이스를 색인화해 가면서 작업공간 전체에서 가장 관련성이 높은 컨텍스트를 자동으로 참조하여 생성합니다.
- 임베딩 기반 검색과 키워드 검색의 조합을 통해 코드 생성 - RAG(Retrieval-Augmented Generation)
```

- 구현된 StoreService 코드에 대해 테스트코드를 생성하는 방법은 다음과 같습니다.
```
프롬프트 창에서 단순하게 '/test'만 입력하고 엔터
Spring Boot Test 코드가 아닌 경우, Spring Boot Test 코드로 생성해 달라고 프롬프팅합니다.
```
주문 생성에 대한 로직이 완성되었다면, 같은 맥락으로 주문취소('OrderCancelled')에 따른 로직도 구현합니다.

### Fast Food Delivery 서비스 실행하기

Copilot을 통해 완성된 마이크로서비스에 대해 카프카를 통해 서비스 간의 메시지 통신을 확인하는 방법은 다음과 같습니다.

- 먼저, 다음의 명령어로 카프카를 실행합니다.
```
cd infra
docker-compose up
```
- 카프카가 실행되었다면, 새로운 터미널에서 다음의 명령어를 입력하여 카프카 토픽에 대해 모니터링을 진행합니다.
```
cd infra
docker-compose exec -it kafka /bin/bash
cd /bin
./kafka-console-consumer --bootstrap-server http://localhost:9092 --topic fastfood --from-beginning
```
- docker-compose exec 커맨드로 kafka container에 접속이 안되는 경우 docker-compose 아래의 명령어를 통해 카프카의 버전을 변경합니다.
```
docker-compose version
sudo rm /usr/local/bin/docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.3/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

docker-compose version # v2.23.3 버전으로 업그레이드 확인후 재시도
```

- 각(order, store, delivery) 마이크로서비스를 실행합니다. (각 서비스 Root에서 아래 커맨드 실햏)
```
mvn spring-boot:run
```

- 새로운 터미널에서 아래 명령어를 입력하여 http 클라이언트를 설치합니다.
```
pip install httpie
```
- 새로운 터미널에서 클라이언트(http)를 활용하여 주문을 생성하고, 주문건에 대해 입점사 사장님이 요리시작도 알립니다.
```
# order 서비스 주문생성
 http POST :8081/orders userId=100 menuId=100 qty=3 address=kangdong orderDt='2024-02-26'
# store 서비스 요리시작  
http PATCH :8082/stores/1 cookingDt='2024-02-26'
```
- 카프카 모니터링 터미널로 이동하여 Event driven하게 카프카 모니터링 창이 토픽으로 조회되는 것을 확인할 수 있습니다.
        </mark-down>
    </div>
</template>


<script>
    // @group 01_03_03
    export default {
        name:'Copilot-dev',
        data() {
            return {}
        },
        props: {
            "Copilot을 활용한 비즈니스 로직 구현": {
                type: String
            },
        },
    }
</script>