# Spread Syntax

```ts
type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U];

type Last<T extends any[]> = T extends [...unknown[], infer L] ? L : never;

type Pop<T extends any[]> = T extends [...infer R, unknown] ? R : never;

type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R
  ? (...args: [...P, A]) => R
  : never;
```
