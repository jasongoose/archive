# Critical Rendering Path

브라우저가 HTML, CSS, JS 파일들을 화면에 표시하는 컨텐츠로 전환하는 과정입니다.

## Document Object Model

브라우저가 HTML, XML 문서 내의 태그(`<...></...>`)를 단일 객체로 처리하는 모델을 의미합니다.

여기서 이 객체를 node로 가지는 트리 데이터를 "DOM 트리" 라고 합니다.

![DOM](../image/dom.png)

DOM을 사용하면 프로그램(특히 JS)을 사용하여 동적으로 페이지를 조작할 수 있게 되는데, 브라우저는 아래와 같이 2가지 과정을 거쳐서 DOM tree를 생성합니다.

### Tokenization

브라우저의 HTML parser는 startTag(`<...>`), endTag(`</...>`), 태그 내부의 문자열, 주석들을 token 단위로 변환합니다.

연관된 token들을 pair로 묶으면 단일 node가 됩니다.

### Tree Construction

임의의 start/endTag token이 다른 start/endTag token 사이에 위치한다면 두 태그 간의 포함관계가 나타납니다.

이 성질을 이용하면 node간의 부모-자식관계를 하나의 link로 표현할 수 있고 모두 이어지면 DOM 트리가 생성됩니다.

브라우저가 parsing하는 중간에 `async` 또는 `defer` attribute이 없는 `<script src="" />`를 만나면 `src`에 명시한 실행파일을 요청하여 _동기적으로_ 처리 즉, 다운받고 모든 코드를 실행할 때까지 parsing을 중지합니다.

그래서 `<script />`의 개수가 많아질수록 렌더링 중 bottleneck이 되기 때문에 클라이언트에서 다운받을 파일의 개수를 줄이기 위한 번들링 과정이 필요합니다.

## CSS Object Model

`.css` 파일의 selector로 지정된 HTML 태그들을 단일 객체로 처리하는 모델을 의미합니다.

여기서 이 객체를 node로 가지면서 각 node에 적용할 스타일(`font`, `color`, `display`, ...) 정보를 가지는 트리 데이터를 "CSSOM 트리" 라고 합니다.

![CSSOM Tree](../image/cssom_tree.png)

처음에는 일반적인 스타일(class, id selector)부터 시작해서 더 구체적인 selector들을 기반하여 재귀적으로 스타일들을 개선하게 되는데, 이 부분에서 CSS의 cascading 성질을 알 수 있습니다.

브라우저는 HTML 파싱 중 `.css` 파일을 다운받을 때마다 비동기적으로 parsing하여 CSSOM 트리를 생성합니다.

여기서 DOM 트리가 생성된 상태라도 모든 CSSOM 트리가 만들어질 때까지 [render 트리](#render-tree)를 생성하는 단계로 넘어가지 않습니다.

::: info
굳이 blocking까지 하는 것은 overwriting 때문인데, 만일 각 node에 적용할 스타일들을 하나씩 적용할 때마다 화면을 그리게 되면 동일한 node에 다른 스타일이 적용될 때마다 다시 렌더링이 일어나야 합니다.
:::

::: tip
보통 selector 성능을 따지자면 덜 구체적인 selector가 더 구체적인 selector(nested node 같은)보다 처리속도가 훨씬 더 빠릅니다.

더 구체적인 selector 조건에 부합하는 node를 찾으려면 DOM 트리를 가로질러서 탐색해야 하는데, 사실 시간 상으로는 마이크로 초(us) 단위로 차이가 납니다.

따라서 `.css` 파일의 구체성(?)은 웹 페이지 성능 최적화에 미미한 영향을 줍니다.
:::

## Render Tree

DOM 트리와 CSSOM 트리가 결합한 트리로, 화면 상의 올바른 순서와 위치에 DOM node를 배치하기 위한 목적으로 생성됩니다.

![Render Tree](../image/render_tree.png)

render 트리의 node를 "frame" 또는 "render object" 라고 하는데, 이 객체에는 node의 width, height, position 등 CSS box 정보가 담겨있습니다.

viewport에 대응되는 `document` node가 render 트리의 root가 됩니다.

::: info
CSS Rule을 적용했을 때 화면에 보여지는 DOM node들만 render 트리에 포함됩니다.

예를 들어 style이 `{display: none;}`이거나 노드가 `<meta />`, `<link />`, `<script />` 라면, 해당 node와 그 후손 node들은 포함되지 않습니다.
:::

## Layout

render 트리의 node들을 화면에 어떻게 배치할지 결정하는 과정입니다.

![Layout](../image/layout.jpg)

배치할 때 고려할 점은 viewport의 크기로, 보통 node의 가로 길이는 관련 CSS rule이 없는 한 default로 부모 node의 가로 길이를 그대로 상속하고 세로 길이는 0을 가집니다.

::: tip
device에 따라서 viewport의 가로/세로 길이를 조정하고 싶으면 `<meta />`를 사용하면 됩니다.

모바일의 orientation 즉, portrait mode와 landscape mode에 따라 viewport를 지정할 때 유용합니다.

```html
<meta name="viewport" content="width=device-width" />
```

:::

### Bottleneck

DOM node의 개수가 많아질수록 layout을 완료하는데 시간이 더 걸리게 됩니다.

그래서 node가 많은 상태에서 animation이나 scroll event를 처리하면 짧은 시간동안 render 트리가 자주 생성되기 때문에 끊김현상을 볼 수 있습니다.

### Layout 계산

render 트리의 root에서 시작하여 부모 node가 layout 메서드를 호출하면 자식 node가 재귀적으로 호출하는 방식으로 수행됩니다.

이는 부모 node의 width, height의 정보는 누적된 자식 node들의 정보로부터 계산하여 얻을 수 있기 때문입니다.

### 종류

layout은 root로부터 시작하는 global layout과 서브트리에서 시작하는 incremental layout이 있습니다.

#### 1. Global Layout

다음과 같은 경우에 동기적으로 발생합니다.

- font 크기와 같이 모든 node에 영향이 가는 변화가 필요할 때
- 창 또는 탭의 크기를 바꿀 때

#### 2. Incremental Layout

기존 DOM 트리에 node를 추가하거나 삭제할 때, 해당 node의 후손, 조상 node들에 한해서만 비동기적으로 수행됩니다.

## Paint

render tree와 layout을 기반으로 화면에 컨텐츠를 픽셀 단위로 표시하는 작업입니다.

페이지가 최초로 viewport에 그려진 이후, 전체가 아닌 최소한의 영역에 대해서만 [repaint](reflow_repaint.md#repaint)가 일어납니다.

## Optimizing for CRP

CRP 최적화의 목적은 <ins>요청한 페이지의 컨텐츠를 최대한 빠르게 화면에 표시</ins>하는 것으로, 관련 tip들을 정리하면 다음과 같습니다.

- 중요한 리소스들의 다운로드를 미루거나(defer, lazy loading) 비동기적으로 처리하여 초기에 load할 리소스의 양을 줄인다.

- 요청할 리소스들의 개수 또는 개별 리소스의 크기를 줄인다.

- 필요한 asset들의 다운로드 우선순위를 정한다.
