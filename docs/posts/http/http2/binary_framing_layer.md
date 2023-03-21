# Binary Framing Layer

`HTTP/2` 는 socket API와 프로세스 사이에 Binary Framing Layer를 추가하여 `HTTP/1.1` 메시지의 header와 body를 각각 frame 단위로 변환(인코딩) + 결합합니다.

변환된 메시지는 Byte Stream 형식을 가집니다.

<Image src='../_images/bfl.png' placeholder="Binary Framing Layer" />

:::info
BFL은 OSI 계층모델에서 [6계층](../../../books/TCP_IP_완벽_가이드/6장/6-6.html#프리젠테이션-계층-6계층)의 구현체로 볼 수 있습니다.
:::

## HTTP/1.x의 한계

기존 `HTTP/1.x` 메시지는 실시간 반응이 필요한 현대 요구를 충족시키기에 다음과 같은 한계가 있습니다.

### body와 다르게 header는 압축되지 않는다.

header가 body에 비해 용량이 커서 불필요한 트래픽이 발생할 수 있고, 단일 connection 내의 메시지들 사이에서 헤더의 중복이 빈번히 발생합니다.

### 단일 TCP connection에서 multiplexing이 불가하다.

로딩 지연을 줄이는 동시성을 구현하려면 다수의 TCP connection들이 필요합니다.

### 요청한 리소스들 사이의 우선순위를 부여할 수 없다.

TCP 세그먼트의 제어 비트값을 이용하여 특정 stream은 별다른 handling 없이 즉시 상위계층으로 전달하는 로직을 활용하지 않습니다.

## Frame이란?

`HTTP/2`는 `HTTP/1.x` 메시지의 header와 body를 각각 별도의 binary frame 단위로 변환한 메시지를 사용합니다.

frame을 사용하면 아래와 같은 문제를 해결할 수 있습니다.

- stream들을 생성하면서 header와 body는 분리되기 때문에 개별 압축을 수행할 수 있다.
- 다수의 stream들을 결합할 수 있기 때문에 단일 TCP connection에서 multiplexing을 구현할 수 있다.

<Image src='../_images/http2-frame.png' placeholder="HTTP2 Frame" />
