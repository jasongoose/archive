# Truncating, Expanding Array

어떤 배열이 있을 때 앞에서 몇번째 원소까지만 필요한 경우, 보통 `Array.prototype.slice` 메서드로 shallow-copy를 만들면 됩니다.

원본 배열을 직접 접근하기에 권장되지는 않지만 더 간단한 방법으로 Array만이 가진 `length` 속성을 더 작게 수정하면 됩니다.

```js
const arr = [1, 2, 3, 4, 5];

arr.length = 3;

console.log(arr); // [1,2,3]
console.log(arr[4]); // undefined
```

반대로 기존 배열의 크기를 늘리고 싶다면 `length` 속성을 더 크게 수정하면 됩니다.

```js
const arr = [1, 2];

arr.length = 4;

console.log(arr); // [1, 2, empty * 2] -> empty slot 2개 추가
console.log(arr[4]); // undefined
```
