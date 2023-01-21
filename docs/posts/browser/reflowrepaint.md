# Reflow/paint

## Reflow

CRP(Critical Rendering Path)의 layout 단계에서 화면에 표시될(render tree에 있는) node들의 배치(사이즈, 위치)를 다시 계산하는 작업입니다.

보통 문서를 구성하는 node의 위치나 기하학적인 성질에 변화가 생겨서 페이지 전체 또는 일부분에 layout이 변했을 때 수행됩니다.

한 node에 reflow가 발생한다면 descendent + ancestor node들도 reflow의 대상이 됩니다.

reflow가 발생하는 원인들을 정리하면 다음과 같습니다.

- DOM manipulation(node 추가, 삭제, 수정)이 일어나는 모든 경우
- `"display: none;"`으로 DOM node를 숨기는 경우
- CSS animation
- font-style을 수정한 경우
- `.css`, `.sass` 같은 style sheet를 추가, 삭제한 경우

::: tip
reflow를 줄이기 위한 방법들은 다양해서 관련 문서들을 대신 공유드립니다😁

[📜 reflow를 일으키는 css 속성들](https://devhints.io/layout-thrashing)

[📜 reflow를 줄이는 방법들](https://zinee-world.tistory.com/295)

[📜 css 속성별 trigger 연산들](https://csstriggers.com/)
:::

## Repaint

이전 Render tree를 기반으로 다시 paint하는 작업으로, 보통 reflow를 따라서 저절로 수행됩니다.

repaint는 화면을 구성하는 요소의 layout을 제외한 시각적인 스타일(`background-color`, `outline`, `visibility` 등)에 변화가 생겼을 때 일어납니다.

paint를 하는데 걸리는 시간은 Render tree에 적용된 업데이트(node 개수, 스타일 등)에 따라 달라지지만 작업 자체가 굉장히 빠르기 때문에 CRP 최적화에 많은 영향을 주지는 않습니다.
