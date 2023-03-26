# Template Literal Type

JS의 template literal syntax를 이용하면 기존 type의 정보를 기반으로 새로운 `string`형 type을 정의할 수 있습니다.

```ts
type World = "world";

type Greeting = `hello ${World}`;
// type Greeting = "hello world"
```

interpolation(`${...}`) 위치에 union type을 사용하면 union member마다 적용됩니다.

```ts
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
/*
type AllLocaleIDs = 
| "welcome_email_id" 
| "email_heading_id"
| "footer_title_id" 
| "footer_sendoff_id"
*/
```

## String Unions In Types

특정 객체를 전달하면 객체에 `on(eventName: ‘${key}Changed’, cb: (newValue: any) ⇒ void)` 타입의 메서드를 추가하는 함수 `makeWatchedObject`를 만든다고 합시다.

```ts
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

person.on("firstNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
```

template literal type을 사용하면 다음과 같이 함수의 타입을 정의할 수 있습니다.

```ts
type PropEventSource<Type> = {
  on(
    eventName: `${string & keyof Type}Changed`,
    cb: (newValue: any) => void
  ): void;
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>;
```

위의 예시에서 `cb`의 인자는 그저 `any`로 되어있는데, 아래와 generic을 추가하면 객체의 특정 key에 대한 value의 type을 지정할 수 있습니다.

```ts
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};
```

## Intrinsic String Manipulation Types

tsc의 built-in type들 중, `string` type을 수정할 수 있는 generic type들을 정리하면 다음과 같습니다.

### UpperCase

모든 문자를 대문자로 만듭니다.

```ts
type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>;
// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<"my_app">;
// type MainID = "ID-MY_APP"
```

### LowerCase

모든 문자를 소문자로 만듭니다.

```ts
type Greeting = "Hello, world";
type QuietGreeting = Lowercase<Greeting>;
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`;
type MainID = ASCIICacheKey<"MY_APP">;
// type MainID = "id-my_app"
```

### Capitalize

첫번째 문자만 대문자로 만듭니다.

```ts
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"
```

### Uncapitalize

첫번째 문자만 소문자로 만든다.

```ts
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"
```

## String Type 분해

`infer` 키워드를 사용하여 기존 string literal을 문자가 아닌 `string` 단위로 분해할 수 있습니다.

```ts
type S = "abcdefg";

type X = a extends `${infer F}${infer R}` ? F : a; // type aa = 'a'
type Y = a extends `${infer F}${infer R}` ? R : a; // type bb = 'bcdefg'
```

:::tip
참고로, empty string type(`’’`)은 template literal로 분해할 수 없습니다.

```ts
type E = "" extends `${infer H}${infer R}` ? true : false; // false
```

:::
