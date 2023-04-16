# Grid

wrapper에서 grid의 형태(row별 길이/개수, column별 길이/개수, gap)를 잡으면 grid-child를 배치할 때,

(1) `grid-template-area`로 일일이 원하는 좌표에 직접 `grid-area` 값을 명시하거나

(2) grid-child별로 차지할 영역의 경계(grid-line)로 지정하거나

`grid-row`와 `grid-column`에 area의 범위를 지정할 때,

(1) end 라인 번호를 지정할 때는 우 => 좌 방향으로 마지막 grid-item의 오른쪽 라인부터 -1, -2, -3, ...으로도 명시하거나

(2) 특정 라인으로부터 얼마나 많은 cell을 차지하는지를 `span`으로 명시하거나

## fr(부분, 비율)

`grid-template-row/column`에서 row/column별 길이를 정적인 px값이 아니라 화면의 길이에서 차지하는 비율로 지정합니다.

- 단, fr을 `grid-template-row`에 적용할 때는 grid wrapper 높이가 지정되어 있어야 합니다.
- CSS에서 `width/height`를 지정하지 않을 때, `width`의 최대한 큰 값을 가지지만 `height`는 0이기 때문입니다.

## grid-template

=> `grid-area` + `grid-template-column` + `grid-template-row`

## justify/align-items

grid-cell(grid item)의 내부 contents의 배치 방식을 일괄적으로 적용할 때 사용합니다.

- `justify-items`와 `align-items`를 동시에 지정할 때는 `place-items`를 사용하면 됩니다.

## justify/align-content

grid 자체의 화면 상의 위치 또는 row/column별 공간 배치를 지정할 때 사용합니다.

- `justify-content`와 `align-content`를 동시에 지정할 때는 `place-content`를 사용하면 됩니다.

## justify/align-self

`align/justify-items`에 적용한 스타일 속성값을 grid-cell 개별적으로 적용할 때는 grid-child에 지정하면 됩니다.

- `justify-self`와 `align-self`를 동시에 지정할 때는 `place-self`를 사용하면 됩니다.

## grid-column/row-start/end

특정 grid-item의 row/column 상에서 차지하는 범위를 명시할 때 사용합니다.

- 1부터 시작하고 \*-end 값에 해당하는 row/column은 포함하지 않습니다.

## grid-auto-row/column

grid-cell의 총 개수가 렌더링할 데이터(?)의 개수보다 적을 때를 대비하여 자동으로 `grid-row` 또는 `grid-column`을 자동으로 추가합니다.

- 추가할 row/column의 길이를 지정해야 합니다.
  - grid overflow가 발생할 때 자동으로 column을 늘리려면 `grid-auto-flow`를 column으로 지정해야 합니다.
- `grid-auto-flow`는 grid-cell에 놓일 content의 순서방향(row/column)에도 영향을 줍니다.

## minmax(m, M)

grid-item의 row/column 최소/최대 길이를 지정할 때 사용합니다.

- `M`을 1fr로 지정하면 화면이 늘어날 때마다 유동적으로 길이가 변합니다.

## auto-fill

길이 또는 범위가 주어질 때, 화면 사이즈에 맞게 row/column들을 최대한 많이 만들어 채웁니다.

## auto-fit

현재 grid-item들을 row/column 방향으로 최대한 길이를 늘려서 row/column을 만듭니다.
