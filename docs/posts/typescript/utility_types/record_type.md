# Record Type

property key가 K, property value type은 T인 type O는 아래와 같이 생성할 수 있습니다.

```ts
type O = Record<K, T>;
/*
{
  [P in K]: T,
};
*/
```

conditional type에서 `object` type인지 여부를 확인할 때 유용합니다.

```ts
type X<T> = T extends Record<string, unknown> ? true : false;
```
