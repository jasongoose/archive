# Browsing Context

브라우저가 HTML 문서를 표시할 환경을 가리키는 용어로 탭, 창, 페이지 내부 `<frame />`, `<iframe />` 등이 여기에 해당합니다.

각 browsing context에는 현재 화면에 표시되는 문서의 origin을 가지고 표시되었던 문서들의 순서(history)를 기억합니다.

browsing context 사이의 통신은 BroadcastChannel API, [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) 등으로 구현할 수 있습니다.
