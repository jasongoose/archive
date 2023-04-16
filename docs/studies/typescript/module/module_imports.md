# Module Imports

## Relative Import

프로젝트 root에 대한 상대경로를 사용하고 모듈 이름이 `/` , `./` , `../` 로 시작합니다.

해당 모듈의 [ambient module](./ambient_modules.md) 선언은 참조할 수 없습니다.

```ts
import Entry from "./components/Entry";
import { DefaultHeaders } from "../constants/http";
import "/mod";
```

## Non-relative Import

`tsconfig.json` 파일의 `baseUrl` 필드값 기준 상대경로에 위치한 모듈을 참조하고, 해당 모듈의 [ambient module](./ambient_modules.md) 선언을 참조할 수 있습니다.

```ts
import * as $ from "jquery";
import { Component } from "@angular/core";
```
