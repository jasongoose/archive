# git checkout

local repo에서 `HEAD`가 참조하는 commit이나 브랜치를 switch하기 위한 명령어입니다.

<Image src="../_images/git_checkout.png" alt="Git Checkout"/>

`git checkout`으로 현재 브랜치의 최근 commit과 `HEAD`가 불일치하면 “Detached HEAD” state가 되는데, 현재 개발작업과는 완전히 분리된 상태이므로 변경사항과 commit을 생성할 수 없습니다.
