# for

JS 반복문들 중 하나로 `;`로 구분되는 3개의 option expression으로 구성되고 loop 상에서 block statement에 있는 로직을 수행합니다.

```js
for ([initialization]; [condition]; [final_expression]) {
  statement;
}

// initialization
// loop를 실행하기 전에 var 또는 let으로 선언된 변수에 초기값을 할당합니다.

// condition
// loop를 실행할지 여부를 판별하기 위한 조건식이 위치합니다.
// (omitted), true -> statement 수행
// false -> statment는 skip하고 final expression으로 이동

// final_expression
// 현재 loop를 종료하고 나서 마무리로 수행하는 expression이 위치합니다.

// statement
// condition에서 true로 판정되었을 때 수행할 로직이 위치합니다.
```

`var`로 선언된 변수는 for 문과 동일한 scope를, `let`으로 선언된 변수는 block statement와 동일한 scope를 가집니다.

```js
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
// let은 불가~
```

iterate 중간에 break가 가능한 것은 for 문만의 특징으로 볼 수 있습니다.

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // more statements
}
```

for 문으로 infinite loop도 간단하게 만들 수 있습니다.

```js
for (;;) {
  // ...
}
```
