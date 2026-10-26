# 어반짐 평거점

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

진주 평거동에서 헬스장 이용과 PT 상담을 알아보는 방문자. 회원권·PT 상담을 고르게 다룬다는 우선순위는 2026-10-26 사용자가 확인했다.

## Product Purpose

실제 시설과 트레이너를 살펴보고 네이버 예약 또는 전화로 회원권·PT 상담을 신청하는 매장 홈페이지다.

## Operating Context

공개 사이트는 https://urbangym-eight.vercel.app/ 이다. 기존 Next.js App Router·React·Tailwind CSS 프로젝트를 사용하며 GitHub main 변경은 연결된 Vercel 프로젝트에 배포된다.

## Capabilities and Constraints

- 상호: 어반짐 평거점. 영문 표기는 URBAN GYM.
- 사용자가 확인한 주소: 경남 진주시 순환로 541, 지원빌딩 6·7층 (평거동).
- 사용자가 확인한 전화: 010-2262-7768. 전화 링크: tel:01022627768.
- 사용자가 확인한 운영: 24시간 연중무휴. 상담 직원이 24시간 상주한다는 의미로 확대하지 않는다.
- 네이버 예약: https://m.booking.naver.com/booking/13/bizes/580202?theme=place&entry=pll&lang=ko
- 하단 플로팅은 네이버 예약과 전화 상담을 제공한다. 위치 안내는 본문에서 유지한다.
- 최근 운영 소스의 트레이너 3명 소개·상세 경력·프로필 사진과 네이버 지도를 보존한다.
- 가격, 할인, 주차 지원 조건, 성과 수치는 미확인이다. 기존 문의 안내를 유지하며 새로 만들지 않는다.

## Brand Commitments

실제 매장과 트레이너 사진, U 로고, 상호를 보존한다. 2026-10-26 사용자는 humanize-korean과 impeccable을 사용해 AI 티가 덜 나고 세련된 리뉴얼을 요청했다. 기존 팔레트·구성의 유지는 요구하지 않았다.

## Evidence on Hand

- 기존 시설 사진: public/images/urbangym/01.jpg ~ 10.jpg, 11.webp.
- 트레이너 정보: lib/trainers.ts, docs/trainer-profiles.md, public/images/trainers/.
- 연락처·예약·지도: lib/site.ts.
- 기존 공유 이미지: public/images/urbangym/kakao-share-v1.png.
- 사실 확인과 검증 기록: docs/renewal-review.md.
- 실제 사용 후기와 가격표는 제공되지 않았다.

## Product Principles

1. 사진과 확인 가능한 정보로 공간을 설명한다.
2. 회원권과 PT 상담의 비중을 고르게 둔다.
3. 예약과 전화 연결을 명확히 표시한다.
4. 사실·프로필·영업 정보는 문체와 구분해 보존한다.
