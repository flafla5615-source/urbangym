/**
 * 어반짐 평거점 랜딩페이지 공통 설정
 * 확인된 공개 정보만 반영했으며, 가격/프로모션/주차 이용조건은 미기재합니다.
 * 문의처/주소/24시간 운영: 공식 인스타그램 @urban_gym001 및 당근 업체 소개.
 */
export const site = {
  url: "https://urbangym-eight.vercel.app",
  brand: {
    ko: "어반짐 평거점",
    en: "URBAN GYM",
    tagline: "MAKE EVERY DAY STRONGER",
  },
  contactUrl: "tel:01022627768",
  phoneUrl: "tel:01022627768",
  mapUrl:
    "https://map.naver.com/p/search/%EC%96%B4%EB%B0%98%EC%A7%90%20%ED%8F%89%EA%B1%B0%EC%A0%90",
  instagramUrl: "https://www.instagram.com/urban_gym001/",
  contact: {
    phone: "010-2262-7768",
    address: "경남 진주시 순환로 541",
    addressDetail: "지원빌딩 6·7층 (평거동)",
    parking: "주차 이용 방법은 전화로 문의해 주세요.",
  },
  hours: [{ label: "운영시간", value: "24시간 · 연중무휴" }],
  nav: [
    { label: "어반짐 소개", href: "#about" },
    { label: "시설 둘러보기", href: "#facility" },
    { label: "헬스 · PT", href: "#program" },
    { label: "오시는 길", href: "#location" },
  ],
} as const;

/** 기존 사이트의 실제 매장 이미지 경로 유지. 이미지 파일 자체는 교체하지 않습니다. */
export const images = {
  hero: "/images/urbangym/01.jpg",
  machine: "/images/urbangym/02.jpg",
  cardio: "/images/urbangym/03.jpg",
  freeWeight: "/images/urbangym/04.jpg",
  stretchingZone: "/images/urbangym/05.jpg",
  philosophy: "/images/urbangym/06.jpg",
  stretching: "/images/urbangym/07.jpg",
  recovery: "/images/urbangym/08.jpg",
  cta: "/images/urbangym/09.jpg",
  gymFloor: "/images/urbangym/10.jpg",
  relax: "/images/urbangym/11.webp",
} as const;
