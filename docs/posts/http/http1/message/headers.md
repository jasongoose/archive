# headers

요청/응답 메시지에 대한 추가정보를 담는 부분으로 다음과 같은 구성을 가집니다.

```bash
<헤더명>: <헤더값>

// 헤더명은 case-insensitive
// 헤더값 앞의 공백문자는 무시됩니다.
```

## Request header

요청 message의 request context를 전달하여 서버가 클라이언트에 맞춰서 응답을 생성할 수 있도록 합니다.

:::info CORS-safelisted request header
cross-orign으로 리소스를 요청할 때, preflight request를 생략할 수 있는 헤더들을 의미합니다.

```bash
Accept
Accept-Language
Content-Language
Content-Type
```

:::

헤더값은 아래와 같은 조건을 만족해야 합니다.

- 모든 헤더값은 최대 128개의 문자만 포함할 수 있다.
- `Content-Type` 으로 가능한 값들
  ```bash
  application/x-www-form-urlencoded
  multipart/form-data
  text/plain
  ```
- `Accept`, `Content-Type`으로 불가능한 값들

  - ` " ( ) : < > ? @ [ \ ] { } 0x7F(DEL)`

  - “CORS-unsafe request header byte”를 포함한 경우

    ```bash
    0x00 ~ 0x1F // 단, 0x09(HT) 제외
    ```

- `Accept-Language` , `Content-Language`으로 가능한 값들
  ```bash
  0 ~ 9
  A ~ Z
  a ~ z
  'space'
  - , - . ; =
  ```

## Response header

응답 message의 내용과 상관없는 response context를 전달합니다.

## Representation header

요청/응답 message의 body에 담긴 데이터의 표현방식(언어, 압축여부, 인코딩 방식, MIME 타입 등) 정보를 담은 헤더입니다.

클라이언트가 `Accept-*` 헤더를 통해 원하는 응답 format에 관한 정보를 서버로 전송하면(content-negotiation 단계) 서버는 해당 헤더를 통해 선택된 format에 관한 정보를 전송합니다.

가능한 헤더들은 다음과 같습니다.

```bash
Content-Type
Content-Encoding
Content-Language
Content-Location
```

## Payload header

요청/응답 message의 안전한 전송과 원본 리소스로 재구성을 위한 정보(message의 payload 길이, 원본 리소스 상에서 payload의 순번, 전송방식, message 고결성 검사 등)를 담고있는 헤더입니다.

```bash
Content-Length
Content-Range
Transfer-Encoding
Trailer
```
