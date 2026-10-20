export type TrainerProfile = {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  image: string;
  slogans: string[];
  highlights: string[];
  sections: {
    title: string;
    groups: { title?: string; items: string[] }[];
  }[];
};

/** 2026-10-20 사용자가 제공한 사진·프로필. 전·현직 표기와 수상 여부를 원문대로 유지합니다. */
export const trainers: TrainerProfile[] = [
  {
    id: "kim-minhu",
    name: "김민후",
    role: "대표",
    roleEn: "DIRECTOR",
    image: "/images/trainers/kim-minhu.webp",
    slogans: [
      "건강한 움직임으로 건강한 신체를 만듭니다.",
      "전문성을 기반으로 정성으로 하는 PT",
    ],
    highlights: [
      "현) 어반짐 지점 대표",
      "Fitness Science Academy 5기 수석 졸업",
    ],
    sections: [
      {
        title: "경력 사항",
        groups: [{
          items: [
            "전) 머슬팩토리 보건대점 지점장",
            "전) 머슬팩토리 보건대·삼천포·벌리·정촌·시청 지부장",
            "현) 어반짐 지점 대표",
          ],
        }],
      },
      {
        title: "자격 및 전문 교육",
        groups: [
          { items: ["생활체육지도사 2급 · 보디빌딩"] },
          {
            title: "NSCA",
            items: [
              "NSCA FCL (국제 웨이트 리프팅 자격증)",
              "NSCA RES lv.1 (재활운동전문가 수료증)",
              "NSCA BOSU (국제 보수볼 자격증)",
              "NSCA SMR (셀프 자가근막이완 마스터링)",
              "2026 NSCA Korea 재활운동 세미나 수료",
            ],
          },
          {
            title: "Fitness Science Academy",
            items: [
              "5기 수석 졸업",
              "힙 마스터 수료",
              "족부 마스터 수료",
              "어깨·견갑골 기능 개선 및 교정운동 과정 수료",
              "근육 불균형 평가 및 교정운동 교육 수료 · 상지(Upper Body) / 하지(Lower Body)",
              "움직임 재교육 및 기능 회복(Rebuilding Movement) 과정 수료",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kim-seonghun",
    name: "김성훈",
    role: "프로 트레이너",
    roleEn: "PRO TRAINER",
    image: "/images/trainers/kim-seonghun.webp",
    slogans: ["변화에는 이유가 있어야 합니다."],
    highlights: [
      "스포츠운동관리사 1급",
      "2025 창원 NPCA 보디빌딩 -65kg 2등",
    ],
    sections: [
      {
        title: "경력 사항",
        groups: [{
          items: [
            "전) 머슬팩토리 보건대점 트레이너",
            "전) 머슬팩토리 정촌점 트레이너",
            "전) 어반짐 평거점 트레이너",
          ],
        }],
      },
      {
        title: "자격 사항",
        groups: [{
          items: [
            "스포츠운동관리사 1급",
            "스포츠재활처방사 1급",
            "건강관리사 1급",
            "운동처방사 1급",
            "헬스케어지도사 1급",
          ],
        }],
      },
      {
        title: "교육 이수 및 전문 교육",
        groups: [
          {
            title: "NSCA Korea",
            items: ["2026 NSCA Korea 재활운동 세미나 수료"],
          },
          {
            title: "Fitness Science Academy",
            items: [
              "교육과정 수료",
              "무릎 통증 관리 및 운동 처방 세미나 수료",
              "어깨·견갑골 기능 개선 및 교정운동 과정 수료",
              "근육 불균형 평가 및 교정운동 교육 수료 · 상지(Upper Body) / 하지(Lower Body)",
              "움직임 재교육 및 기능 회복(Rebuilding Movement) 과정 수료",
            ],
          },
        ],
      },
      {
        title: "대회 경력",
        groups: [{
          items: [
            "2025 창원 NPCA 클래식 피지크 주니어",
            "2025 창원 NPCA 보디빌딩 -65kg 2등",
            "2025 경남 NPCA 보디빌딩 주니어",
            "2025 경남 NPCA 보디빌딩 -65kg 3등",
          ],
        }],
      },
    ],
  },
  {
    id: "lee-seunggu",
    name: "이승구",
    role: "파트 트레이너",
    roleEn: "PART-TIME TRAINER",
    image: "/images/trainers/lee-seunggu.webp",
    slogans: ["몸의 변화는 운동에서, 한계의 돌파는 트레이닝에서."],
    highlights: [
      "현) 어반짐 파트 트레이너",
      "2026년 생활스포츠지도사 2급 보디빌딩 취득",
    ],
    sections: [
      {
        title: "약력 및 자격",
        groups: [{
          items: [
            "현) 어반짐 파트 트레이너",
            "2026년 생활스포츠지도사 2급 보디빌딩 취득",
          ],
        }],
      },
      {
        title: "지도 철학",
        groups: [{
          items: [
            "정확한 자세와 체계적인 운동 프로그램을 바탕으로, 회원 개개인에게 맞는 지속 가능한 성장을 이끌어냅니다.",
          ],
        }],
      },
    ],
  },
];
