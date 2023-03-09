# Type Assertion

## Non-null operator !

TS의 모든 변수 뒤에 `!`를 붙이면 해당 타입은 `null`이나 `undefined`가 아님을 tsc에 알려주는 구문입니다.

정말로 `null`, `undefined`가 아니라는 확신이 있을 경우에만 사용해야 합니다.

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

## as const

속성, 요소, 변수의 타입을 literal type으로 지정할 때 사용합니다.

```ts
// Type '"hello"'
let x = "hello" as const;

// Type 'readonly [10, 20]'
let y = [10, 20] as const;

// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
```
