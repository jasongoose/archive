# Permutation, Combination

## 순열

길이가 n인 배열에서 r개의 요소를 차례대로 뽑아 새로운 배열을 만드는 모든 경우의 수들을 나열합니다.

### 구현코드

배열의 요소를 차례대로 하나씩 선택한 상태에서 선택하지 않은 요소들을 재귀적으로 순회하면 됩니다.

여기서 한번 재귀호출을 할 때마다 선택한 요소들을 누적해야 한다는 점에서 [DFS](./graph_search.md#dfs)와 동일합니다!

```js
const permutation = (arr, r) => {
  const visited = new Set();
  const ans = [];

  const calc = () => {
    if (visited.size === r) {
      ans.push([...visited]);
      return;
    }
    for (const el of arr) {
      if (visited.has(el)) {
        continue;
      }
      visited.add(el);
      calc();
      visited.delete(el);
    }
  };

  calc();

  return ans;
};
```

## 조합

길이가 n인 배열에서 r개의 요소를 뽑을 수 있는 경우의 수들을 나열한 것으로 순열과 다르게 요소들간의 순서를 고려하지 않습니다.

### 구현코드

순열과 동일하게 구현하되, 한번 재귀호출을 할 때마다 순회하는 범위를 다음 요소부터 시작하도록 좁혀야 합니다.

```js
const combination = (arr, r) => {
  const visited = new Set();
  const ans = [];

  const calc = (lastIndex = -1) => {
    if (visited.size === r) {
      ans.push([...visited]);
      return;
    }
    for (let i = lastIndex + 1; i < arr.length; i++) {
      visited.add(arr[i]);
      calc(i);
      visited.delete(arr[i]);
    }
  };

  calc();

  return ans;
};
```

:::tip bit
길이가 n인 배열에서 유한개의 요소들을 선택하는 것은 `[0, 2^n)`를 순회하면서 비트셋을 해석하는 방식으로도 해결할 수 있습니다.

비트연산 자체는 속도는 빠르지만 시간복잡도는 `O(2^N)`를 가진다는 단점은 있습니다;
:::

## 중복요소 또는 중복선택이 있는 순열과 조합

위 구현코드들은 중복요소가 없는 배열이 `arr` 인자로 전달되고 중복선택이 없는 상황을 가정하에 작성한겁니다.

만일 `arr` 인자로 중복요소가 있는 배열이 전달되거나 중복선택이 허용된다면 모든 경우의 수들을 나열했을 때, 중복되는 케이스들이 발생할 수 있습니다.

이 경우, `ans` 배열을 [Set](../../posts/javascript/data_structures/set.md)으로 전환하여 케이스별로 구분자가 있는 문자열들을 저장하도록 수정하면 됩니다.

### 순열

```js
const permutation = (arr, r) => {
  const visited = new Set();
  //   const ans = [];
  const ans = new Set();

  const calc = () => {
    if (visited.size === r) {
      //   ans.push([...visited]);
      ans.add([...visited].join(","));
      return;
    }
    for (const el of arr) {
      if (visited.has(el)) {
        continue;
      }
      visited.add(el);
      calc();
      visited.delete(el);
    }
  };

  calc();

  //   return ans;
  return [...ans].map((c) => c.split(","));
};
```

### 조합

```js
const combination = (arr, r) => {
  const visited = new Set();
  //   const ans = [];
  const ans = new Set();

  const calc = (lastIndex = -1) => {
    if (visited.size === r) {
      //   ans.push([...visited]);
      ans.add([...visited].join(","));
      return;
    }
    for (let i = lastIndex + 1; i < arr.length; i++) {
      visited.add(arr[i]);
      calc(i);
      visited.delete(arr[i]);
    }
  };

  calc();

  //   return ans;
  return [...ans].map((c) => c.split(","));
};
```

:::warning
단, 반환되는 케이스 내의 요소의 데이터 타입과 `arr` 인자 내의 요소의 데이터 타입이 다를 수도 있으므로 반환하기 전에 적절한 변환이 적용되어야 합니다.
:::
