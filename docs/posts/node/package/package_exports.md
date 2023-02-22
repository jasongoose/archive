# Package Exports

package.json 파일의 `exports` 필드를 지정하면 패키지 내의 모듈들을 import할 때 제한된 specifier들만 사용할 수 있습니다.

파일 확장자까지 표시하는 대신 custom bare specifier를 지정하여 가독성을 높이고 import하는 모듈의 absolute path를 숨길 수 있습니다.

즉, `exports`는 내가 만들고 있는 현재 패키지가 다른 프로젝트에서 사용될 때 import 구문에 지정할 수 있는 specifier들을 나열한겁니다.

## Configuring which file represents the package

아래와 같이 package.json을 작성하면...

```json
{
  "main": "./dist/src/main.js",
  "exports": {
    ".": "./dist/src/main.js"
  }
}
```

다음과 같은 import가 가능합니다. 즉, custom bare specifier의 기준이 되는 파일경로를 지정할 수 있습니다.

```js
// import {someFunction} from my-lib/dist/src/main.js
import { someFunction } from "my-lib";
```

## Mapping extension-less subpaths to module files

아래와 같이 package.json을 작성하면...

```json
{
  "exports": {
    "./util": "./dist/src/util/errors.js"
  }
}
```

다음과 같이 뒤에 확장자가 붙지 않는 subpath를 module 파일로 대응시켜서 import 됩니다.

```js
// import {UserError} from 'my-lib/dist/src/util/errors.js';
import { UserError } from "my-lib/util";
```

## Exporting files anywhere inside a directory without filename extensions

아래와 같이 package.json을 작성하면...

```json
{
  "exports": {
    "./lib/*": "./dist/src/*.js"
  }
}
```

하나의 entry를 통해서 여러 개의 mapping을 만들 수 있습니다.

```js
// import {someFunction} from 'my-lib/dist/src/main.js';
import { someFunction } from "my-lib/lib/main";

// import {UserError} from 'my-lib/dist/src/util/errors.js';
import { UserError } from "my-lib/lib/util/errors";
```

여기서 ‘\*’(asterisk)는 단순히 하나의 파일이름만을 가리키는 것이 아니라 더 긴 실제 path를 가리킵니다.

만일 부분적으로만 path를 노출하기 위해서는 다음과 같이 패턴에 맞게 `null`을 지정하면 됩니다.

```json
{
  "exports": {
    "./*": "./dist/src/*.js",
    "./internal/*": null
  }
}
```

```js
import { someFunction } from "my-lib/internal/abc";
// no imports~
```

## Conditional package exports

아래와 같이 package.json 파일을 작성하면 런타임 환경에 따라서 다른 path를 지정할 수 있습니다.

```json
{
  "exports": {
    ".": {
      "node": "./main-node.js",
      "browser": "./main-browser.js",
      "default": "./main-browser.js"
    }
  }
}
```

또는 개발환경에 따라서도 지정할 수 있습니다.

```json
{
  "exports": {
    ".": {
      "development": "./main-development.js",
      "production": "./main-production.js"
    }
  }
}
```

:::tip
Node.js에서 개발환경 설정은 다음과 같은 CLI로 가능합니다.

```bash
node --conditions development app.mjs
```

:::
