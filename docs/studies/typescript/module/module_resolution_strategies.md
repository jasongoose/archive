# Module Resolution Strategies

TS 모듈은 ESM syntax(`import`, `export`)를 사용합니다.

import할 파일은 `.ts`, `.d.ts`, `.js`가 가능하고 해당 파일은 (1)상대/절대경로 또는 (2)모듈이름으로 지정할 수 있습니다.

tsc가 모듈을 검색하는 과정을 module resolution strategy라고 부르고 크게 classic 방식과 node 방식으로 나뉩니다.

## Classic

backward compatability을 보장하고 `import` 구문에 주어진 이름과 `.ts`, `.d.ts` 확장자를 가진 파일을 검색합니다.

### relative import

현재 폴더에 대한 상대경로로 해석하고 해당 위치에 존재하는 `.ts`, `.d.ts` 파일을 참조합니다.

```ts
// relative import - Classic strategy
Import statement: import "./moduleB";
Import location: /root/src/folder/A.ts

1. /root/src/folder/moduleB.ts
2. /root/src/folder/moduleB.d.ts
```

### non-relative import

먼저 현재 폴더에서 찾아보고 없으면 상위 폴더를 차례대로 올라가면서 프로젝트 root까지 재귀적으로 검색하고, 없으면 에러를 던집니다.

```ts
// non-relative import - Classic strategy
Import statement: import 'package';
Import location: /root/dir/sub/example.ts

1. /root/src/folder/moduleB.ts
2. /root/src/folder/moduleB.d.ts
3. /root/src/moduleB.ts
4. /root/src/moduleB.d.ts
5. /root/moduleB.ts
6. /root/moduleB.d.ts
7. /moduleB.ts
8. /moduleB.d.ts

9. Error: Cannot find module
```

## Node

현재 대부분의 모듈들이 node package들이라서 대부분 이 방식을 선호합니다.

### relative import

`import` 구문에 상대/절대경로가 명시되어 있으면 tsc는 해당 경로의 마지막 폴더로부터 주어진 이름과 `.ts`, `.d.ts` 확장자를 가진 파일을 검색합니다.

만일 일치하는 파일이 없고 주어진 이름이 폴더이름이라면 해당 폴더에 package.json 파일을 확인합니다.

있다면 package.json 파일의 `types` 필드에 적힌 경로를 가지는 파일들을 검색합니다.

package.json 파일과 `types` 필드가 없다면 해당 폴더로부터 `index.ts`, `index.d.ts` 파일을 검색합니다.

:::tip
`index.d.ts`, `index.ts` 파일이 default entry가 될 수 있는 이유가 여기에 있습니다.
:::

위의 경우에 모두 해당하지 않는다면 에러를 던집니다.

```ts
// relative import - Node strategy
Import statement: import '../program';
Import location: /root/dir/sub/example.ts

1. ../program.ts
2. ../program.d.ts
3. ../program/package.json -> [[types]] -> file path
4. ../program/index.ts
5. ../program/index.d.ts

6. Error: Cannot find module
```

### non-relative import

`import` 구문에 이름이 명시되어 있다면 tsc는 현재 폴더에서 `node_modules` 폴더를 찾기 위해 위 과정을 그대로 수행합니다.

없다면 상위 폴더에서 `node_modules` 폴더를 찾아보는 행위를 재귀적으로 반복합니다.

```ts
// non-relative import - Node strategy
Import statement: import 'package';
Import location: /root/dir/sub/example.ts

1. /root/dir/sub/node_modules/package.ts
2. /root/dir/sub/node_modules/package.d.ts
3. /root/dir/sub/node_modules/package/package.json -> [[types]] ->
4. /root/dir/sub/node_modules/package/index.ts
5. /root/dir/sub/node_modules/package/index.d.ts

6. /root/dir/node_modules/package.ts
7. /root/dir/node_modules/package.d.ts
8. /root/dir/node_modules/package/package.json -> [[types]] ->
9. /root/dir/node_modules/package/index.ts
10. /root/dir/node_modules/package/index.d.ts

11. /root/node_modules/package.ts
12. /root/node_modules/package.d.ts
13. /root/node_modules/package/package.json -> [[types]] ->
14. /root/node_modules/package/index.ts
15. /root/node_modules/package/index.d.ts

16. Error: Cannot find module
```

## 그 외

위 두 방식은 tsconfig.json의 `moduleResolution` 필드로 설정할 수 있지만, 아래와 같은 필드로도 module resolution 방식을 지정할 수 있습니다.

### baseUrl

[non-relative-import](./module_imports.md#non-relative-import)의 상대경로 기준이 되는 URL을 지정합니다.

이 때, tsconfig.json 파일에 대한 상대경로여야 합니다.

### paths

`tsconfig.json` 의 `baseUrl` 필드값이 지정된 경우에만 사용할 수 있습니다.

특정 module을 import할 때 최종적으로 참조할 파일을 `baseUrl` 에 대한 상대경로로 지정합니다.

```json
{
  "compilerOptions": {
    "baseUrl": ".", // This must be specified if "paths" is.
    "paths": {
      "jquery": ["node_modules/jquery/dist/jquery"] // This mapping is relative to "baseUrl"
    }
  }
}
```

```ts
import A from "jquery";
// import A from "/node_modules/jquery/dist/jquery"
```

### rootDirs

프로젝트 root를 여러 개로 지정할 때 사용합니다.

```json
{
  "compilerOptions": {
    "rootDirs": ["src/views", "generated/templates/views"]
  }
}
```

```text
src
 └── views
     └── view1.ts (can import "./template1", "./view2`)
     └── view2.ts (can import "./template1", "./view1`)

 generated
 └── templates
         └── views
             └── template1.ts (can import "./view1", "./view2")
```
