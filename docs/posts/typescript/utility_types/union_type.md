# Union Type

union type을 인자로 받는 type 연산들은 union member마다 적용된다는 점에서 `Array.protoType.forEach` 메서드와 비슷한데, 이러한 성격을 distributive type이라고 합니다.

literal union type에 `in` 키워드를 사용하면 구성 type에 접근할 수 있습니다.

```ts
type K = "hello" | "world";
type O = {
  [T in K]: string;
};
// {
//   hello: string;
//   world: string;
// }
```

`extends` 키워드에서 자주 사용됩니다.

```ts
type a = "a";
type b = "a" | "b" | "c";

type c = a extends b ? true : false; // true
```
