# XSS 예방하기

XSS 공격은 XSRF 공격과는 다르게 프런트 단에서 유효한 스크립트 코드를 판단하여 대응해야 합니다.

::: tip
XSS 공격은 HTTP 응답이나 URL query, fragment로 전달된 악성 스크립트가 `<script></script>` 태그로서 `.html`에 바로 삽입되는 것이 주원인입니다.

그럼 브라우저 단에서 HTTP 응답에 포함된 `<script></script>`를 비활성화시키면 문제를 해결할 수 있습니다.
:::

## XSS 필터링

`<script></script>`의 태그로서 기능을 가지지 않도록 HTML context 상의 특수문자들을 [HTML Entity](https://developer.mozilla.org/en-US/docs/Glossary/Entity)로 인코딩합니다.

```html
<!-- before -->
<script></script>

<!-- after -->
&lt;script&gt; &lt;/script&gt;
```

:::info HTML Entity
prefix로 `&`, postfix로 `;`를 가지는 string으로, HTML reserved character 또는 non-visible character를 HTML 태그 아닌 텍스트로서 표시하거나 키보드에 없는 문자를 표시할 때 사용합니다(© ⇒ `&copy;`).

| 문자 | HTML entity |               설명               |
| :--: | :---------: | :------------------------------: |
|  &   |   `&amp;`   |        html entity의 시작        |
|  <   |   `&lt;`    |         html tag의 시작          |
|  >   |   `&gt;`    |          html tag의 끝           |
|  “   |  `&quot;`   | html tag의 attribute의 시작과 끝 |

:::

:::info Unicode Escape
JS 코드 상에서 특수문자를 그저 문자로서, 또는 키보드로 표시할 수 없는 문자들을 사용하려면 escape 처리가 필요한데, back-slash(\) 뒤에 대응되는 문자가 위치합니다.

여기서 escape 처리가 된 결과물을 escape sequence라고 합니다.
<Image src="../_images/unicode-escape.png" alt="Unicode Escape" />

ES6에서 지원하는 escape 처리들은 다음과 같다.

- Hex escape(`\xHH`) : 2자리 16진수로 구성

```js
"\x7A" === "z"; // true
```

- Unicode escape(`\uHHHH`) : 4자리 16진수로 구성

```js
"\u007A" === "z"; // true
```

- Unicode code point escape(`\u{~}`) : 4자리 이상의 16진수로 구성

```js
"\u{7A}" === "z"; // true
```

여기서 escape 처리는 단순히 JS string이 아닌 변수명, 함수명 등의 코드 상에서 모든 문자들을 포괄해서 아래와 같은 코드도 작성할 수 있습니다.

```js
const az = 9;
console.log(az); // 9

console.log("\u{1F680}"); // 🚀
```

:::

## 사용자가 입력한 데이터 검증하기

사용자로부터 전달된 input 데이터의 유효성을 검증하여 무효하다면 요청을 차단합니다.

여기서 유효성을 검증할 때는 blacklisting보다는 whitelisting을 이용합니다([참고자료](https://www.packetlabs.net/posts/blacklisting-whitelisting-greylisting/)).

## 안전한 HTML 포스팅

블로그나 사이트에 HTML 또는 script 코드를 code snippet으로 포스팅하는 경우가 흔한데 여기에 악성코드가 전달되지 않도록 관리해야 합니다.

## template engine, framework 설정

다수 프런트엔드 프레임워크에서 동적으로 DOM tree를 구성할 수 있도록 template engine을 사용합니다.

XSS 공격을 막을 수 있도록 적절한 template engine의 설정이 필요합니다.

## CSP(Content Security Policy)

`Content-Security-Policy`라는 HTTP 응답 헤더에 값을 명시하여 브라우저가 받은 `index.html` 페이지로부터 요청할 수 있는 리소스의 URL의 종류 또는 해당 페이지가 iframe될 수 있는 parent page의 종류 등를 제한할 수 있습니다.

브라우저가 어떤 웹 페이지를 요청했는데 서버가 CSP header를 포함하여 운영지령(?)을 내리면 브라우저는 이 지령에 맞춰서 렌더링을 수행합니다.
