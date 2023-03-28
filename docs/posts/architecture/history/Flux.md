# Flux

<Image src="/image/architecture/Flux.png" alt="Flux" />

Container-Presenter 패턴의 props drilling 문제를 해결하려는 목적으로 facebook(현 Meta)에서 제안했던 패턴입니다.

기존에는 중재자(Controller, ViewModel)를 중심으로 데이터가 양방향으로 흘렀지만(M <=> VM <=> V) Flux에서는 중재자 없이 user interaction → dispatch → store → view 라는 일관된 방향으로 앱의 동작을 제어할 수 있는 단방향성을 가집니다.

Flux의 특징들을 정리하면 다음과 같습니다.

- 컴포넌트 내부 Model과 Controller 영역(비즈니스 로직)을 컴포넌트 외부 store에서 관리한다.
- View는 다수 컴포넌트들의 조합이 아닌 단일 template을 가지는 넓은 범위로 이해한다.

Flux의 구현체로는 Redux, Vuex 등이 있습니다.
