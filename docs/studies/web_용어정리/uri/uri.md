# URI

## 웹 서버 리소스

웹 서버에서 제공하는 정적자원과 동적자원을 의미합니다.

정적자원은 웹 서버 파일 시스템에 저장된 텍스트 파일, HTML 파일, MS Word 파일, JPEG 이미지 파일, AVI 영상파일 등 다양한 형태로 가진 파일을 가리킵니다.

동적자원은 자원을 요청한 주체나 요청시간 등 특정 조건에 따라 다르게 제공되는 자원으로, 카메라로부터 전송된 라이브 이미지, 실시간 주식이나 부동산 데이터 등이 있습니다.

## MIME(Multipurpose Internet Mail Extensions) type

HTTP 프로토콜에 의해서 전달된 데이터의 타입을 구분하기 위한 data format label로, `<primary object type> / <specific subtype>` 형식을 가집니다.

브라우저는 서버로부터 받은 HTTP 메시지의 헤더에 적힌 MIME type을 확인하여 데이터를 포맷에 맞게 처리합니다.

## URI(Uniform Resource Identifier)

클라이언트 입장에서 서버 리소스들을 구분하기 위한 ID입니다.

URI은 [URL](./url.md) 또는 [URN](./urn.md) 형태로 가집니다.
