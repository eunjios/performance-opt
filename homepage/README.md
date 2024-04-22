## 홈페이지 최적화

> Reference: [프론트엔드 성능 최적화 가이드](https://product.kyobobook.co.kr/detail/S000200178292)

### 최적화 내용

### 최적화 내용

1. 이미지 지연 로딩

   - `IntersectionObserver` 객체 사용하여 해당 이미지에 도달할 때 로딩

2. 이미지/동영상 최적화

   - format WebP, WebM 으로 변경
   - intrinsic size 최적화 (rendered size \* 2)
   - 웹 호환성을 고려하여 `<source>` 사용
   - 동영상 filter 적용

3. 폰트 최적화

   - format WOFF2, WOFF 로 변경
   - 사용하는 subset만 추출

4. 캐시 최적화

   - HTML 파일 `no-cache`
   - JavaScript/CSS/이미지 파일 `public` 및 `max-age` 1년으로 설정

5. Unused CSS 파일 최적화
   - [PurgeCSS](https://purgecss.com/) 라이브러리 사용

### 최적화 결과

**메인 페이지**
