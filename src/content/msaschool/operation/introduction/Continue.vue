<template>
    <div>
        <mark-down class="content">
            

## Copilot

Copilot은 개발자들이 코드를 더 빠르고 효율적으로 작성할 수 있도록 돕는 AI 기반의 코드 생성 및 보조 도구를 의미합니다. 

그중 Continue는 Copilot의 확장 기능 중 하나로 작성한 코드를 기반으로 추가적인 코드를 생성 및 수정하거나 특정 작업을 수행하는 도구입니다.

다음은 Codespace 환경에서 Continue를 설정하고 활용하는 예제입니다.
 
## 확장 플러그인 Continue 설치

- 생성한 Codespaces에서 플러그인 Continue를 설치하기 위해, 좌측 'Extension' 클릭 > Continue를 입력 > 설치 버튼을 클릭합니다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/808d91dd-7bab-4290-8020-263ff5a4b14c)

- 이후 Countinue의 버전을 변경하기 위해 더보기('...') > 확장 업데이트 확인을 클릭한 후 Codespaces를 재실행하면 최신 버전의 Continue를 이용할 수 있습니다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/cd182f5f-6a96-4f89-a06f-a1235198f4a8)

## GPT4 API-KEY 설정
- Continue 화면 하단 '+' 클릭 > 'Open AI' 클릭 > APIKEY 입력을 진행합니다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/c6706311-3bf2-4f18-ae86-b4a2d0d2260d)

- 이후 하단의 'Open config.json'을 클릭하면 config.json파일에 입력한 APIKEY를 확인할 수 있고 GPT4를 이용할 수 있습니다.

## Continue 맛보기

- 탐색기 영역에서 Gugudan.java 파일을 생성합니다.
- Ctrl + Shift + M을 입력하면 화면 우측에 Continue가 생성된 것을 확인할 수 있습니다.
- 입력창에 '구구단 프로그램 짜줘'라고 입력 후 출력된 결과를 확인하면 다음과 같습니다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/9ce86d06-0dee-4f22-a633-b16d33725a8a)

- 코드가 python언어 기반으로 생성된 것을 확인할 수 있습니다. 이를 Java언어로 변경하기 위해 추가 요청을 보낸 후 정상적으로 생성된 것이 확인되었다면 'Apply to current file' 아이콘을 클릭하여 Gugudan.java에 구구단 프로그램 코드를 적용합니다.
![image](https://github.com/kimkyusook/codespace-copilot/assets/123912988/8572e5bb-eb8b-4a3c-a77b-5f590deb70a0)


- 코드를 실행하기 위해 터미널에서 다음과 같이 입력하여 Gugudan.java를 실행합니다.

```
javac Gugudan.java
```
- 파일을 실행하면 다음과 같은 오류가 발생한 것을 확인할 수 있습니다.

```
Gugudan.java:1: error: class Main is public, should be declared in a file named Main.java
public class Main {
       ^
1 error
}
```
- 오류를 해결하기위해 Ctrl + Shift + R을 입력하면 터미널의 오류가 프롬프트로 입력되며 답변이 자동으로 생성되는 것을 확인할 수 있습니다.

- 출력된 답변을 확인하면 클래스의 이름과 파일이름이 달라 발생한 문제임을 확인할 수 있고, Apply버튼을 클릭하여 기존 코드를 수정합니다.

- 이후 다시 터미널에 다음과 같이 입력하여 Gugudan.java파일의 실행과 구구단프로그램을 실행하면 정상적으로 실행되는 것을 확인할 수 있습니다.
```
javac Gugudan.java
java Gugudan
```
        </mark-down>

    </div>
</template>


<script>
    // @group 01_01_06
    export default {
        name:'Continue',
        data() {
            return {}
        },
        props: {
            "Continue": {
                type: String
            },
        },
    }
</script>
