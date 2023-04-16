# Filter Falsy Values

JS 배열 내에서 `null`, `undefined` 같은 falsy value들을 필터링할 때는 항상 아래와 같이 써왔습니다.

```js
const filtered = array.filter((x) => !!x);
```

하지만 `Boolean` 생성자를 함수로 사용하면 훨씬 더 간결하게 작성할 수 있습니다.

```js
const array = [{ good }, null, { great }, undefined];

const truthyArray = array.filter(Boolean);
// truthyArray = [{ good }, { great }]
```
