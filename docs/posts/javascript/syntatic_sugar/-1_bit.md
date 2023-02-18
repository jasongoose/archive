# -1 bit

`String.prototype.indexOf` 메서드는 인자로 전달한 문자가 존재하지 않으면 -1을 반환합니다.

-1일 때 `false`가 나오도록 하고 싶다면 `bitwise NOT`(~) 연산자로 -1(all bit 1)을 숫자 0(all bit 0)으로 바꾸면 됩니다.

```js
return `${url}${~url.indexOf("?") ? "&" : "?"}${params}`;
```
