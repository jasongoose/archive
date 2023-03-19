# Flexbox

main axis : `flex-direction`과 평행인 축

cross axis : `flex-direction`과 수직인 축

---

flex item별로 위치를 지정할 때는 `align-self`, `justify-self`를 사용하고 item 사이의 순서를 조정할 때는 `order`(정수)를 사용합니다.

---

`justify-*` : main axis 방향으로

`align-*` : cross axis 방향으로

`*-items` : 개별 item의 `*-self` 값을 통일하여 정렬합니다.

`*-content` : item(content) 간의 공간을 분배합니다.

`*-reverse` : 순서 + 방향 반대로

---

`wrap` : overflow가 일어날 때, flex item들의 길이를 유지합니다.

`nowrap` : overflow가 일어날 때, flex item들의 길이를 줄입니다.

---

`flex-shrink`(default 1) : available space가 없을 때, item별 영역이 줄어드는 비율

`flex-grow`(default 0) : available space가 있을 때, item별 영역이 늘어나는 비율

`flex-basis` : flex item의 grow, shrink가 적용되기 전 main axis 방향의 변의 길이

`flex-basis: auto;` : item의 width, height로 지정
