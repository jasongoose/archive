# MVI

<Image src="../_images/MVI.png" alt="MVI" />

[cycle.js](https://cycle.js.org/model-view-intent.html)라는 라이브러리에서 처음 제시한 패턴으로 View와 Model를 분리하지만 사용자의 이벤트별로 수행되는 action들을 정의한 Intent 영역을 Controller로 두는 특징이 있습니다.

해당 패턴은 다음과 특징이 있습니다.

- Controller를 2개의 layer로 나눈다.
  - View의 UI를 통해서 전달된 event별 사용자의 의도를 파악하는 로직들
  - 의도별로 model을 조작하는 함수들
- Intent와 View 사이의 의존성이 없다.
  - 하나의 Intent 로직이 여러 개의 View에서도 사용할 수 있다.
  - 개별 Intent 로직 단위의 테스트들로 전체 View 테스트를 대체할 수 있다.
  - 컴포넌트 간의 통신(props)에 의존하지 않아서 일관된 상태를 유지할 수 있다.
