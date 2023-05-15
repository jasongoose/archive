# Stack

하나의 index에 하나의 요소만이 존재하는 선형구조를 가집니다.

제일 마지막에 들어간 요소를 제일 먼저 뺄 수 있는 LIFO(Last In First Out) 특성을 가집니다.

보통 인접한 요소간의 관계를 이용하거나 역순으로 나열할 때 유용합니다.

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

## 응용

1. 뒤집은 문자열

```js
const reversed = (str) => {
  const st = [];
  for (const c of str) {
    st.push(c);
  }

  let ans = "";
  while (st.length) {
    ans += st.pop();
  }

  return ans;
};
```
