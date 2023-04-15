# Queue

Stack과 마찬가지로 하나의 index에 하나의 요소만이 존재하는 선형구조를 가집니다.

제일 먼저 들어간 요소를 제일 먼저 뺄 수 있는 FIFO(First In First Out) 특성을 가집니다.

## 구현코드

```js
const queue = () => {
  const arr = [];

  const enq = arr.push;

  const deq = arr.shift;

  const getSize = () => arr.length;

  const getHead = () => arr[0];

  const getTail = () => arr.at(-1);

  return {
    enq,
    deq,
    getSize,
    getHead,
    getTail,
  };
};
```

:::tip
Array.prototype.shift 메서드는 첫번째 요소를 반환합니다!
:::
