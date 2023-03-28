# for await-of

[for-of](for_of) 문의 asynchronous 버전으로, async iterable의 value들을 순회하기 위한 반복문입니다.

async iterable의 `[Symbol.asyncIterable]` 메서드는 settled promise를 생성하는 async iterator를 반환합니다.

순회할 때 `[Symbol.asyncIterable]` 메서드가 없다면 `[Symbol.asyncIterable]`을 대신 사용하는데, sync iterator의 `next`, `return`, `throw`로 반환되는 값들을 settled promise로 wrapping합니다.

기존 `for-of` 문과의 차이점들을 정리하면 다음과 같습니다.

1. `for await-of` 문은 sync, async iterable에 모두 사용할 수 있습니다.
2. `for await-of` 문은 모듈과 `async` 함수 내부에서만 사용할 수 있습니다.
3. promise들을 yield하는 iterable이라면 sync iterator는 promise 그대로, async iterator는 promise의 awaited value를 생성합니다.
4. `for await-of` 문은 variable의 이름을 "async"로 지정해도 되는데, `for-of`문은 불가합니다.

```js
for await (async of foo) {
  // ...
}
```

[여기서 순회하는 중에 throw되거나 rejected promise가 yield된다면 순회를 멈춘다는 점을 유의해야 합니다.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators)

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    throw 1; // <<
    yield 2;
    yield Promise.resolve(3);
    yield Promise.reject(4); // <<
    yield 5;
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    for await (const num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// caught 1
```
