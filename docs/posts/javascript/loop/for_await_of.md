# for await-of

iterable의 value들을 순회하기 위한 [for-of](for_of)문의 asynchronous 버전입니다.

`for await-of` 문은 async iterable의 value들을 순회(iterate)하기 위한 반복문입니다.

:::info
async iterable의 `[Symbol.asyncIterable]` 메서드는 settled Promise를 생성하는 iterator를 반환합니다.
:::

기존 for-of문으로 순회하는 sync iterable에 대해서도 `for await-of`문을 사용할 수는 있습니다.

단, for await-of문은 `await`문처럼 `async` 함수 내부에서만 사용할 수 있습니다.
