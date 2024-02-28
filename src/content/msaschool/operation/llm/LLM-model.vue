<template>
    <div>
        <mark-down class="content">
            
            ## Codespaces 기반 AI Copilot 맛보기

## Codespaces 생성하기

Codespaces IDE에 코드를 몇가지 방법으로 로딩할 수 있다.

- 첫번째는, Codespaces에서 repository를 선택하는 방식이다. 다음의 사이트로 접속한 후, 우측 상단 'New codespace를 클릭한다.(Github 로그인 필요)
```
https://github.com/codespaces
```

- 'Select a repository'를 눌러 repository를 선택하거나 접근 가능한 repository를 입력하여 선택할 수 있다.
- 내 GitHub Repository에 모델이 없는 경우  'Select a repository'에 "kimkyusook/codespace-copilot"를 입력하여 나타난 repository를 선택한다.

- Repository를 선택하면 Branch와 Machine type은 기본선택되며, 필요에 따라 옵션을 수정할 수 있고, 설정을 완료한 후 'Create codespace'를 클릭하면 Codespaces를 사용할 수 있다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/ba135ce9-36b3-4b98-9041-449b6a8beed7)

- 두번째는, Github의 repository에 직접 접속하여 ‘Code’ > Create codespace on main을 클릭해서 Codespaces를 사용할 수 있다.

![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/9d9b4d0c-8d3d-4c11-a883-8f109f87fba7)
 
## 확장 플러그인 Continue 설치하기

- 생성한 Codespaces에서 플러그인 Continue를 설치하기 위해, 좌측 'Extension' 클릭 > Continue를 입력 > 설치 버튼을 클릭한다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/808d91dd-7bab-4290-8020-263ff5a4b14c)

- 이후 Countinue의 버전을 최신상태로 변경하기 위해 더보기('...') > 확장 업데이트 확인을 클릭한 후 Codespaces를 재실행한다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/cd182f5f-6a96-4f89-a06f-a1235198f4a8)

- 재실행된 Codespaces에서 Continue의 버전이 0.8.12인지 확인한다.

## Continue 맛보기

- 탐색기 영역에서 Gugudan.java 파일을 생성한다.
- Ctrl + Shift + M을 입력하면 화면 우측에 Continue가 생성된 것을 확인할 수 있다.
- 입력창에 '구구단 프로그램 짜줘'라고 입력 후 출력된 결과를 확인한다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/9ce86d06-0dee-4f22-a633-b16d33725a8a)

- 코드가 python언어 기반으로 생성되었기 때문에 이를 Java언어로 변경하기 위하여 '여기 자바거든.'을 입력하여 결과를 확인한다.
- Java언어로 코드가 정상적으로 생성된 것이 확인되었다면 'Apply to current file' 아이콘을 클릭하여 Gugudan.java에 구구단 프로그램 코드를 적용한다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/8572e5bb-eb8b-4a3c-a77b-5f590deb70a0)


- 코드를 적용한 후, 터미널에서 다음과 같이 입력하여 Gugudan.java를 실행한다.

```
javac Gugudan.java
```
- 다음과 같은 오류가 발생한 것을 확인할 수 있다.

```
Gugudan.java:1: error: class Main is public, should be declared in a file named Main.java
public class Main {
       ^
1 error
}
```
- 해당 오류에 대한 해결하기위해 Ctrl + Shift + R을 입력하면 터미널의 오류가 프롬프트로 입력된다.

- 출력된 답변을 확인하면 클래스의 이름과 파일이름이 달라 발생한 문제임을 확인할 수 있고, Apply버튼을 클릭하여 코드 수정을 진행한다.

- 이후 다시 터미널에 다음과 같이 입력하여 Gugudan.java파일의 실행과 구구단프로그램이 정상적으로 실행되는지 확인한다.
```
javac Gugudan.java
java Gugudan
```

## GPT4 API-KEY 설정하기
- Continue 화면 하단 '+' 클릭 > 'Open AI' 클릭 > APIKEY 입력을 진행한다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/c6706311-3bf2-4f18-ae86-b4a2d0d2260d)

- 이후 하단의 'Open config.json'을 클릭하면 config.json파일에 입력한 APIKEY를 확인할 수 있고 GPT4를 이용할 수 있다.

        </mark-down>

    </div>
</template>


<script>
    // @group 01_01_04
    export default {
        name:'LLM-Model',
        data() {
            return {}
        },
        props: {
            "Open source LLM": {
                type: String
            },
        },
    }
</script>