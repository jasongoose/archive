# Keeping Components Pure

react에서는 모든 컴포넌트가 [순수함수](../../../books/composing_software/concepts/pure_function.md)입니다.

동일한 props에 대해서 동일한 JSX가 반환되고 함수 정의 블록내부에서 props, state, context 등의 외부 변수의 값을 mutate하지 않습니다.

`React.StrictMode`를 사용하면 개발 중 컴포넌트를 2번 연속으로 렌더링하여 외부 mutation의 발생여부를 확인할 수 있습니다.

:::info
물론 production에서는 1번만 렌더링됩니다!
:::

컴포넌트 렌더링 중이 아닌 이후에 실행할 로직들을 통틀어서 side-effect라고 하는데, event handler 또는 `useEffect` hook으로 구현합니다.
