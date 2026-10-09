# 어반짐 평거점 — 홈페이지

Next.js(App Router) + Tailwind CSS 기반 반응형 단일 페이지 랜딩페이지입니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드
```

## 폴더 구조

```
app/
  layout.tsx          폰트 · 메타데이터 · 전역 레이아웃
  page.tsx            섹션 조립 (여기서 순서 변경)
  globals.css         컬러 토큰 · 폰트 토큰 · 기본 스타일
components/
  Header.tsx          고정 헤더 + 모바일 메뉴
  Hero.tsx            히어로
  Reasons.tsx         어반짐이 다른 이유
  Facilities.tsx      시설 소개 (머신/유산소/프리웨이트/스트레칭)
  Programs.tsx        헬스·PT 안내
  Location.tsx        오시는 길
  MobileContactBar.tsx 모바일 고정 네이버 예약·전화 버튼
  Philosophy.tsx      운영 철학
  Recovery.tsx        회복 · 편의 공간
  FinalCta.tsx        하단 CTA
  Footer.tsx          푸터 (주소/운영시간/연락처)
  Container.tsx       공통 가로 여백
  SectionHeading.tsx  섹션 공통 헤딩
  Button.tsx          버튼
  Photo.tsx           사진 래퍼
  Logo.tsx            임시 로고 (원형 U)
  Icon.tsx            라인 아이콘 세트
  Reveal.tsx          스크롤 등장 효과
lib/
  site.ts             상호·연락처·주소·운영시간·이미지 경로·메뉴
public/images/urbangym/
  01.jpg ~ 10.jpg     실제 사진 (README 참고)
  kakao-share-v1.png  카카오톡 등 링크 미리보기용 공유 이미지
```

## 운영 정보 수정

전부 `lib/site.ts` 한 파일에 모여 있습니다.

| 항목 | 현재 값 | 비고 |
|---|---|---|
| `url` | `https://urbangym-eight.vercel.app` | 새 배포 도메인 확정 시 변경 |
| `contactUrl` / `phoneUrl` | `tel:01022627768` | 전화 상담 |
| `bookingUrl` | 네이버 예약 `580202` | 사용자가 제공한 예약 URL |
| `mapUrl` | 네이버 지도 업체명 검색 | 공식 플레이스 URL 확인 후 교체 가능 |
| `contact.phone` | 010-2262-7768 | |
| `contact.address` | 경남 진주시 순환로 541 | |
| `contact.addressDetail` | 지원빌딩 6·7층 (평거동) | |
| `contact.parking` | 전화 문의 | 주차 지원 조건 확인 필요 |
| `hours[].value` | 24시간 · 연중무휴 | 상담 직원 운영시간과 구분 |

그 외:

- 실제 시설 사진 → `public/images/urbangym/` (배치 가이드는 해당 폴더 README 참고)
- 카카오톡 공유 썸네일 → `public/images/urbangym/kakao-share-v1.png`, 크기·대체 텍스트는 `lib/site.ts`의 `shareImage`
- 로고 확정 시 `components/Logo.tsx` 의 `<svg>` 교체
- 헤더 `헬스 · PT` 메뉴는 프로그램 섹션으로 연결됩니다.
- 가격·프로모션·주차 조건은 매장 확인 후 추가하세요.
- 2026-10-09 리뉴얼 정보 확인과 검증 기록: `docs/renewal-review.md`

## 디자인 토큰

컬러와 폰트는 `app/globals.css` 의 `@theme` 블록에서 관리합니다.
여기 값만 바꾸면 전체 페이지에 반영됩니다.

- 배경: `warm-50` / `warm-100`
- 텍스트: `ink` / `warm-600`
- 다크 섹션: `ink` / `charcoal-soft`
- 액센트: `accent` (세이지)
- 폰트: Pretendard(한글) + Outfit(영문 디스플레이)
