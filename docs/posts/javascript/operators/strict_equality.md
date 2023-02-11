# strict-equality

- 두 피연자의 데이터 타입이 다른 경우 ⇒ `false`
- 두 피연산자가 모두 객체일 때, 동일한 객체를 참조하는 경우 ⇒ `true`
- `null === null` ⇒ `true`
- `undefined === undefined` ⇒ `true`
- `NaN !== NaN` ⇒ `true`
- `+0 === -0` ⇒ `true`

:::tip
신기하게도 `NaN` 은 임의의 값과 동등연산자(==)나 일치연산자(===)를 적용해도 항상 `false`가 나오므로, `NaN` 인지 여부는 전역함수인 `isNaN`을 사용하면 됩니다.

```js
console.log(NaN == NaN); // False
console.log(NaN === NaN); // False

console.log(isNaN(NaN)); // True
```

:::
