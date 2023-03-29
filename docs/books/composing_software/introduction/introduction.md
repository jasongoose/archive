# Introduction

프로그램을 개발한다는 말의 본질은 다음과 같이 이해할 수 있습니다.

> 복잡한 문제를 해결하기 위해 여러 개의 하위 문제들로 분해한 뒤, 각 하위문제를 해결할 수 있는 구성요소를 정의하고 이들을 합성하여 최종 해결법을 도출하는 과정

## 좋은 프로그램이란?

좋은 프로그램은 개발자에게 다음과 같은 이점을 줍니다.

### 소프트웨어의 내부품질 보장

- 새로운 feature를 쉽게 구현할 수 있습니다.
- legacy 코드를 쉽게 리팩토링할 수 있습니다.
- 다른 팀원이 코드를 쉽게 이해하고 공유할 수 있습니다.
- 디버깅이 용이해집니다.

### 소프트웨어의 외부품질(서비스 품질) 보장

- 외부 사용자가 버그의 영향없이 무난하게 서비스를 이용할 수 있습니다.

## Composition

개발하면서 필요한 compositon은 2가지가 있습니다.

### Function Composition

pipe 함수처럼 중간에 함수의 반환값을 저장하는 매개변수 없이 함수를 정의하는 방식을 “point-free style”라고 합니다.

point-free style은 함수를 간결하게 정의할 때 주로 사용되는데, 구체적인 효과를 나열하면 다음과 같습니다.

- 변수의 개수를 줄여서 오랫동안 변수의 의미를 잊지 않고 기억할 수 있습니다.
- 동일한 의미를 줄어든 코드로 전달하기 때문에 소스분석이 용이해집니다.
- 코드의 양이 줄어들기 때문에 버그가 존재할 영역도 줄어듭니다.

### Object Composition

primitive value 또는 다른 object들을 합성하여 새로운 object를 정의하는 개념입니다.

> _Composite objects are formed by putting objects together such that each of the latter is ‘part of’ the former._

평소에 개발하면서 literal object, Array, Set, Map, WeakMap, TypedArray 등의 타입의 데이터를 생성하는 작업이 여기에 포함됩니다.

object들을 합성하는 방식은 위와 같이 재귀적으로 합성하는 composite pattern 뿐만 아니라 3가지의 다른 기법들도 존재합니다.

- delegation
- acquaintance
- aggregation

## 마지막으로,

개발의 본질을 파악하고 그 본질에 맞게 개발하면 간결한 소스를 작성할 수 있습니다!

> **_The essence of software development is composition._**
