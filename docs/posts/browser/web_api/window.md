# Window

JS의 전역객체인 `window`는 현재 js 코드가 실행되고 있는 창이나 탭을 참조합니다.

MDN 공식문서를 보면 `Window` interface가 언급되는데 `window` 객체와의 관계를 다음과 같이 표현할 수 있습니다.

```js
console.assert(window instanceof Window);
```

그렇습니다.

사실 `Window` interface는 `window` 객체를 인스턴스로 생성하는 생성자입니다.😲

::: info
하나의 창에 여러 개의 탭이 있는 경우, 각 탭에서 실행되는 js 코드가 참조하는 `window` 객체는 모두 다릅니다.

:::