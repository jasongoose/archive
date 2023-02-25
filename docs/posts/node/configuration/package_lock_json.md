# package-lock.json

node_modules dependency tree, package.json에 변화가 생길 때마다 npm에 의해서 생성 또는 업데이트되는 `.json` 파일로, package.json의 git history로 이해할 수 있습니다.

package-lock.json의 용도는 다음과 같습니다.

- node_modules의 과거 state로 time-travel이 가능합니다.
- 이미 설치된 패키지는 다시 중복되어 설치되지 않도록 metadata를 저장합니다.
