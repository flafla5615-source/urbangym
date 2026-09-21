# 어반짐 URBAN GYM — 랜딩페이지

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
  Audience.tsx        추천 대상
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
  site.ts             ★ 모든 텍스트 placeholder · 이미지 경로 · 메뉴
public/images/urbangym/
  01.jpg ~ 10.jpg     실제 사진 (README 참고)
```

## 수정이 필요한 곳 (TODO)

전부 `lib/site.ts` 한 파일에 모여 있습니다.

| 항목 | 현재 값 | 비고 |
|---|---|---|
| `contactUrl` | `#contact` | 카카오톡 채널 / 전화 링크로 교체 |
| `mapUrl` | `#location` | 네이버지도 · 카카오맵 길찾기 링크 |
| `contact.phone` | 추후 입력 예정 | |
| `contact.address` | 추후 입력 예정 | |
| `contact.addressDetail` | 추후 입력 예정 | 층수 · 건물명 등 |
| `contact.parking` | 추후 입력 예정 | |
| `hours[].value` | 추후 입력 예정 | 평일 / 토 / 일·공휴일 |

그 외:

- 사진 10장 → `public/images/urbangym/` (배치 가이드는 해당 폴더 README 참고)
- 로고 확정 시 `components/Logo.tsx` 의 `<svg>` 교체
- 헤더 `프로그램` 메뉴는 현재 「추천 대상」 섹션으로 연결됩니다.
  실제 프로그램(PT·회원권 등) 정보가 확정되면 별도 섹션 추가 필요
- 도메인 확정 시 `app/layout.tsx` 의 `metadataBase` 주석 해제

## 디자인 토큰

컬러와 폰트는 `app/globals.css` 의 `@theme` 블록에서 관리합니다.
여기 값만 바꾸면 전체 페이지에 반영됩니다.

- 배경: `warm-50` / `warm-100`
- 텍스트: `ink` / `warm-600`
- 다크 섹션: `ink` / `charcoal-soft`
- 액센트: `accent` (웜 브론즈, 아주 절제해서 사용)
- 폰트: Pretendard(한글) + Outfit(영문 디스플레이)
