# 반응형 배열 연산을 위한 hook 만들어보기

배열을 활용하는 작업들은 다양합니다.

- 배열 요소 추가
- 배열 요소 수정
- 특정 조건을 만족하는 첫번째 요소만 삭제
- 배열 요소 존재여부 확인
- 배열 요소를 다른 값으로 대체
- 특정 조건을 만족하는 요소들만 필터링
- 특정 조건을 만족하지 않는 요소들만 필터링
- 동일한 타입의 다른 배열과의 차집합 요소들만 필터링
- 동일한 타입의 다른 배열과의 교집합 요소들만 필터링
- ...

[Vue에서는 반응형 배열의 trigger를 일으키는 메서드들이 한정](https://vuejs.org/guide/essentials/list.html#array-change-detection)되어 있어서 위 작업들의 개별 구현방식이 반복되는 특징이 있습니다.

그래서 활용 빈도수가 높다는 점과 중복로직이 생길 수 있다는 점을 고려하여 타입 `T`인 객체 요소를 가지는 배열에 대한 연산들을 정의한 hook인 `useObjectArrayUtils`를 만들었습니다.

## 헤더

hook의 헤더 부분은 다음과 같습니다.

```ts
// useObejctArrayUtils.ts
export default <T, C extends keyof T = keyof T>(reactiveArr: Ref<T[]>) => {
  // 연산 구현부

  return {
    // ...
  };
};
```

이 함수는 generic 인자로 `T`와 `C`를 받고, 연산대상이 되는 반응형 배열을 `reactiveArr` 인자로 받습니다.

- `T` : `reactiveArr`의 요소 타입을 결정합니다.
- `C` : `reactiveArr`의 요소 ID이자 검색조건 역할을 가진 속성들을 union 타입으로 지정합니다.

## isMatchedWith / isDismatchedWith

`filter`, `splice`, `slice` 등의 배열 메서드들은 요소별로 확인할 로직을 가지면서 `boolean`형 값을 반환하는 콜백함수 predicate을 인자로 받습니다.

```ts
type Predicate<T extends unknown> = (el: T) => boolean;
```

`isMatchedWith`, `isDismatchedWith` 함수는 `reactiveArr`의 요소에서 수행할 predicate를 생성하는 고차함수입니다.

```ts
function isMatchedWith(cond: Pick<T, C>) {
  return (el: T) =>
    Object.entries(cond).reduce(
      (acc, [key, value]) => acc && el[key] === value,
      true
    );
}
```

```ts
function isDismatchedWith(cond: Pick<T, C>) {
  return (el: T) =>
    Object.entries(cond).reduce(
      (acc, [key, value]) => acc && el[key] !== value,
      true
    );
}
```

:::info
`Pick<T, C>` 타입을 가지는 매개변수 `cond`는 타입 `T`를 가지는 요소 `el`이 가져야할 key와 value들의 정보를 가진 객체입니다.
:::

## isIncluded / isExcluded

특정 조건을 만족하는 요소가 `reactiveArr`에 존재하는지 여부를 `boolean`형으로 반환하는 함수입니다.

```ts
function isIncluded(cond: Pick<T, C>) {
  return reactiveArr.value.some(isMatchedWith(cond));
}
```

```ts
function isExcluded(cond: Pick<T, C>) {
  return reactiveArr.value.every(isDismatchedWith(cond));
}
```

## replaceWith

특정 조건을 만족하는 첫번째 요소를 동일한 타입의 데이터(`item`)로 대체하는 함수입니다.

```ts
function replaceWith(cond: Pick<T, C>, item: T) {
  const idx = reactiveArr.value.findIndex(isMatchedWith(cond));
  ~idx & reactiveArr.value.splice(idx, 1, item);
}
```

### filterOnly / filterExcept

특정 조건을 만족 또는 불만족하는 요소들만 필터링한 shallow-copy 배열을 반환하는 함수입니다.

```ts
function filterOnly(cond: Pick<T, C>) {
  return reactiveArr.value.filter(isMatchedWith(cond));
}
```

```ts
function filterExcept(cond: Pick<T, C>) {
  return reactiveArr.value.filter(isDisMatchedWith(cond));
}
```

## removeOnly

특정 조건을 만족하는 첫번째 요소를 제거하는 함수입니다.

```ts
function removeOnly(cond: Pick<T, C>) {
  const idx = reactiveArr.value.findIndex(isMatchedWith(cond));
  ~idx && reactiveArr.value.splice(idx, 1);
}
```

## reverseDiffWith

타입 `T` 요소를 가진 다른 배열 `cmpArr`에서 `reactiveArr`에는 포함되지 않은 요소들만 필터링하는 함수입니다.

```ts
function reverseDiffWith(cmpArr: Ref<T[]> | T[]) {
  return unref(cmpArr).filter(isExcluded);
}
```

## intersectionWith

타입 `T` 요소를 가진 다른 배열 `cmpArr`에서 `reactiveArr`에도 포함된 공통 요소들만 필터링하는 함수입니다.

```ts
function intersectionWith(cmpArr: Ref<T[]> | T[]) {
  return unref(cmpArr).filter(isIncluded);
}
```
