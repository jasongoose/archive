# for-in

특정 객체의 enumerable + non-Symbol property key들을 순회합니다.

여기서 loop에 의한 **iteration 안으로 객체 자신뿐만 아니라 prototype chain 상에 위치한 프로토타입들의 key들도 모두 접근합니다**.

객체의 프로토타입들이 아닌 오직 객체 자신만의 속성(own-property)만을 접근할 때는

- `getOwnPropertyNames` 메서드를 사용하거나
- `hasOwnProperty` 또는 `propertyIsEnumerable` 메서드로 분기점을 생성하면 됩니다.

보통 객체 + 프로토타입들의 property key값을 확인하는 디버깅 용도로 많이 사용됩니다.
