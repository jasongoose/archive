# An Introduction to Multithreading in Node.js

Node.js 런타임은 일반 브라우저와 같이 기본적으로 single thread 기반입니다.

하지마 다수의 cpu-intensive(=blocking) 연산들을 처리할 때는 worker-threads 모듈로 각 blocking 연산에 thread pool을 제공하여 비동기적으로(병렬적으로) 처리할 수 있습니다.

인위적인 multithread 연산은 가능합니다.

## 참고자료

[An Introduction to Multithreading in Node.js](https://blog.appsignal.com/2022/07/20/an-introduction-to-multithreading-in-nodejs.html)
