# pnpm이란?

node 패키지들을 관리하기 위한 툴로, local fs에 버전별로 패키지를 하나만 저장하고 node 프로젝트들이 필요한 버전을 symlink를 통해 참조하는 메커니즘을 가집니다.

여기서 원본 패키지들이 저장된 단일 폴더를 content-addressable store(cas)라고 부르고 default path는 `~/Library/pnpm/store/v3`입니다.

기존 npm이나 yarn에서 발생했던 패키지 중복문제를 해결해서 디스크 공간을 절약할 수 있는 효과가 있습니다.
