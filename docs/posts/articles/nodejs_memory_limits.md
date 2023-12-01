# Node.js Memory Limits

Node.js는 구글의 V8 자바스크립트 엔진을 사용하기 때문에 가비지 컬렉터(이하 GC)도 V8 GC를 사용합니다.

자바스크립트 코드를 실행할 때는 메모리 영역 중 하나는 힙 메모리(heap)입니다.

힙 메모리는 reference value가 주로 저장되는, 동적으로 할당되는 공간으로 힙 메모리에는 공간이 할당된지 시간이 오랜 지난 객체들 즉, GC로부터 회수당하지 않은 공간들이 모인 old generation과 할당된지 얼마 안된 young, intermediate generation으로 나뉩니다.

V8 GC는 주로 old가 아닌 young, intermediate generation 영역을 위주로 메모리를 회수하는 기준을 가집니다.

아티클 작성자가 최신 LTS node 버전 + 64-bit Window에서 힙 메모리 초과가 날 때까지 매 40ms마다 10MB 공간을 할당하는 시간을 측정해본 결과 4GB까지는 26.6s, 8GB까지는 45.7s가 걸렸다고 합니다.

node가 내부 구조까지는 모르지만 64bit processor가 가용할 수 있는 메모리 공간의 크기는 16GB가 되는데 1분도 안되는 시간에 이렇게 힙 초과가 일어난다는 점에서 메모리 누수 모니터링이 얼마나 중요한지 실감할 수 있었습니다.

만일 프로세스가 실행되는 중간에 “heap out of memory” 라는 에러가 나면 이는 메모리 누수가 발생했음을 알려주는 겁니다.

메모리 누수가 일어나는 주원인은 old generation로의 할당을 일으키는 코드로 보통 클로져 같은 기법의 단점으로 거론되는 것이 메모리 누수인데 클로져를 구현하거나 객체를 과하게 할당하는 부분은 리팩토링하면 됩니다.

개발할 때 메모리 누수 모니터링하는 것은 node에서 제공하는 `process.memoryUsage` 메서드를 사용하는 코드로 구현할 수 있으니 자세한 코드는 아티클을 참고하면 됩니다.

prod 환경에서에서 메모리 누수는 node-memwatch, PM2, AppSignal 등 외부 툴을 사용해서 관리할 수 있습니다.

## 참고자료

[Node.js Memory Limits - What You Should Know](https://blog.appsignal.com/2021/12/08/nodejs-memory-limits-what-you-should-know.html)
