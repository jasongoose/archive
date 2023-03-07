# Local Type Declaration

module들 사이에서는 `import`, `export` 구문들을 사용하여 type을 서로 사용할 수 있습니다.

`import` 구문을 사용하면 tsc는 `.ts`, `.js`(`allowJs` 옵션이 `true`라면) 뿐만 아니라 `.d.ts` 확장자를 가진 파일도 검색합니다.

```ts
// local-declaration.d.ts
export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// local-declaration-test.ts
import { Person } from "./local-declaration";

const ross: Person = {
  firstName: "Ross",
  lastName: "Geller",
  age: 29,
};
```

`.d.ts`에서 선언된 type은 `import` 구문 또는 triple slash directive(이 경우 global type + `export` statment 사용금지)를 사용하여 이용할 수 있습니다.

물론 tsc에 의해 컴파일된 `.js` 파일에는 type import 구문을 제거합니다.

```js
// local-declaration-test.js
"use strict";
exports.__esModule = true;
var ross = {
  firstName: "Ross",
  lastName: "Geller",
  age: 29,
};
```
