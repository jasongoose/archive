# Plugging memory leaks in your app

React, Vue를 포함한 다양한 프론트엔드 프레임워크에서 발생하기 쉬운 메모리 누수의 원인과 해결방법을 설명합니다.

## 메모리 누수의 원인

컴포넌트가 DOM으로부터 unmount된 이후에도 event listener 또는 setInterval 같은 비동기 작업이 계속 실행되는 경우

## 해결방법

- 컴포넌트 unmount hook에서 listener를 제거하거나 timerId를 제거합니다.
- React의 `useEffect`처럼 mount 단계에서의 setup, unmount 단계에서의 cleanup을 설정하는 hook을 사용합니다.

## 참고자료

[Plugging memory leaks in your app](https://calendar.perfplanet.com/2021/plugging-memory-leaks-in-your-app/)
