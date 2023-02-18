# Computed Property

객체의 property로 접근하기 위한 key값은 굳이 상수일 필요는 없습니다.

```js
const user = {
  userName: "ehco",
  avatar: "echo.png",
  setUserName(userName) {
    this.userName = userName;
    return this;
  },
};

const key = "avatar";
console.log(user[key]); // "echo.png"
```

또한 객체를 생성하기 위한 key값도 상수일 필요는 없습니다.

```js
const arrToObj = ([key, value]) => ({ [key]: value });

console.log(arrToObj(["foo", "bar"])); // { "foo": "bar" }
```
