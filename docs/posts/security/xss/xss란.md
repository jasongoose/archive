# XSS란

Cross-Site Scripting의 약자로, CSRF와 반대로 사용자가 특정 웹 사이트를 신뢰한다는 점을 노린 공격입니다.

브라우저가 특정 웹 사이트(서버)로부터 전송된 응답의 신뢰성을 의심할 수 없는 웹 취약점이 주원인입니다.

보통 사용자가 신뢰하는 사이트로부터 돌아온 응답에 내재된 악성 코드를 검증하지 않은 채 브라우저가 실행하여 쿠키, 세션 토큰 같은 개인정보를 탈취(Session Hijacking)하거나 사이트의 DOM tree 구조를 망가뜨립니다.

XSS 공격에 사용되는 악성 코드는 JS, HTML 등과 같이 브라우저에 의해서 실행되거나 파싱되는 언어로 작성됩니다.

## Reflected(non-persistent) attack

가장 흔한 공격형태로, 사용자가 `<form />`에 데이터를 담은 요청을 서버에 전송하면 그대로 응답 데이터로 직접 전달되어 아무런 처리없이 렌더링되는 웹사이트에서 주로 발생합니다.

### 예시

사용자가 입력한 message가 아래와 같은 요청을 생성하여 전달하면 그대로 `<p></p>` 안에 렌더링되는 페이지가 있다고 합시다.

```html
<!--https://insecure-website.com/status?message=All+is+well.-->
<p>Status: All is well.</p>
```

그렇다면 message로 `<script>...</script>` 가 포함된 악성 스크립트를 전달할 수 있습니다.

```html
<!--https://insecure-website.com/status?message=<script>/*+Bad+stuff+here...+*/</script>-->
<p>
  Status:
  <script>
    /* Bad stuff here... */
  </script>
</p>
```

그럼 공격자는 이제 활성화된 세션이 있는 희생자에게 위와 같은 URL로 요청하도록 이메일이나 SNS 등으로 링크를 전달할 것이고, 사용자가 이 링크를 클릭하면 렌더링 중 악성 스크립트 파싱 및 실행으로 공격이 시작됩니다.

Chrome이나 Safari 등 현대 브라우저들은 Reflected-XSS 공격에 대응하기 위한 보안기능이 내장되어 있습니다.

## Stored(persistent) attack

주입된 코드를 서버(또는 DB, 게시판 등)에 영구적으로 저장하여 서버가 수신한 요청마다 악성 스크립트를 포함한 응답을 브라우저로 전송하는 방식입니다.

사용자의 입력값이 검증되지 않은 채 바로 DB에 저장하는 사이트에서 발생할 수 있습니다.

<Image src="../_images/xss-stored-attack.png" alt="Stored Attack"/>

## DOM-based attack

Reflected, Stored 방식은 악성코드(attacker's payload)가 HTTP 응답에 담겨져서 전달된다는 공통특성이 있습니다.

반면 DOM-based 방식에서 악성코드는 요청 URL의 query 또는 fragment로 전달됩니다.

### 예시

```html
Select your language:

<select>
  <script>
    document.write(
      "<option value=1>" +
        decodeURIComponent(
          document.location.href.substring(
            document.location.href.indexOf("default=") + 8
          )
        ) +
        "</option>"
    );
    document.write("<option value=2>English</option>");
  </script>
</select>
```

위 HTML 문서의 요청 URL이 `http://www.some.site/page.html?default=French`라면 렌더링되는 페이지는 아래와 같습니다.

```html
Select your language:

<select>
  <option value="1">French</option>
  <option value="2">English</option>
</select>
```

그렇다면 default라는 URL 파라미터로 다음과 같이 payload를 전달할 수도 있습니다.

```text
http://www.some.site/page.html?default=<script>alert(document.cookie)</script>
```

그럼 script문 파싱 및 실행으로 브라우저에는 다음과 같이 쿠키 값이 노출된 페이지가 렌더링됩니다.

```html
Select your language:

<select>
  <option value="1">YOUR COOKIE IS EXPOSED!!!!</option>
  <option value="2">English</option>
</select>
```
