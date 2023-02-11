# Garbage Collector

JS에서 메모리 관리는 [JS엔진](../ecmascript/javascript_engine)의 가비지 컬렉터(Garbage Collector, GC)가 전담합니다.

GC는 할당된 메모리를 모니터링하고 더 이상 필요가 없다고 판단한 메모리 공간을 회수하는게 주기능인데, 프로그램에 의해서 언제 사용하게 될지도 모르니 대상 메모리 공간을 회수하기 위한 기준은 엄격해야 합니다.

GC에 내장된 메모리 회수 알고리즘은 [Reference Count](../memory_management/reference_count)와 [Mark & Sweep](../memory_management/mark_and_sweep) 알고리즘이 있습니다.
