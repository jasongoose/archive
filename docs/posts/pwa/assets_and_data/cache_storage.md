# Cache & Storage

offline 상에서도 asset을 사용하기 위해 네이티브 앱의 접근방식을 그대로 따릅니다.

여기서 오프라인 상에서 asset을 사용하면 2가지 이점이 있습니다.

- 초기 렌더링 속도를 높일 수 있습니다.
- 네트워크가 끊긴 상황에서 기술적인 내용의 에러 메시지 대신 기본적인 UI나 최소한의 기능을 제공할 수 있습니다.

PWA는 오프라인 상에서도 컨텐츠를 제공하기 위해서 Cache Storage API를 사용하는데, 제약없이 리소스를 언제, 어떻게 cache나 storage에 저장할지를 개발자가 제어할 수 있습니다.

## Storage Solution별 특징

### Web Storage

- localStorage, sessionStorage
- key,value pair 형태로 저장합니다.
- 용량에 한계가 있습니다(브라우저별로 상이).
- synchronous API를 사용합니다.

### IndexedDB

- object 기반 NOSQL DB
- 정형화된 데이터 또는 이진 데이터를 저장할 수 있습니다.
- asynchronous API를 사용합니다.
- 보통 API request/response 데이터를 저장하는데 사용합니다.
- 로컬에서 저장하고 서버와 동기화할 때 유용합니다.

### Cache Storage

- HTTP 요청/응답 pair로 저장합니다.
- 오프라인 상에서도 cache storge에 요청을 저장, 회수, 수정, 삭제할 수 있습니다.

## Cache 사용법

### Precaching

PWA의 초기 렌더링을 위해서 앱을 설치하는 중에 필요한 asset(HTML)들을 cache에 저장합니다.

device의 저장공간을 처음부터 차지하므로 저장할 asset도 신중히 골라야 합니다.

### Caches as needed

필요할 때마다 요청한 뒤에 cache에 저장합니다.

앱의 버전과는 별개로 업데이트 빈도수가 잦을 때 사용합니다.

## Asset 업데이트

네이티브 앱 같은 경우, 필요한 asset들을 처음에 설치되는 패키지 안에 포함하기 때문에 초기 다운로드 용량이 꽤 크고(최소 500MB 이상) 적용범위가 그리 크지 않은 업데이트를 위해서 전체 패키지를 재설치하는 번거로움이 있습니다.

하지만 PWA는 초기 렌더링에 필요한 asset들만 precaching하고 나머지는 추후에 요청할 수 있기 때문에 다운로드 용량이 상대적으로 적고, 업데이트가 필요할 때마다 HTTP 요청을 전송하여 cache swap 또는 flush만 수행하면 되는 장점이 있습니다.

asset을 업데이트하는 방식은 3가지가 있습니다.

### Full update

앱에 미미한 변화가 있어도 전체 패키지를 다운받아서 cache에 저장합니다.

### Partial update

업데이트가 필요한 부분만 적절한 시기에 요청하여 cache를 업데이트합니다.

### Continuous update

자동으로 asset을 확인하여 지속적으로 업데이트합니다.
