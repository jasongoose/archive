# Support Branches

main branch들을 기능적으로 지원하기 위한 branch들로, 다른 branch의 특정 commit에서 생성되면 시간이 지난 뒤에 다른 branch로 merge됩니다.

## feature(topic)

예정된 release를 위해서 새로운 feature들을 개발할 때 `develop` branch `HEAD`에서 생성하는 브랜치입니다.

<p align="center">
    <img src="../_images/feature-merge.png" alt="Feature" />
</p>

feature 개발이 완료되면 다시 `develop` branch로 merge하고, 추후 history로 참고하기 위해 보통 삭제하지 않습니다.

## release

새로운 production release(`origin/master`로 merge) 직전에 대기하는 branch입니다.

<p align="center">
    <img src="../_images/release.png" alt="Release" />
</p>

계획했던 release 방안과 거의 가깝게 개발되었을 때, `develop` branch `HEAD`로부터 새로운 version number를 부여받은 `release` branch를 생성합니다.

minor bugfix를 진행하거나 release를 위한 meta-data를 준비하는 동안 `develop` branch는 다음 release를 위한 `feature`들을 계속 수용하고, 현재 `release`에서 bugfix를 할 때마다 다음 release 개발과정에 반영될 수 있도록 `develop` branch에 merge합니다.

release될 준비를 마치면 `master` branch로 merge한 뒤에 보통 삭제됩니다.

## hotfix

운영 중에 빠른 해결이 필요한 에러가 발생할 때마다 `master` branch `HEAD`에서 생성하는 브랜치로, 새로운 version number를 부여받습니다.

<p align="center">
    <img src="../_images/hotfix.png" alt="Hotfix" />
</p>

commit하면서 trouble shooting을 진행하고 완료되면 다음 release에도 똑같은 문제가 발생하지 않도록 `develop` branch에 merge한 뒤에 `master`로 merge합니다.
