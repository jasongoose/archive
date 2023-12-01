# 붕당정치와 JavaScript 번들러

prod 환경(브라우저)에서 사용할 단일 JS 코드를 생성하는 것이 모듈 번들러의 역할입니다.

번들러는 아래와 같이 이유로 필요합니다.

- 런타임 중 비동기적으로 모듈들을 호출하지 않기 때문에 리소스(네트워크 대역폭)를 절약할 수 있습니다.
- 모듈 시스템을 지원하지는 않는 브라우저(특히 IE)와의 호환성을 고려해야 합니다(현대 브라우저들은 대부분 ESM을 지원합니다).
- 코드의 의존성(종속성) 관계를 정리합니다.
- 이미지, css 등 asset을 load하는데 도움을 줍니다.
- 번들러 자체에서 개발 + build + lint + 최적화(tree-shaking 등)를 위한 플러그인을 제공합니다.

## 참고자료

[JavaScript 번들러로 본 조선시대 붕당의 이해](https://wormwlrm.github.io/2020/08/12/History-of-JavaScript-Modules-and-Bundlers.html)
