# equality

- 두 피연산자가 모두 객체일 때, 동일한 객체를 참조하는 경우 ⇒ `true`
- `null != undefined` ⇒ `true`
- 두 피연산자의 데이터 타입이 다른 경우, 다음과 같은 타입변환이 수행됩니다.
  - [`string`, `number`] ⇒ [`number`, `number`]
  - [`boolean`, non-boolean] ⇒ [1(`true`) | +0(`false`), non-boolean]
  - [`object`, `number`] ⇒ [`object.valueOf()`, `number`]
  - [`object`, `string`] ⇒ [`object.toString()`, `string`]
