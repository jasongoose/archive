# OAuth

특정 앱(consumer)이 id/pw를 공유하지 않은 상태로 다른 앱(service provider)에서 관리하는 정보에 access할 수 있도록 만드는 프로토콜/프레임워크입니다.

카카오톡, 페이스북, 네이버, github 계정으로 대신 로그인할 수 있는 앱이 있는데, 이것이 OAuth 프로토콜을 적용한 예시들 입니다.

## 구동원리

OAuth는 일련의 API 호출로 구현되고 JSON 기반의 토큰을 사용합니다.

Github에서 OAuth 인증을 진행하는 flow는 다음과 같습니다.

1. 사용자가 github의 authorization 페이지로 redirect합니다. 여기서 redirect URL에 접근하려는 리소스의 scope를 명시합니다.
2. 허용하면 query에 임시 code를 명시한 callback URL로 redirect됩니다.
3. 10분 안으로 해당 code로 구성한 URL로 access token을 요청하여 전달받습니다.
4. 이제 처음에 명시한 scope에 해당하는 리소스를 요청할 때마다 이 access token을 `Authentication` header로 전달합니다.
