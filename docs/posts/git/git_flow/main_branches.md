# Main Branches

<Image src="../_images/main-branches.png" alt="Main Branches" />

## master(main)

`origin/master` 브랜치의 `HEAD`는 production-ready state를 가집니다.

`master` 브랜치에 merge가 일어날 때마다 build를 거쳐서 새로운 production-release가 만들어집니다.

## develop

`origin/develop` 브랜치의 `HEAD`는 추후에 있을 release를 위해 이루어진 최신 개발변화를 반영합니다.

release될 준비를 마치면 master 브랜치에 merge되면서 release number(version number)가 적힌 tag가 달립니다.
