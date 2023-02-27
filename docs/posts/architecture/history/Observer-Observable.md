# Observer-Observable

<Image src="../_images/OO.png" alt="Observer-Observable" />

Flux는 상태관리를 이용하여 일관된 수단으로 앱을 제어할 수 있다는 장점이 있지만 action, dispatch 등의 생소한 개념과 장황한 문법으로 인한 높은 진입장벽이 문제였습니다.

이에 몇몇 개발자들은 상태관리는 유지하되 View(Observer)에서 store(Observable)를 subscribe하여 store에서 일어나는 변화를 비동기적으로 감지할 수 있는 Observer-Observable 패턴을 생각하게 됩니다.

해당 패턴은 Flux의 기능을 가지면서 복잡한 개념없이 store에서 변화가 일어날 때마다 전달되는 notification을 기반으로 렌더링을 수행할 수 있다는 특징이 있습니다.
