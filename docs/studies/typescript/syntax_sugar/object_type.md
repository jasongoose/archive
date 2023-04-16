# Object Type

비어있는 객체(`{}`)의 type은 다음과 같이 확인할 수 있습니다.

```ts
type IsEmpty<T> = T extends Record<string, never> ? true : false;
```

객체의 특정 property type을 제거할 때는 `never`로 지정하면 됩니다.

```ts
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer P}` ? P : never]: T[K];
};
```
