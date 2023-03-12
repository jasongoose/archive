# computed

Vue3에서는 컴포넌트를 떠나 "다른 state에 의존하는 getter"를 단독적으로 구현할 수 있는 computed 함수를 제공합니다.

computed 함수의 정의는 다음과 같습니다.

```js
function computed(getter) {
  let result = ref();
  effect(() => (result.value = getter())); // --- (*)

  return result;
}
```

<!-- 위 코드의 3번째 줄에서 getter가 실행되면 getter의 정의에 포함된 1개 이상의 track 연산들이 수행되는데, track 연산이 수행된 property들의 dep에 activeEffect가 추가됩니다.

그 다음에 result라는 reactive reference에 값이 할당되면서 trigger가 발생합니다.

하지만 처음에는 result에 해당하는 depsMap이 없기 때문에 중간에 return하고 ref 내의 raw 인자의 값이 getter의 반환값으로 업데이트됩니다.

나중에 코드 상에서 computed의 value를 읽으면 result에 해당하는 depsMap과 dep이 생성되고 필요한 effect들이 저장됩니다.

computed가 의존하는(getter에 있던) reactive reference에 변화가 일어나면 result.value를 SET하는 trigger(`(*)`)가 발생하여 result 내부 raw 인자의 값이 업데이트되고 result dep에 저장된 모든 effect들이 새로운 raw 값을 기반으로 재실행되어 computed의 값이 달라집니다. -->

```js
let product = reactive({ price: 5, quantity: 2 })

let salePrice = computed(() => product.price * 0.9)
let total = computed(() => salePrice.value * product.quality))

console.log(`total: ${total}, salePrice: ${salePrice}`);
// total: 10, salePrice: 4.5

product.quantity = 3;
// 첫 번째 effect만 실행

console.log(`total: ${total}, salePrice: ${salePrice}`);
// total: 13.5, salePrice: 4.5

product.price = 10;
// 첫 번째, 두 번째 effect 실행

console.log(`total: ${total}, salePrice: ${salePrice}`);
// total: 27, salePrice: 9
```
