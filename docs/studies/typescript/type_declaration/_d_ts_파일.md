# .d.ts 파일

소스코드가 아닌 변수, 상수, class, function 등의 type declaration만 담고 있는 파일입니다.

`.js` 파일들로만 이루어진 패키지나 라이브러리들을 TS 프로젝트에서 사용할 때 필요한 type, interface, enum, function, class 등을 선언할 때 사용합니다.

보통 TS transpile 과정을 거친 뒤 결과물로 나오고 `.ts` 파일의 subset이기 때문에 TS 프로젝트 상에서는 일반 `.ts` 파일로 취급받습니다.

tsconfig.json에서 compiler-option인 `typeRoots` 또는 `types` 필드로 컴파일에 참여할 `.d.ts` 파일들의 경로를 설정할 수 있습니다.
