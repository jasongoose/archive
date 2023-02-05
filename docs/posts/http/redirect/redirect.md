# Redirect

<p align="center">
    <img src='../_images/http-redirect.png' placeholder="HTTP Redirect" />
</p>

서버가 클라이언트로 하여금 다른 url을 요청하도록 유도하기 위한 HTTP 메커니즘으로, 보통 다음과 같은 상황에서 사용됩니다.

- 사이트 유지보수 작업이나 셧다운 이유로 다른 페이지로 이동할 때
- 사이트의 url을 변경한 뒤, 기존의 링크나 북마크 등을 보존할 때

서버에서 status 코드가 `3xx`인 응답을 전달했을 때, 브라우저가 자동으로 응답에 명시된 Location으로 리소스로 재요청하는 원리입니다.