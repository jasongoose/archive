# peerDependencies Resolution

패키지가 `peerDependencies`를 가지는 경우, `.pnpm`의 구성은 어떻게 달라질까?

`peerDependencies`는 해당 패키지를 사용하는 부모 패키지에 의해서 구체화되는 성질을 가지는데, 동일한 패키지를 사용하는 2개 이상의 부모 패키지에서 실제로 사용하는 peerDependency 패키지의 버전이 다른 경우가 생길 수 있습니다.

예를 들어, 패키지 foo의 peerDependencies가 아래와 같다면…

```text
peerDependencies
├- bar@^1
├- baz@^1
```

foo를 사용하는 두 부모 패키지들(foo-parent-1, foo-parent-2)에서 foo가 사용할 baz의 버전이 다를 수 있다는 겁니다.

```text
node_modules
├- foo-parent-1
|  ├- bar@1.0.0
|  ├- baz@1.0.0
|  ├- foo@1.0.0
|
├- foo-parent-2
   ├- bar@1.0.0
   ├- baz@1.1.0
   ├- foo@1.0.0
```

위와 같은 경우, baz 버전별로 foo의 virtual store를 분리하면 됩니다.

```text
node_modules
└── .pnpm
    ├── foo@1.0.0_bar@1.0.0+baz@1.0.0
    │   └── node_modules
    │       ├── foo
    │       ├── bar   -> ../../bar@1.0.0/node_modules/bar
    │       ├── baz   -> ../../baz@1.0.0/node_modules/baz
    │
    ├── foo@1.0.0_bar@1.0.0+baz@1.1.0
    │   └── node_modules
    │       ├── foo
    │       ├── bar   -> ../../bar@1.0.0/node_modules/bar
    │       ├── baz   -> ../../baz@1.1.0/node_modules/baz
    │
    ├── bar@1.0.0
    ├── baz@1.0.0
    ├── baz@1.1.0
    ├── qux@1.0.0
    ├── plugh@1.0.0
```

현재 패키지는 `peerDependencies`는 없지만 특정 dependency에는 `peerDependencies`를 가지는 경우도 비슷하게(?) 처리하면 됩니다.

예를 들어, 패키지 a는 `peerDependencies`는 없는데 dependency인 패키지 b에 `peerDependencies`로 `c@^1(c@1.0.0, c@1.1.0)`이 있는 상태라면, `.pnpm`은 다음과 같이 구성됩니다.

```text
node_modules
└── .pnpm
    ├── a@1.0.0_c@1.0.0
    │   └── node_modules
    │       ├── a
    │       └── b -> ../../b@1.0.0_c@1.0.0/node_modules/b
    ├── a@1.0.0_c@1.1.0
    │   └── node_modules
    │       ├── a
    │       └── b -> ../../b@1.0.0_c@1.1.0/node_modules/b
    ├── b@1.0.0_c@1.0.0
    │   └── node_modules
    │       ├── b
    │       └── c -> ../../c@1.0.0/node_modules/c
    ├── b@1.0.0_c@1.1.0
    │   └── node_modules
    │       ├── b
    │       └── c -> ../../c@1.1.0/node_modules/c
    ├── c@1.0.0
    ├── c@1.1.0
```
