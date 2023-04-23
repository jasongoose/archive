# `v-click-outside` directive 만들어보기

사용자가 `<input />`에 입력하면 하단에 검색결과 리스트가 길게 나타나는데, 리스트를 제외한 나머지 영역을 클릭해도 리스트가 닫히지 않는 이슈가 QA 중에 올라온 적이 있었습니다.

기존 마크업 범위에서는 처리하기 어렵다고 판단하여 임의의 Element가 외부 `click` 이벤트를 감지하기 위한 directive를 만들어서 해결했습니다.

```html
<!-- 검색리스트 마크업 -->
<div class="u-search-list-area" :class="{ 'is-active': isActive }">
  <ul class="u-search-list">
    <li v-if="!searchList.length">
      <a @click.prevent="isActive = false">검색결과가 없습니다.</a>
    </li>
    <li v-for="item in searchList" :key="item.gcateCd">
      <a @click.prevent="onClickGroupItem(item)">
        {{ `${item.gcateNm} (${item.gcateCd})` }}
      </a>
    </li>
  </ul>
</div>
```

## 구현코드

```ts
import { DirectiveOptions } from "vue";

interface ExtendedHTMLElement extends HTMLElement {
  onClickOutside: (event: Event) => void;
}

const clickOutside: DirectiveOptions = {
  bind(el, binding, vnode) {
    const extEl = el as ExtendedHTMLElement;
    const cb = binding.value;

    extEl.onClickOutside = (event) => {
      const isEventFromUpper =
        extEl !== event.target && !extEl.contains(event.target as Node);
      isEventFromUpper && cb instanceof Function && cb();
    };

    document.addEventListener("click", extEl.onClickOutside);
  },
  unbind(el, binding, vnode) {
    const extEl = el as ExtendedHTMLElement;
    document.removeEventListener("click", extEl.onClickOutside);
  },
};

export default clickOutSide;
```

## 세부설명

### directive의 역할

directive가 수행하는 작업은 다음과 같습니다.

1. Element에 bind되면 DOM 트리의 최상위 `document` node에서 `click` 이벤트를 감지하도록 event handler를 추가합니다.
2. bind 단계 이후에 Element의 외부에서 발생한 `click` 이벤트들에 한해서 directive의 value로 전달된 콜백함수를 실행합니다.
3. Element로부터 unbind되면 bind 단계에서 `document` node에 추가했던 event handler를 제거합니다.

### 외부 event의 조건

Element 외부에서 발생한 event는 아래 2가지 조건들을 만족해야 합니다.

- bind된 Element 자체에서 발생하지 않은 event여야 한다.
- bind된 Element의 상위 node에서 발생한 event여야 한다.

위 두 조건들을 만족하면서 directive의 value가 함수인 경우에만 콜백함수가 실행됩니다.

### el의 메서드 지정

`click` 이벤트 핸들러를 따로 정의하지 않고 Element의 메서드로 지정한 이유는 block 단위로 분리된 `bind`, `unbind` hook에서 동일한 함수를 참조하기 위해서 입니다.

두 hook의 `el` 인자로 동일한 Element를 참조하기 때문에 `bind` 단계에서 `el`에 메서드를 추가하면 `unbind` 단계에서도 해당 메서드를 사용할 수 있습니다.

### `ExtendedHTMLElement` 정의

원래 `el`의 타입(interface)은 `HTMLElement`인데, 기존 `HTMLElement`는 `onClickOutside`라는 메서드가 없으므로 확장된 interface인 `ExtendedHTMLElement`를 따로 정의해서 사용했습니다.

## 적용 후

```vue
<template>
  <div
    v-click-outside
    class="u-search-list-area"
    :class="{ 'is-active': isActive }"
  >
    <!-- 생략 -->
  </div>
</template>
<script lang="ts">
import { clickOutside } from "@/utils/directives";

@Component({
  // ...
  directives: {
    "click-outside": clickOutside,
  },
})
export default class Search extends Vue {
  // ...
  onClickOutside() {
    this.isActive = false;
  }
  // ...
}
</script>
```

## 참고자료

[Custom Directives](https://v2.vuejs.org/v2/guide/custom-directive.html)

[Detect click outside element](https://stackoverflow.com/questions/36170425/detect-click-outside-element)
