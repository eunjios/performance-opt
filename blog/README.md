## 블로그 최적화

> Reference: [프론트엔드 성능 최적화 가이드](https://product.kyobobook.co.kr/detail/S000200178292)

### 최적화 내용

1. 이미지 최적화

   - format webp로 변경
   - intrinsic size 최적화 (rendered size \* 2)

2. 함수 최적화

   - `replace` 메서드와 정규식을 사용하여 병목 코드 개선

3. Code splitting & lazy loading

   - `React.lazy` 및 `Suspense` 로 번들 사이즈 최적화

4. Text compression
   - `Content-Encoding=gzip`

### 최적화 결과

**목록 페이지**

|           | FCP  |   LCP   |  TBT  |  SI  |
| :-------: | :--: | :-----: | :---: | :--: |
|   기존    | 0.8s |  1.5s   | 110ms | 0.8s |
| 성능 개선 | 0.4s |  0.8s   |  0ms  | 0.4s |
|   결과    | -50% | -46.67% | -100% | -50% |

**디테일 페이지**

|           | FCP  |   LCP   |  TBT   |  SI  |
| :-------: | :--: | :-----: | :----: | :--: |
|   기존    | 0.8s |  1.7s   |  30ms  | 0.8s |
| 성능 개선 | 0.4s |  0.9s   |  50ms  | 0.4s |
|   결과    | -50% | -47.06% | 66.67% | -50% |
