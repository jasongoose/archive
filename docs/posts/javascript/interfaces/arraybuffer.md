# ArrayBuffer

고정된 길이의 byte array로, 포괄적인 타입의 raw data를 저장하기 위한 data buffer를 생성합니다.

`ArrayBuffer` 인스턴스 자체는 일종의 저장공간이기 때문에 `TypedArray`나 `DataView`로 buffer를 참조하여 특정 길이의 byte 단위로 데이터를 read/write해야 합니다.

thread들 간의 데이터를 전달할 수 있는 [transferable object](https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects)입니다.

오직 한번에 하나의 thread 즉, 단일 context 상에서만 리소스를 참조할 수 있으므로 다른 thread로 전달된 이후에는 전달 전의 context 상에서 해당 데이터를 참조할 수 없습니다.

기존 context에서 detach된 데이터는 전달 이후 context 상의 `ArrayBuffer` 공간에 attach됩니다.
