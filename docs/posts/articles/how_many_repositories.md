# How Many Repositories Do You Need for a Microservices Project?

App sevice를 다수의 microservice 단위로 나누고 버전관리를 하는 방법은 2가지입니다.

- microservice 당 하나의 팀이 붙는다고 가정합니다.
- 개발환경은 Node.js를 기준으로 합니다.

## monorepo

단일 repo workspace에 모든 microservice들을 package 단위로 가집니다.

구현방식의 획일화, git conflict, 사소한 변화로 인한 전체 빌드와 같은 문제점들이 있습니다.

## multirepo

1 microservice가 1 repo를 가집니다.

구현방식의 파편화, public API의 호환성 여부를 주기적으로 확인해야 하는 문제점들이 있습니다.

:::info
위 두 방식은 microservice 단위로 개별 배포가 가능합니다.

repository ⇒ 버전관리의 범위(절대 배포 단위가 아님)

service ⇒ 서버(들)에서 제공하는 리소스(데이터 또는 페이지)

monorepo와 multirepo를 결합 ⇒ 연관성있는 microservice들끼리 monorepo로 묶고 아니면 개별 repo로 분리합니다.
:::

## 참고자료

[How Many Repositories Do You Need for a Microservices Project?](https://levelup.gitconnected.com/how-many-repositories-do-you-need-for-a-microservices-project-b5c991aa440)

[What are microservices?](https://microservices.io/)
