# Factory Functions And The Module Pattern

factory function(ff)은 `new` 키워드 없이 새로운 객체를 반환하는 함수로 보통 OOP의 constructor의 대용으로 사용됩니다.

JS에서는 함수도 객체이기 때문에 factory function은 고차함수라고도 볼 수 있습니다.

클로져 현상을 이용하면 `class`의 private 속성과 메서드를 생성하여 내부구현 로직이 사용자 영역에 노출되지 않도록 만들 수 있습니다.

class나 prototype의 상속도 쉽게 구현할 수 있는데 그냥 ff으로 새로운 객체 인스턴스를 하나 만들면 됩니다.

:::info
ES6부터 도입된 ESM은 ff을 IIFE로 wrapping하여 구현된다고 합니다.
:::

## 참고자료

[Factory Functions and the Module Pattern](https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern)
