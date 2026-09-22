/**
 * ============================================================
 *  어반짐 사이트 공통 설정
 * ------------------------------------------------------------
 *  확정되지 않은 정보는 모두 "추후 입력 예정" 으로 두었습니다.
 *  실제 정보가 확정되면 이 파일만 수정하면 전체 페이지에 반영됩니다.
 * ============================================================
 */

export const TODO = "추후 입력 예정";

export const site = {
  brand: {
    ko: "어반짐",
    en: "URBAN GYM",
    tagline: "HEALTHY PEOPLE, BETTER LIVES",
  },

  /**
   * 상담 문의 링크
   * TODO: 카카오톡 채널 / 네이버 예약 / 전화 링크 등으로 교체하세요.
   *  - 카카오톡 채널 예시 : "http://pf.kakao.com/_xxxxxx/chat"
   *  - 전화 걸기 예시     : "tel:0212345678"
   *  - 현재는 페이지 하단 상담 섹션으로 이동합니다.
   */
  contactUrl: "#contact",

  /** TODO: 네이버 지도 / 카카오맵 길찾기 링크 */
  mapUrl: "#location",

  /** 연락처 · 주소 · 운영시간 (확정 전까지 placeholder 유지) */
  contact: {
    phone: TODO,
    address: TODO,
    addressDetail: TODO,
    parking: TODO,
  },

  /** 운영시간 - 확정되면 value 값만 교체하세요 */
  hours: [
    { label: "평일", value: TODO },
    { label: "토요일", value: TODO },
    { label: "일요일 · 공휴일", value: TODO },
  ],

  /** 헤더 내비게이션 */
  nav: [
    { label: "소개", href: "#about" },
    { label: "시설안내", href: "#facility" },
    { label: "프로그램", href: "#program" },
    { label: "이용안내", href: "#info" },
    { label: "상담문의", href: "#contact" },
  ],
} as const;

/**
 * 이미지 경로 모음
 * ------------------------------------------------------------
 * 실제 사진을 /public/images/urbangym/ 폴더에 01.jpg ~ 10.jpg 로
 * 넣어주시면 됩니다. 사진 순서를 바꾸고 싶다면 아래 경로만 교체하세요.
 */
export const images = {
  /** 01 · 프론트 데스크 — 히어로 메인 비주얼 */
  hero: "/images/urbangym/01.jpg",
  /** 02 · 머신존 */
  machine: "/images/urbangym/02.jpg",
  /** 03 · 유산소존 */
  cardio: "/images/urbangym/03.jpg",
  /** 04 · 프리웨이트존 */
  freeWeight: "/images/urbangym/04.jpg",
  /** 05 · 스트레칭존 */
  stretchingZone: "/images/urbangym/05.jpg",
  /** 06 · 넓은 전경 — 운영 철학 섹션 */
  philosophy: "/images/urbangym/06.jpg",
  /**
   * 07 · 스트레칭 공간 — 회복 섹션
   * 현재 05.jpg 와 동일한 사진입니다(스트레칭 공간 사진이 1장뿐).
   * 크롭 기준점을 달리해 다르게 보이도록 처리했습니다.
   * 추가 사진이 생기면 이 파일만 교체하세요.
   */
  stretching: "/images/urbangym/07.jpg",
  /** 08 · 안마의자 · 회복 공간 */
  recovery: "/images/urbangym/08.jpg",
  /** 09 · 하단 CTA 배경 */
  cta: "/images/urbangym/09.jpg",
  /** 10 · 넓은 운동 공간 전경 — 소개 섹션 우측 이미지 */
  gymFloor: "/images/urbangym/10.jpg",
  /** 11 · 프리미엄 릴랙스존 — 시설 섹션 와이드 카드 */
  relax: "/images/urbangym/11.webp",
} as const;
