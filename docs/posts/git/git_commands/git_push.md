# git push

local repo의 history에 맞춰서 remote repo의 history에 commit들을 추가/삭제하는 명령어입니다.

`git push`를 할 때, remote 브랜치와 local 브랜치가 서로 갈라져서 non-fastfoward merge가 필요한 상황이면 git은 default로 이러한 push를 차단합니다.

이 상황에서는 2가지 해결방법이 있습니다.

- remote repo 브랜치에서 pull 받은 뒤, push 재수행
- `git push -—force` 로 강제로 history를 overwrite한다.

:::tip
`git push -—force` 는 아래와 같은 상황에 보통 필요합니다.

- `git reset` 이후
- `git commit -—amend` 이후
- `git rebase -i` 이후
- …

:::

git branch 이름 변경할 때도 활용할 수 있습니다.

```zsh
git push origin :<old-branch-name> <new-branch-name>
git push origin -u <new-branch-name>
```
