# Don’t use AWAIT inside FOREACH

`Array.prototype.forEach`의 callback은 sync 함수이기 때문에 비동기 작업들의 결과물을 실행한 순서대로 받기 위한 작업에는 적합하지 않습니다.

대신 아래와 같은 방법으로 구현할 수 있습니다.

- `Promise.all` 메서드
- `for`, `for-of` 같은 loop
- `Array.prototype.map`, `Array.prototype.reduce`

## 참고자료

[Don’t use AWAIT inside FOREACH](https://medium.com/@shriharimohan/%EF%B8%8F-dont-use-await-inside-foreach-271e08a68643)
