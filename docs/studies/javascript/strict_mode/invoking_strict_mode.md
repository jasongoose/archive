# Invoking Strice Mode

Strict Mode는 전체 스크립트 코드나 개별 함수 범위에 적용할 수 있습니다.

## scripts

전체 코드에 적용하려면 상단에 다음과 같은 구문을 작성합니다.

```js
// Whole-script strict mode syntax
"use strict";
var v = "Hi! I'm a strict mode script!";
```

## functions

함수 내부에 적용하려면 다음과 같이 작성합니다.

```js
function strict() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() {
  return "I'm not strict.";
}
```

## modules

ES2015에 소개된 module의 경우, 전체 코드가 자동적으로 Strict Mode가 적용됩니다.

## classes

ES2015에 소개된 Class defintion, Class expression을 포함한 모든 코드에 자동적으로 Strict Mode가 적용됩니다.
