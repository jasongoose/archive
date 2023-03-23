# Service Worker

웹 클라이언트와 서버 사이에 위치한 미들웨어 proxy로, 앱 navigation을 수정하거나 asset 요청을 중간에 intercept하여 특정 상황(특히, 오프라인 상)에서 관련 페이지의 동작을 제어하는 기능을 가집니다.

<Image src="../_images/pwa.png" alt="pwa" />

## 기능

PWA 클라이언트가 asset을 요청하면 service worker는 이 요청을 intercept하여 아래와 같은 작업들을 수행할 수 있습니다.

- [Cache Storage API](../../browser/web_api/cache_storage.md)를 사용하여 해당 asset를 cache에서 가져온다(오프라인 컨텐츠 제공).
- 기존 웹앱처럼 서버로 요청을 전송한다.
- local 알고리즘(?)으로 생성한다.

## Context

실행 컨택스트(execution context)가 아닌 별도의 worker context에서 동작하기 때문에 main 스레드의 blocking이 발생하지 않습니다.

하지만 service worker의 lifecycle phase별 구체적인 cache 제어 로직은 main 스레드가 담당합니다.

## HTTPS

Promise 기반 async API와 HTTP가 아닌 HTTPS 프로토콜을 따르기 때문에, 모든 asset 요청 URL은 항상 `https://`로 시작합니다.

## 사용이점

service worker는 cache에 접근할 수 있어서 다음과 같은 사용이점이 있습니다.

- 네트워크 품질에 상관없이(심지어 오프라인 상에서도) 컨텐츠를 제공한다.
- 최근에 접속했던 앱의 state를 유지한다.
