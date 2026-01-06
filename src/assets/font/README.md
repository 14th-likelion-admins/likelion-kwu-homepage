# 폰트 파일 저장 위치

이 폴더는 프로젝트에서 사용하는 폰트 파일을 저장하는 위치입니다.

## 현재 사용 중인 폰트

1. **Inter** - 프로젝트 상세 모달에서 사용
2. **Space Grotesk** - 프로젝트 홈 및 프로젝트 페이지에서 사용

## 폰트 파일 추가 방법

1. 폰트 파일을 이 폴더에 추가하세요:
   - Inter 폰트: `Inter-Regular.woff2`, `Inter-Bold.woff2` 등
   - Space Grotesk 폰트: `SpaceGrotesk-Regular.woff2`, `SpaceGrotesk-Bold.woff2` 등

2. `src/index.css` 파일에 `@font-face` 선언이 자동으로 추가됩니다.

## 지원하는 폰트 형식

- `.woff2` (권장)
- `.woff`
- `.ttf`
- `.otf`
