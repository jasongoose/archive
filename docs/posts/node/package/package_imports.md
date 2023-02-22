# Package Imports

`imports` 필드를 지정하면 package exports와는 반대로 내가 개발하고 있는 현재 패키지에서 node_modules에 있는 다른 패키지들을 import할 때 사용할 abbreviation을 지정할 수 있다.

다음과 같이 package.json을 작성하면...

```json
{
  "imports": {
    "#some-pkg": {
      "node": "some-pkg-node-native",
      "default": "./polyfills/some-pkg-polyfill.js"
    }
  },
  "dependencies": {
    "some-pkg-node-native": "^1.2.3"
  }
}
```

Node 환경에서 `#some-pkg`는 `some-pkg-node-native` 패키지를, Node가 아닌 다른 환경에서는 `./polyfills/some-pkg-polyfill.js` 파일을 가리킵니다.

package imports의 use-case들은 다음과 같습니다.

- 동일한 module specifier로 platform-specific 실행이 가능합니다.
- 패키지 내의 deeply nested module에 alias를 붙일 수 있습니다.
