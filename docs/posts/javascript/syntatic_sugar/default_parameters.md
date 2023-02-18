# Default Parameters

ES6 이후부터 함수의 인자를 전달하지 않았을 때, 기본적으로 지정할 값을 전달할 수 있습니다.

여기서 인자의 타입이 객체인 경우에는 다음과 같이 빈 객체를 전달하여 작성할 수 있습니다.

```js
const createUser = ({ userName = "Anonymous", avatar = "anon.png" } = {}) => ({
  userName,
  avatar,
});

console.log(
  // { userName: "echo", avatar: 'anon.png' }
  createUser({ userName: "echo" }),
  // { userName: "Anonymous", avatar: 'anon.png' }
  createUser()
);
```
