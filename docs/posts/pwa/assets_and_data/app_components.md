# App Components

PWA의 본질은 웹앱이기 때문에 필요한 static asset들도 동일합니다.

|    타입     |                     설명                      |
| :---------: | :-------------------------------------------: |
|    HTML     |      contents와 initial rendering에 사용      |
|     JS      |   DOM manimpulation, WebAssembly 모듈 실행    |
|     CSS     |        DOM Layout, styling, animation         |
| 미디어 파일 | 이미지(PNG, JPEG, WebP, SVG 등), 영상, 오디오 |
|  Web fonts  |                       -                       |
|  JSON, XML  |                       -                       |

네이티브앱과 웹앱에서 asset을 받는 방식은 서로 차이가 있습니다.

네이티브앱은 다운로드 받을 패키지 안에 모든 asset들을 포함하고 별도의 요청없이 실행 중인 기기의 storage에서 fetch하므로 오프라인 상에서도 사용할 수 있습니다.

웹앱의 경우, 필요할 때마다 네트워크를 통해 asset을 요청하므로 오프라인 상에서 사용할 수 없습니다.
