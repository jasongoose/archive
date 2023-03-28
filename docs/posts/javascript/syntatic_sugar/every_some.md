# every, some

집합이론을 기반으로 두 메서드의 관계를 정리하면 다음과 같습니다.

```js
!array.some((x) => ... === ...)  <=>  array.every((x) => ... !== ...)
```

```js
array.some((x) => ... !== ...)  <=>  !array.every((x) => ... === ...)
```
