# git stash

staged + unstaged 변경사항들을 추후에 적용할 수 있도록 local repository의 stack에 stash 단위로 push/pop하는 command입니다.

local repo에서 작업하는 것이기 때문에 remote에는 영향이 가지 않고, `.gitignore`에 포함된 파일 또는 새롭게 생성된 unstaged 파일들은 포함하지 않습니다.

stack에는 여러 개의 stash들이 쌓여있는데 각 stash들은 WIP(Working In Progress)라는 id를 가지는데, stash id에 간단한 설명(description)을 부여하는 것은 좋은 convention이라고 합니다.

가장 최근에 만들어진 stash가 `git stash` pop 0순위입니다.

stash를 생성할 때는 단일 파일, 다수 파일, 파일 일부를 단위로 할지 고를 수 있고, 가능한 stash 단위들을 "hunk"라고 합니다.

이미 stash로 추가된 변경사항들을 반영하는 브랜치도 생성할 수 있습니다.
