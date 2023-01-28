# Pull Request

개발자(contributor)가 작업했던 source repo의 branch를 destination repo의 branch로 merge 시키기 전에 repo 담당자(maintainer)를 포함한 다른 개발자들이 전과 후의 코드의 diff를 바탕으로 피드백을 얻는 mechanism 입니다.

pr을 거치면서 개선해야할 점들이 댓글로 올라오면 source branch에서 다시 commit들을 생성하여 수정한 다음에 피드백을 다시 받을 수 있습니다.

정해진 횟수 이상의 승인을 받은 뒤에 maintainer는 source branch를 destination branch로 merge 시킨 다음에 해당 pull request를 닫습니다.

pr을 생성하는 과정은 collaboration workflow(feature, gitflow, forking)에 따라 달라집니다.
