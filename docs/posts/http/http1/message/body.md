# body

서버 또는 클라이언트로 전송할 데이터가 위치하는 부분입니다.

## 요청

보통 업데이트 목적으로 `POST` , `PUT` 메서드에서 주로 사용됩니다.

## 응답

### single file + known length

`Content-Type` 헤더와 `Content-Length` 헤더에 의해서 정의됩니다.

### single file + unknown length

`Transfer-Encoding: chunked` 헤더에 의해서 여러 개의 chunk를 가집니다.

### Multiple-resource bodies

하나의 body가 다수의 part로 구성됩니다.

::: info
요청 message에서는 `<form></form>` 에 입력한 데이터를 담을 때 사용되고, 응답 message에서는 거의 사용되지 않는 방식입니다.
:::
