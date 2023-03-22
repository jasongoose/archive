# How to check empty array?

변수에 할당된 값이 배열이 빈 배열인지 여부를 판별할 때는 2가지를 고려해야 합니다.

- `length` 속성이 존재하면서 값이 0인가?
- 확인할 대상이 유사배열객체가 아닌 `Array`의 인스턴스인가?

2가지 사항을 고려한 조건문은 다음과 같이 정리할 수 있습니다.

```js
const sampleArr = [ ... ];
if (sampleArr.length === 0 && Array.isArray(sampleArr)) {
	// ...
}
```
