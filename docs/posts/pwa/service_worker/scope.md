# Scope

service worker가 관리하는 페이지들의 범위를 가리키는 용어로, 프로젝트 내의 `sw.js` 파일이 속한 폴더와 하위 폴더들이 scope에 해당합니다.

하나의 service worker는 메모리에 여러 개의 클라이언트 인스턴스(브라우저 탭 또는 PWA window)들이 있어도 오직 하나의 scope를 가집니다.

되도록 scope의 범위를 PWA 전역에 걸칠 수 있도록 최대한 프로젝트 root에 가깝게 `sw.js` 파일을 두는걸 권장합니다.
