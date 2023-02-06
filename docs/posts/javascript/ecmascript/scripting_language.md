# Scripting Language

기존 응용 소프트웨어의 작업들을 자동화시키는 런타임 시스템을 위한 프로그래밍 언어입니다.

스크립트 언어로 작성한 코드를 실행하면 interpreter에 의해서 한 instruction씩 machine code로 해석/변환되고 런타임에 의해서 그 실행결과가 화면에 나타납니다.

이러한 실행과정은 컴파일 언어(Compiled Language)와 차이점이 있는데, 컴파일 언어로 작성된 코드(C 기준)를 빌드(build)하게 되면 compiler에 의해서 한 instruction이 아닌 전체 소스코드(하나의 파일)가 machine code로 변환되고 이러한 파일들이 링커(linker)에 의해 하나의 실행파일(executable file)이 만들어집니다.

결과를 확인하기 위해서는 특정 주체가 이 파일을 실행해야 합니다.

:::info 자동화
c언어로 계산기 프로그램을 만들어도 누군가 실행하지 않는 한 사용할 수 없지만 (Javascript + HTML + CSS)로 만든 계산기는 브라우저에서 컴파일 과정없이 바로 실행할 수 있습니다.

또한 Web API의 `addEventListener` 메서드를 이용하면 사용자에 의해서 특정 이벤트가 일어날 때마다 이벤트 핸들러(event handler)를 자동으로 실행시킬 수 있습니다.

'자동화'라는 단어만 보면 뭔가 스크립트 언어가 컴파일 언어보다 더 낫다고 생각할 수도 있지만 실행속도 면에서 보면 컴파일 언어에 비해서 느리고 실행환경에 종속적이라는 단점이 있습니다.

:::
현재 사용되는 스크립트 언어로는 Javascript, JSP, PHP, Python, Bash 등이 있습니다.
