<template>
    <div>
        <mark-down class="content">
            
## Ollama

Ollama는 로컬 LLM을 구축할 수 있는 솔루션으로, 모든 운영체제에서 사용 가능합니다(Windows는 베타 버전 지원).

**https://ollama.com/** 에서 운영체제 선택 후 다운로드 가능합니다. 

![4 56 35](https://github.com/msa-ez/llmschool.github.io/assets/113568664/fc28b209-97a6-40c8-a6b4-b3be0ca231cd)

**https://ollama.com/library** 에서는 Ollama에서 제공하는 전체 모델 리스트를 확인할 수 있는데, gemma, llama2, mistral 등 인기 있는 모델은 대부분 제공하고 있습니다. 

![4 59 15](https://github.com/msa-ez/llmschool.github.io/assets/113568664/72ef2188-a2c0-461a-b786-794d40c1bbf5)

특정 모델을 선택하면 해당 모델의 정보를 확인할 수 있는데, Tag를 확인해 모델의 구체적인 정보를 선택해 사용할 수 있습니다. **latest** 버전을 선택하면 가장 최신 버전을 적용할 수 있습니다. 

![5 07 38](https://github.com/msa-ez/llmschool.github.io/assets/113568664/e3115dd8-f12f-4d4c-8313-0874c92616ab)

### Ollama Model Tag

|  기본 태그 | 용도 | 파라미터 | 양자화 |
| ---|---|---|---|
| latest : 최신모델 | instruct : 채팅 전용으로 Fine-tuning 한 모델(Default)  | 7b : 7 Billions 모델  | q2, q3, q4, q5, q6, q7, q8 : X Bit로 양자화(높은 비트로 양자화 한 것일수록 손실 적음)  |
|  vX : 모델의 버전 | text : 텍스트 완성 전용, 초기모델  | 13b : 13 Billions 모델  | K, K_S, K_M, K_L : 변형 방법(일반적으로 성능은 S - M - L 순서대로 좋음)  |

Ollama는 채팅 모델을 기본으로 삼아 주로 instruct 모델을 latest로 설정합니다.

또한 모델에서 사용하는 실제 파라미터는 디테일 높은 수준의 값을 웨이트로 사용하기 때문에 용량이 너무 크다는 문제점이 있는데, 이를 해결하기 위해 양자화를 통해 정밀도를 낮추고 용량을 아끼는 방법을 채택했습니다. 

굉장히 큰 소수(0.xxxxxxx...)로 구성된 파라미터를 반올림하는 것인데, 반올림을 얼마나 많이 했는지에 따라 q8부터 q2까지 다양합니다. 

q8은 원본과 거의 비슷한 수준의 정밀도를 보여주지만 용량 면에서도 큰 차이를 보이지 않습니다. q2 수준으로 내려가게 되면 양자화의 반올림 정도가 심해 모델의 정확도가 떨어지게 됩니다.

어느 정도의 성능도 보장이 되면서 용량 절약까지 가져가기 위해서는 q4~5 정도가 적당하고, Ollama에서도 이 정도 수준을 기본 양자화 모델로 채택합니다. 

![스크린샷 2024-03-05 오후 3 17 37](https://github.com/msa-ez/llmschool.github.io/assets/113568664/1ffbc893-2212-4d56-8768-73a828b8a7f3)

하나의 예로 실제 Ollama에서 Mistral 모델의 태그 중 일부를 보면 **7b-instruct-q5_K_S** 와 같은 형태로 나타나는데, 이를 해석하면 7b 파라미터를 가진 instruct 모델을 q5 수준으로 양자화한 버전이라고 해석할 수 있습니다. 

### Ollama 기본 명령어

- **Serve** : 서버 시작 - Ollama를 실행하면 기본적으로 서버가 올라가므로 별도 입력할 필요 X
- **Pull** : 모델을 받아서 로컬에 저장
- **List** : 저장된 모델 조회
- **Run** : 선택한 모델로 콘솔 테스트 - 앞서 Pull 받지 않아도 Run 명령어 실행 시 자동으로 Pull을 진행
- **Rm** : 선택한 모델 삭제
- **Create** : Modelfile로부터 모델 추가 - Ollama에 새로운 커스텀 모델을 등록할 때 사용

위 명령어로 Ollama에서 Mistral 모델을 활용하는 방법을 예로 들면 다음과 같습니다. 
```
ollama pull mistral //mistral 모델 로컬에 저장
```
```
ollama list //설치된 모델 확인
```
```
ollama run mistral //설치된 모델 테스트
```
        </mark-down>

    </div>
</template>


<script>
    // @group 05_01_04
    export default {
        name:'Ollama',
        data() {
            return {}
        },
        props: {
            "Ollama": {
                type: String
            },
        },
    }
</script>