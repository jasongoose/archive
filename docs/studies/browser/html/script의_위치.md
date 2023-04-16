# script의 위치

JS 파일을 가져오기 위한 `<script>`는 `<head>` 안에 있어야 할까요, 아니면 `<body>` 안에 있어야 할까요?

브라우저는 위에서 아랫방향으로 HTML 문서를 파싱하여 DOM tree를 생성하므로 `<head>`가 `<body>`보다 먼저 DOM node로 만들어질 겁니다.

또한 브라우저는 HTML 파싱 중 `<script>`를 만나면 `src`에 명시된 URL로 JS 코드를 다운받고 실행을 완료할 때까지 파싱을 멈춥니다(=render blocking).

만일 `<script>`로 다운받은 코드에 `<body>` 내 DOM을 조작하는 로직이 있다면 필요한 node가 없는 상태에서 실행되어 예상했던 결과가 나오지 않을 수도 있습니다.

그래서 보통 페이지의 자연스러운 로딩을 위해서 `<script>`는 `<body>` 최하단 또는 바로 아랫쪽에 위치시키는 것이 관례입니다.

하지만 HTML 파싱 중에 render blocking을 일으키는 것은 마찬가지기 때문에 페이지 로딩에 지연은 여전히 발생합니다.

이와 관련하여 대부분의 브라우저에서는 `<script>`에 `async` 또는 `defer` attribute을 전달하여 지연을 줄이는 방법을 제시합니다.

### async

- HTML 파싱 중 script 다운로드 및 실행을 비동기적으로 처리합니다.
- 여러 `<script>`가 연속으로 있을 때, 순서대로 실행할지 여부는 모릅니다.

### defer

- HTML 파싱이 끝난 이후에 script 다운로드 및 실행을 동기적으로 처리합니다.
- 여러 `<script>`가 연속으로 있을 때, 순서대로 실행합니다.

그래서 `<script defer>`를 `<head>`에 두는게 어쩌면 그나마 간결한 방법이 아닐까 생각해봅니다.

```html
<head>
  <script defer src=".js"></script>
</head>
```
