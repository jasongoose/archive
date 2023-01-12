# RESTful

REST 구조를 따르는 API로, SOAP처럼 구체적인 리소스 전달방식을 정의하는 것과 달리 6가지의 RESTful System Guideline을 제시한다는 특징이 있습니다.

다르게 생각해보면 실제 API의 구조는 창작자 마음이지만 제약조건을 만족해야 RESTful API라고 볼 수 있습니다.

::: details 6가지 제약조건

#### 1. Client-Server architecture

API의 두 party는 요청하는 client와 응답하는 server로 구성되고 HTTP 프로토콜을 따른다.

#### 2. Stateless

client 관련 정보(metadata, URI, caching, cookie, authorization 등)는 server가 아닌 client 단에만 저장한다.(=> server는 client를 기억하지 않는다)

#### 3. Cacheability

특정 요청에 대한 응답은 client cache에 저장할 수 있다.

#### 4. Layered System

client-server간의 통신은 다수의 layer들(Load Balancer, API Gateway, Shared Caches 등)을 거쳐서 조정될 수 있다.

#### 5. Code on demand(optional)

필요하다면 server에서 client 단으로 실행가능한 코드를 전송하여 client의 기능확장을 지원할 수 있다.

#### 6. Uniform Interface(4 facets)

- 요청하는 리소스의 ID(URI)는 요청 message에 포함되고 리소스 자체는 형태(representation)와 무관하다.(=> 리소스는 다양한 format(JSON, XML, Text 등)으로 표현할 수 있다)
- client는 리소스의 형태 정보(metadata)를 이용하여 리소스의 state를 수정하거나 일부를 삭제할 수 있다.
- 응답 message는 client 단에서 리소스를 어떻게 처리해야 하는지에 대한 정보를 포함한다.(=> format별로 다른 paser가 필요하다)
- 최초 리소스를 접근한 이후, client는 server에서 제공한 hyperlink를 통해서 필요한 리소스들을 점진적으로 + 동적으로 얻을 수 있다.
  :::

6번째 제약조건으로부터 client와 server 사이에서 주고받는 리소스란 "데이터로 표현되는 정보"임을 유추할 수 있습니다.
