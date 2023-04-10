# Stack

하나의 index에 하나의 요소만이 존재하는 선형구조를 가집니다.

제일 마지막에 들어간 요소를 제일 먼저 뺄 수 있는 LIFO(Last In First Out) 특성을 가집니다.

## 구현코드

```js
const stack = () => {
  const arr = [];

  const push = arr.push;

  const pop = arr.pop;

  const getSize = () => arr.length;

  const getTop = () => arr.at(-1);

  return {
    push,
    pop,
    getSize,
    getTop,
  };
};
```

:::tip
Array.prototype.pop 메서드는 마지막 요소를 반환합니다!
:::
