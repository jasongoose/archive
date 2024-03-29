# URL

브라우저가 웹 상에서 리소스를 구분하기 위한 고유주소로, 유효한 URL은 HTML 페이지, CSS 문서, 이미지 등의 고유한 리소스를 가리킵니다.

URL 자체 문자열 값과 URL이 가리키는 리소스를 관리하는 것은 웹 서버가 담당합니다.

![URL 구조](../image/url_%EA%B5%AC%EC%A1%B0.png)

## scheme(protocol)

브라우저가 리소스를 요청하기 위해서 사용할 프로토콜 이름입니다.

## domain

목적지 웹 서버를 가리키는 주소로 HTTP 요청이 전송되기 전에 DNS 서버에 의해서 IP 주소로 변환됩니다.

## port

웹 서버 상에서 클라이언트가 요청하는 리소스가 위치한 프로세스를 가리키는 값입니다.

표준 포트번호를 사용할 경우에는 생략해도 됩니다(HTTP = 80, HTTPS = 443).

:::tip
"scheme + domain + port"를 묶어서 origin 또는 authority라고 부릅니다.
:::

## path

웹 서버 상에서 리소스의 경로입니다.

웹 초창기에 실제 서버의 물리적인 파일 시스템 경로값이었지만 지금은 물리적인 실제값이 아닌 서버가 다루기 위한 논리적인 값으로 지정됩니다.

## query(parameters)

웹 서버로 전달하는 부가적인 데이터로, `key=value` 형태의 문자열들을 `&`로 구분합니다.

![Query](../image/query.png)

## anchor

리소스 자체의 특정 영역을 가리키는 북마크 역할을 합니다.

리소스가 HTML 문서인 경우, 브라우저는 anchor가 가리키는 영역(fragment)으로 스크롤링을 해줍니다.

URL에서 `#` 이후의 부분 문자열을 fragment identifier(hash)라고 부르는데 실제 서버로의 요청 메시지 안에는 포함되지 않습니다.

`window.Location.hash`를 사용하면 현재 페이지의 URL의 hash를 읽거나 수정할 수 있습니다.
