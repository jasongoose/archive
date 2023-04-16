# var

function 또는 global scope 변수를 선언할 때 사용하는 키워드입니다.

global context에서 `var`로 선언된 변수들은 모두 전역객체의 read-only property로 처리됩니다.

CommonJS 또는 ESM 모듈 내에 top-level 변수들은 global이 아닌 module scope를 가집니다.

변수를 선언하면 초기화가 동시에 이루어집니다.

:::warning
hoisting에 의해서 변수의 선언부와 초기화부가 분리되지 않으므로 TDZ가 없어서 실제 선언부 전에 해당 변수를 사용할 수 있는 이상한(?) 성질이 있습니다.

:::
