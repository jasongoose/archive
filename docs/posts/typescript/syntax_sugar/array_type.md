# Array Type

Array 내 element-wise 접근은 Indexed Access Type을 사용하면 됩니다.

```ts
const a = [1, "a", Promise.resolve(0)] as const;
type Ta = typeof a;
type TaEl = Ta[number]; // 1 | 'a' | Promise<number>

type Tb = [1, "a"];
type TbEl = Tb[number]; // 1 | 'a'

type TbObj = { [K in keyof Tb]: Tb[K] };

type IsArrExtendsObj = Tb extends TbObj ? true : false; // true
type IsObjExtendsArr = TbObj extends Tb ? true : false; // true
```
