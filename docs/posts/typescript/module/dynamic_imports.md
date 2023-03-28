# Dynamic Imports

## Module Caching

앱이 실행 중일 때 동일한 모듈이 다른 모듈들에 의해서 여러 번 import가 되는 경우, JS engine은 최초의 import 구문을 확인했을 때 import되는 모듈을 처음이자 마지막으로 초기화(메모리 한 공간에 모듈에 관한 정보를 저장)합니다.

그 뒤로 해당 모듈의 import가 발생할 때마다 초기화된 모듈을 참조합니다(caching).

이 방식은 모듈의 import로 일어나는 side-effect를 오직 한번만 만들 수 있다는 점에서 유용합니다.

## Import Position

`import` 구문은 모듈의 첫 번째 줄에 작성해야 합니다.

함수 블럭 내부나 조건문 블럭 내부에 작성하면 컴파일 에러가 발생합니다.

함수 안에 `import`를 사용하려면 import되는 모듈이 언제 초기화될지를 분석하는 control flow analysis가 tsc에 의해서 수행되어야 합니다.

## Module File Path

relative-import 방식에서 모듈의 path를 명시할 때는 compile-time constant string(tsc가 컴파일할 때 constant)여야 합니다.

즉, template literal, function call, string concatenation 방식으로 작성하면 안됩니다.

## Dynamic Loading

TS 모듈의 제일 윗줄에서 `import` 구문을 사용하는 방식 말고도 원하는 때와 위치에서 import할 수 있는 mechanism이 있는데 이를 "dynamic loading"이라고 합니다.

dynamic loading은 `import()` expression을 사용합니다.

인자로 import할 모듈의 상대/절대경로를 전달하면 유효할 경우 해당 경로를 가진 모듈의 [named export member](./module_standard.md#named-exports), [default export member](./module_standard.md#default-export)를 resolve하는 `Promise` 객체를 반환합니다.

유효하지 않은 경로라면 rejected `Promise`를 반환합니다.

```ts
function run() {
  import("path/to/values")
    .then((mod) => {
      console.log(mod.default); // default export
      console.log(mod.A); // named export
      console.log(mod.B); // named export
    })
    .catch((error) => {});
}

// 또는

async function run() {
  const mod = await import("path/to/values");
  console.log(mod.default);
  console.log(mod.A);
  console.log(mod.B);
}
```

`import()` expression의 인자인 모듈의 경로는 실행 중에 구체화되기 때문에 (1)반환값의 타입이 `string`인 함수나 (2)JS expression을 인자로 지정해도 됩니다.

하지만 `import()` expression의 인자를 (1), (2) 방식처럼 동적으로 전달하면 실행 중에 어떤 모듈이 import될지 예상할 수 없기 때문에 `import()` expression의 반환값은 `Promise<any>` 타입을 가집니다.

(1), (2)와 같이 동적으로 전달된 모듈들은 컴파일 과정에서 제외되기 때문에 tsconfig.json 파일에서 `files` 또는 `include` 필드를 사용하여 수동으로 포함시켜야 합니다.
