# Methods

주어진 자원(resource)에 대해서 실행할 작업들을 명시합니다.

## GET

서버로부터 특정 자원에 관한 정보(representation)를 read하기 위해서 주로 사용합니다.

`GET` 요청에는 되도록이면 payload를 같이 전송하지 않습니다.

## POST

서버로 entity(데이터 개체)를 전송(submit)하여 server의 state를 바꾸는 side-effect를 발생시킵니다.

`POST` 요청은 보통 HTML form에서 많이 사용되고 요청 payload의 타입은 다음과 같이 명시합니다.

- `<form enctype=””>`
- `<input formenctype="”>`
- `<button formenctype="">`

위에 기입할 수 있는 요청 payload 타입은 다음과 같습니다.

- `text/plain`
- `application/x-www-form-urlencoded`
- `multipart/form-data`
  - 보통 form 안에 `<input type=”file” />` 이 있을 때 사용합니다.

HTTP/1.1 spec에 따르면 `POST` method는 일반적으로 다음과 같은 상황에서 활용됩니다.

- 게시판에 글을 올릴 때
- 신규 회원가입(signup)으로 사용자를 추가할 때
- form 제출상태를 확인할 때
- append 연산으로 DB 확장할 때

## PUT

서버 상에서 리소스를 새로 생성하거나 기존 리소스를 요청 payload로 대체할 때 사용합니다.

### 요청

```bash
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### 응답

```bash
// 새로운 자원 생성이 완료된 경우
HTTP/1.1 201 Created
Content-Location: /new.html
```

```bash
// 자원 수정이 완료된 경우
HTTP/1.1 200 Ok
Content-Location: /existing.html
```

```bash
// 또는 수정되고 나서 변경된 내용이 그대로인 경우
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## DELETE

서버의 특정 리소스를 삭제합니다.

### 요청

```bash
DELETE /file.html HTTP/1.1
Host: example.com
```

### 응답

```bash
// 삭제완료 + 응답 body에 status 정보가 포함되는 경우
200 Ok
```

```bash
// 요청은 수신해지만 아직 삭제되지 않은 경우
202 Accepted
```

```bash
// 삭제완료 + 응답 body가 없는 경우
204 No Content
```

## PATCH

서버의 특정 리소스에 부분 수정을 적용할 때 사용합니다.

서버에서 `PATCH` method 지원여부는 다음과 같은 응답 header에서 확인할 수 있습니다.

- `Allow`
- `Access-Control-Allow-Methods`
- `Accept-Patch`(서버에 수용하는 patch document의 형식)

patch가 완료상태는 2xx response code로 확인할 수 있습니다.

### 요청

```bash
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[description of changes]
```

### 응답

```bash
// response body에 payload가 없는 경우
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## OPTIONS

특정 url이나 \*(asterisk)가 가리키는 서버로 허용된 통신설정에 대한 정보를 요청합니다.

CORS에서 브라우저가 서버로 preflight request를 전송할 때, 이 method를 사용합니다.

### 요청

```bash
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

`Access-Control-Request-Method`

- resource sharing이 가능해진 상황에서 서버로 전송할 request의 method를 명시합니다.

`Access-Control-Request-Headers`

- resource sharing이 가능해진 상황에서 서버로 전송할 request의 header들을 명시합니다.

### 응답

```bash
HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

`Access-Control-Allow-Origin`

- 리소스 요청이 가능한 client의 origin들

`Access-Control-Allow-Methods`

- 가능한 리소스 요청 method들
- CORS에서만 사용할 수 있는 header인데, 범용적으로 확인할 때는 `Allow` header를 사용합니다.

`Access-Control-Allow-Headers`

- client에서 script를 통해 읽을 수 있는 response header들

`Access-Control-Max-Age`

- 위에서 명시한 header와 그 값들을 client cache에 저장할 수 있는 최대 sec

## CONNECT

클라이언트가 `HTTP` proxy 서버한테 `HTTPS` 서버(upstream 서버)로의 TCP connection(= tunnel) 생성을 요청할 때 사용합니다.

proxy가 upstream 서버로의 TCP tunnel을 생성하면 클라이언트에서 전달한 TCP stream들을 받아서 그대로 서버로 전달합니다.

### client -> HTTP proxy 요청 예시

```bash
CONNECT reqbin.com:443 HTTP/1.1
Host: reqbin.com:443
```

### HTTP proxy → client 응답 예시

```bash
// tunnel 생성 성공 시
HTTP/1.1 200 Connection Established

