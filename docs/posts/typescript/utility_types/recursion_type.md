# Recursion Type

뭔가 재귀적인 type 관계가 보였을 때, 재귀함수로 구현하면 됩니다.

```ts
type Awaited<T> = T extends Promise<infer P>
  ? P extends Promise<infer U>
    ? Awaited<U>
    : P
  : T;
```
