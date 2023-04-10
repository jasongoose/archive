# Hash Table

key-value pair로 데이터를 저장할 수 있는 자료구조입니다.

key를 통해 value를 조회할 때, hash Fn에 의해서 key -> `number`형 hashCode로 변환이 일어나고 다시 value가 저장된 배열에서 사용할 index로 re-mapping됩니다.

:::tip
hash code를 그대로 index를 사용하지 않는 것은 hash code의 값이 실제 value들의 개수보다 훨씬 더 클 수도 있기 때문입니다.

그래서 hash code의 값을 value 배열들을 조회할 수 있는 범위로 줄이기 위해서 index로의 re-mapping이 필요합니다.
:::

서로 다른 key로부터 (1)동일한 hash code가 반환되거나 (2)전혀 다른 hash code가 나왔음에도 불구하고 동일한 index로 대응되는 충돌현상은 언제나 일어날 수 있습니다.

충돌이 일어난 경우, 보통 가능한 value들을 [linked list](./linked_list.md) 형태로 chaing하는 것으로 해결하면 됩니다.

chaining을 적용한다면 hash table로부터 value를 검색하는 연산의 시간 복잡도는 최소 `O(1)`, 최대 `O(N)`이 됩니다.

## 구현방법

```js
const hashTable = () => {
  const map = new Map();

  const search = map.get;

  const insert = map.set;

  const deleteData = map.delete;

  return {
    search,
    insert,
    deleteData,
  };
};
```
