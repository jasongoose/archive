# const, let

block scope를 가지는 변수를 선언할 때 사용하는 키워드입니다.

`var`와 다르게 전역으로 선언되었을 때 전역객체의 property로 처리되지 않습니다.

block statement(`{...}`)을 사용하여 closure를 사용하지 않고 private 변수를 구현할 수 있습니다.

block scope 내에서 hoisting으로 최상단에 변수 선언만 일어납니다.

원본 변수 선언문에 도달해야 변수 초기화(초기값이 없다면 `undefined`)가 수행되는데, scope 최상단과 변수 선언문 사이의 변수를 참조할 수 없는 공간을 TDZ라고 합니다.

`let`, `const`, `var`에 의한 변수 재선언은 불가합니다.

:::info `const`가 `let`과 다른 점들

1. 변수를 선언하면서 대입연산자로 할당하여 초기화시켜야 합니다.
2. 선언문 이후로 할당이 불가합니다.

:::
