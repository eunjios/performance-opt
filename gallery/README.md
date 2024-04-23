## 이미지 갤러리 최적화

> Reference: [프론트엔드 성능 최적화 가이드](https://product.kyobobook.co.kr/detail/S000200178292)

### 최적화 내용

> 이미지 포맷 및 사이즈를 변경할 수 없다고 가정하고 최적화 진행

1. 레이아웃 이동

   - height를 지정하여 레이아웃 변경 최소화

2. 이미지 지연 로딩

   - 라이브러리 사용하여 1000px 전에 이미지 로드

3. 렌더링 최적화

   - 기존 Redux 의 `useSelector` 가 객체를 반환하는 방식에서 개별 값을 반환하도록 수정
   - Equality function 으로 `shallowEqual` 적용

4. 병목 코드 최적화

   - `getAverageColorOfImage` 결과 캐싱
   - `getAverageColorOfImage` 사용 로직 수정

### 최적화 결과

**초기 화면**

|           | FCP  | LCP  |  TBT  |  CLS   |   SI   |
| :-------: | :--: | :--: | :---: | :----: | :----: |
|   기존    | 0.7s | 2.6s | 40ms  | 0.443  |  2.4s  |
| 성능 개선 | 0.7s | 2.6s |  0ms  | 0.027  |  1.0s  |
|   결과    |  -   |  -   | -100% | -93.9% | -58.3% |

**기타 개선된 부분**

- 모달 열었을 때 병목 현상 개선
