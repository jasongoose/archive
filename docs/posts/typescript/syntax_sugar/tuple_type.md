# Tuple Type

TS에서 tuple 또는 array는 한가지 고유의 property 즉, `length`가 있습니다.

길이가 0인 empty tuple은 아래와 같이 확인할 수 있습니다.

```ts
type L<T> = T extends { length: 0 } ? true : false;
type R<T> = T extends Record<number, never> ? true : false;
```

tuple에 대한 conditional type은 다음과 같이 지정하면 됩니다.

```ts
type C<T> = T extends any[] ? true : false;
```

tuple 또는 array에는 요소의 개수(`length`)에 관한 정보가 있기 때문에 길이를 구하거나 개수를 셀 때 활용할 수 있습니다.

```ts
type LengthOfString<
  S extends string,
  T extends any[] = []
> = S extends `${infer H}${infer R}`
  ? LengthOfString<R, [H, ...T]>
  : T["length"];

type N = LengthOfString<"Hello world">; // 11
```

임의의 `string` type으로 `object` type을 만들 때 다음과 같이 작성하면 됩니다.

```ts
type TupleToNestedObject<T extends unknown[], U> = T extends [
  infer H,
  ...infer R
]
  ? { [K in H & string]: TupleToNestedObject<R, U> }
  : U;

type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
```
