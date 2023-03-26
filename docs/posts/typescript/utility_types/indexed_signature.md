# Index Signature

Mapped type에서 사전에 정의되지 않은 property type을 표시할 때는 index signature를 사용합니다.

사전에 정의되지 않았기 때문에 해당 property는 `string` type을 extend하지 않는 성질이 있습니다.

이 성질을 이용하면 `object` type으로부터 index signature를 제거하는 generic type을 아래와 같이 만들 수 있습니다.

```ts
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer P}` ? P : never]: T[K];
};

type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
```
