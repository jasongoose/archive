# Staging Area

Git의 3가지 상태들 중 하나로 working directory(wd)와 remote repo history 사이의 buffer 역할을 하는 영역입니다.

staging area을 활용하면 wd 내에서 발생한 모든 pending change들 중, 관련된 건들만 논리적 단위로 모아서 단일 commit을 생성할 수 있습니다.

commit의 크기는 추후 revert와 디버깅을 위해서 atomic하게 만드는 것을 권장합니다.
