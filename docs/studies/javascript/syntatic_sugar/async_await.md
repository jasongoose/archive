# async, await

`async` 함수는 `Promise` 인스턴스를 반환합니다.

`async` 함수를 호출하여 연산 중간에 `await` 키워드를 만나면 `await` 뒤에 있는 `Promise` 인스턴스가 `settle` 될 때까지 해당 함수의 실행은 중지되는데,

**중지된다고 해서 전체 코드의 실행이 멈춘다는 의미가 절대 아닙니다!!**

`async` 함수가 중지되면 해당 함수를 호출했던 context로 pending Promise를 반환하여 기존 로직을 다시 실행합니다.

그러다가 중간에 `async` 함수 내의 `await` 문에서 `settle` 된다면 다시 `async` 함수의 실행을 재개합니다.

즉, `await` 문에서 코드 실행 flow가 2가지로 나뉘는 것으로도 이해할 수 있습니다.
