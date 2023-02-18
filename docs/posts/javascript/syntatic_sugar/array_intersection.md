# Array Intersection

두 배열 arrX, arrY가 있을 때 arrX를 기준으로 arrY에도 있는 요소들을 필터링 하는 함수를 다음과 같이 구현할 수 있습니다.

```js
function intersect(arrX, arrY) {
  return arrX.filter(Set.prototype.has, new Set(arrY));
}
// filter의 2번째 인자는 filter callbackFn의 this로 참조된다.
```

위 코드는 아래 코드로도 작성할 수 있습니다.

```js
function intersect(arrX, arrY) {
  const setY = new Set(arrY);
  return arrX.filter((el) => setY.has(el));
}
```
