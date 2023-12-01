# How to handle API errors in your web app using axios

api를 호출했을 때 오류가 발생하는 시나리오는 크게 3가지가 있습니다.

- api response에 error 코드를 가지는 경우
- api request가 불가한 경우
  - spotty network(신호세기가 약한 네트워크) 환경에 있을 때
  - 서버에서 제시간에 맞춰 response를 전송하지 않을 때
  - CORS preflight 단계에서 실패할 때
  - CORS preflight 단계를 성공했지만 서버에서 error 코드를 전송할 때

FE단에서 error를 처리할 때는 에러 페이지로 redirect하거나 또는 에러정보를 담은 popup을 노출시키는 방법이 있다.

아니면 [axios-retry 플러그인](https://github.com/softonic/axios-retry)을 사용하여 에러가 나지 않을 때까지 반복적으로 요청을 전송하는 방법도 있습니다.

## 참고자료

[How to handle API errors in your web app using axios](https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/)