// 인증정보가 필요할 시
HTTP/1.1 407 Proxy Authentication Required

// proxy가 upstream 서버로부터 무효한 응답을 받았을 시
HTTP/1.1 502 Bad Gateway

// proxy가 제한된 시간 내에 upstream 서버로부터 응답을 못 받을 시
HTTP/1.1 504 Gateway Timeout
```

## HEAD

특정 URL로 `GET` 요청을 전송했을 때, 응답 메시지에 포함될 header들만 요청할 때 주로 사용됩니다.

따라서 요청/응답 message에는 body 부분이 반드시 없어야 합니다.

예를 들면, URL에 대응되는 리소스의 용량이 크다면 실제 리소스를 받기 전에 `HEAD` 응답에 포함된 `Content-Length` header 값으로 파일 크기를 알 수 있습니다.

또 다른 예로, `HEAD` 응답을 통해 browser cache의 유효여부를 판단하여 실제 리소스를 받기도 전에 cache를 무효화할 수 있습니다.

## 공통 특성

개별 HTTP method는 다른 의미와 역할을 가지고 공통 특성(safe, idempotent, cacheable)을 기준으로 grouping할 수 있습니다.

|         | safe | idempotent | cacheable |
| ------- | :--: | :--------: | :-------: |
| GET     |  ✅  |     ✅     |    ✅     |
| POST    |      |            |     △     |
| PATCH   |      |            |           |
| HEAD    |  ✅  |     ✅     |    ✅     |
| PUT     |      |     ✅     |           |
| DELETE  |      |     ✅     |           |
| CONNECT |      |            |           |
| OPTIONS |  ✅  |     ✅     |           |

△ : `POST` 경우, `content-location` header 값을 명시하면 캐싱이 가능하다.

### safe

서버의 데이터를 read만 하고 write하지 않는(실제 서버의 state를 바꾸지 않는) 특성입니다.

### idempotent

동일한 서버로 동일한 요청을 연속으로 여러 번 전송해도 서버의 state가 바뀌지 않는 특성으로 보통 safe이면 idempotent입니다. 단, 역은 성립하지 않습니다.

동일한 요청을 여러 번 전송해도 응답별 status code는 달라질 수 있습니다.

:::info
`DELETE` method로 DB의 마지막 entry를 제거한다면 서버의 요청처리 로직에 따라서 idempotence가 지켜지지 않을 수도 있습니다.

```bash
DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -> Returns 404
DELETE /idX/delete HTTP/1.1   -> Returns 404
```

:::

### cacheable

client cache에 저장할 수 있는 특성으로 다음과 같은 데이터가 caching이 가능합니다.

- 요청 method 자체
- 요청 message 자체
- 응답 payload
- 응답 status code
  - 2xx : `200`, `203`, `204`, `206`
  - 3xx : `300`, `301`
  - 4xx : `404`, `405`, `410`, `414`
  - 5xx : `501`

method의 종류뿐만 아니라 response의 `Cache-Control` header 값에 따라서도 caching 가능여부가 달라집니다.

```bash
200 OK
Cache-Control: no-cache
(…)
```

정리하면 caching 가능여부는 HTTP 메서드 타입 + 응답의 status code + 응답의 `Cache-Control` header 값을 모두 따져야만 합니다.

:::info
특정 URI로의 non-cacheable 요청/응답은 동일한 리소스의 기존 caching을 무효화합니다.

예를 들어, pageX.html 파일에 대한 `PUT` 요청은 `GET` 요청에 의해서 caching된 pageX.html을 cache로부터 제거합니다.

:::
