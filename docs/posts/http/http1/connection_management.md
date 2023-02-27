# Connections Management

<Image src="../_images/connection_management.png" alt="Connection Management"/>

## Short-lived

`HTTP/1.0` 에서 따랐던 connection model로 아래와 같은 특징들이 있습니다.

- 단일 TCP connection 내에서는 오직 1쌍의 HTTP request, response만이 가능하다.
- 클라이언트에서 HTTP request를 전송하기 전에 cold TCP connection을 생성해야 한다.
- 서버로부터 response가 오면 TCP connection은 사라진다.

하지만 위 방식은 다음과 같은 문제들이 있습니다.

- TCP connection을 생성하기 위해 4계층에서 수행하는 3-way handshake는 시간적 비용이 드는 연산이다.
- TCP는 warm connection에서 성능이 최적화되어 있기 때문에 전반적인 활용도가 떨어진다.

위 connection model은 HTTP 응답 message에 다음과 같은 헤더를 포함하여 구현할 수 있습니다.

```bash
Connection: close
```

## Persistent

기존 `HTTP/1.0` 의 short-lived connection 방식의 문제점들을 해결하고자 지정된 시간동안 connection을 그대로 유지하는 방식이 명세에 추가되었습니다.

유지된 connection 내에서는 클라이언트와 서버 간의 request와 response를 **반양방향적으로** 여러 번 주고받을 수 있어서 매 요청마다 3-way connection을 생성하지 않아도 되는 장점이 있습니다.

해당 방식을 구현할 때는 HTTP 응답 message에 아래와 같은 헤더를 추가하면 됩니다.

```bash
Connection: Keep-Alive // 'close'가 아닌 값들 모두 가능
Keep-Alive: timeout=<timeoutValue>, max=<maximumValue>
```

::: tip
`HTTP/1.1`에서는 특별한 헤더없이 default로 persistent connection 방식을 따릅니다.
:::

하지만 위 방식은 connection 개수가 많아지면 다음과 같은 문제점을 가지게 됩니다.

- Dos 공격에 취약
  - TCP connection이 계속 유지되므로 언제 트랙픽이 과도하게 몰릴지 예측할 수 없다.
- 서버 리소스 낭비
  - 여러 클라이언트에서 persistent connection들을 유지한다면 주고받는 message가 없는 idle 상태여도 계속 서버 리소스를 소비하게 된다.

위 문제를 해결하기 위해서 브라우저별로 도메인당 동시 connection 개수가 제한됩니다.

## HTTP Pipelining

`HTTP/1.x` 에서는 임의의 HTTP request를 전송하려면 이전 request에 대한 response가 오류없이 도착해야 한다는 조건이 있습니다.

겉으로 보기에는 뭔가 안전해 보이지만 현재 request에 대한 처리시점이 이전 request의 처리시점에 의존적이라 상당한 네트워크 지연이 발생할 수 있다는 문제가 있습니다.

이 문제를 해결하고자 `HTTP/1.1`에서 [persistent connection](#persistent)위에 [idempotent method](../http1/methods#idempotent)들에 한해서 이전 request에 대한 응답이 클라이언트로 도착했는지 여부를 따지지 않고 연속된 request들을 서버로 전송할 수 있는 pipelining 기법을 제시했습니다.

이론적으로 보자면 짧은 시간 안에 전송한 HTTP request message들이 동일한 TCP segment에 담겨져서 전달된다면 요청 간의 네트워크 지연을 줄일 수는 있습니다.

하지만 이 방식은 [HOL blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking)에 의해서 성능이 제한될 수 있다는 문제점이 있습니다.

:::info HOL Blocking
`HTTP/1.1` 명세에 따르면 서버는 일련의 request를 받아서 처리한 뒤에 request의 순서에 맞게 다시 응답으로 전송해야 합니다.

그래서 먼저 도착한 request에 대한 응답이 준비되기 전까지는 이후에 도착한 request에 대한 처리가 늦어지는 현상이 발생할 수 있는데, 이를 HOL(Head-of-line) blocking이라고 부릅니다.

HOL blocking 현상은 특히 `HTTP/1.1` proxy 서버에서 자주 발생했습니다.

일련의 요청이 들어왔는데 먼저 온 request에 대한 응답이 cache에 없어서 실제 서버로 forward하여 response가 cache되기 전까지는 이미 cache된 response들은 바로 전송할 수 없기 때문입니다.
:::

## Domain Sharding

`HTTP/1.1`에서 지원된 [persistent connection](#persistent)은 다수의 요청들을 병렬적으로 전송(multiplexing)할 수 없는 한계가 있어서 “Domain sharding”이라는 기술이 추가됩니다.

### 구현방식

필요한 리소스들을 단일 도메인이 아닌 동일한 서버를 참조하는 여러 개의 subdomain들을 향해 병렬적으로 요청하는 방식을 이루어집니다.

<Image src="../_images/domain_sharding.png" placeholder="Domain Sharding" />

### 장점

- 많은 양의 리소스들을 병렬적으로 다운로드할 수 있습니다.
- 단일 도메인 방식보다 page loading 시간이 단축됩니다.

### 단점

- 검색할 domain의 개수가 늘어나면서 DNS lookup에 의한 지연이 발생합니다.
- 많은 양의 CPU 및 전력 소모가 필요합니다.

::: tip
따져보면 장단점이 서로 상충되기 때문에 domain sharding은 동시요청에 의한 지연발생을 완전히 해결하지 않습니다.

그래서 현대 대부분의 브라우저들은 `HTTP/2`로 전환했고 domain sharding은 `HTTP/2`가 지원되지 않는 오래된 브라우저(IE6, 7)들을 대상으로 알맞는 solution으로 활용됩니다.

:::
