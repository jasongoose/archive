# Reminder: JSON.stringify can create Multi-line, formatted and filtered strings from JSON

`JSON.stringify` 메서드는 serialize 대상 객체뿐만 아니라 출력방식과 출력포맷을 지정할 수 있는 인자를 받습니다.

```js
JSON.stringify(value);
JSON.stringify(value, replacer);
JSON.stringify(value, replacer, space);
```

출력방식은 2번째 인자인 replacer function/array로 지정합니다.

function으로 출력 결과물을 수정할 수 있고 array로는 출력결과물에 포함시킬 key값들을 필터링할 수 있습니다.

출력포맷은 3번째 인자인 space로 지정하는데 가독성을 위해서 추가할 indent의 크기를 정할 수 있습니다.

## 참고자료

[Reminder: JSON.stringify can create Multi-line, formatted and filtered strings from JSON](https://christianheilmann.com/2022/10/28/reminder-json-stringify-can-create-multi-line-formatted-and-filtered-strings-from-json/)

[JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
