import Container from "./Container";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { images } from "@/lib/site";

const reasons: {
  no: string;
  icon: IconName;
  title: string;
  desc: string;
  /** 카드 하단에 시간 정보를 덧붙일 때만 사용 */
  hours?: { label: string; value: string }[];
}[] = [
  {
    no: "01",
    icon: "trainer",
    title: "분야별 대표 트레이너",
    desc: "각 분야별 전문성을 갖춘 트레이너의 수업과 세심한 관리",
  },
  {
    no: "02",
    icon: "clean",
    title: "청결하고 건강한 센터",
    desc: "공기 청정부터 공간의 향까지, 세심하게 관리되는 운동 환경",
  },
  {
    no: "03",
    icon: "staff",
    title: "응대 전문 FC 상주",
    desc: "운동부터 시설 이용까지 편하게 안내받는 전문 직원 상주",
    hours: [
      { label: "평일", value: "09:00 – 21:30" },
      { label: "주말", value: "12:00 – 17:00" },
    ],
  },
  {
    no: "04",
    icon: "wellness",
    title: "프리미엄 웰니스 센터",
    desc: "소도구부터 머신까지 프리미엄으로, 운동과 휴식을 한 공간에서",
  },
];

export default function Reasons() {
  return (
    <section id="about" className="bg-warm-50 py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Why Urban Gym"
          title="어반짐이 다른 이유"
          aside={["운동을 위한 전문성부터", "머무는 시간의 쾌적함까지."]}
        />

        {/* 카드 4개 + 운동 공간 전경 */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((item, i) => (
              <Reveal key={item.no} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-lg border border-warm-200 bg-white p-8 transition-[border-color,box-shadow,translate] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-warm-300 hover:shadow-[0_18px_40px_-24px_rgba(26,25,23,0.28)] lg:p-9">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-warm-100 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-warm-50">
                      <Icon name={item.icon} className="h-[22px] w-[22px]" />
                    </span>
                    <span className="font-display text-[12px] tracking-[0.2em] text-warm-400">
                      {item.no}
                    </span>
                  </div>

                  <h3 className="mt-8 text-[19px] font-semibold tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-warm-600">
                    {item.desc}
                  </p>

                  {item.hours && (
                    <div className="mt-auto border-t border-warm-200 pt-5">
                      <p className="font-display text-[10px] uppercase tracking-[0.22em] text-warm-400">
                        FC 상주 시간
                      </p>
                      <dl className="mt-3 space-y-1.5">
                        {item.hours.map((h) => (
                          <div key={h.label} className="flex items-baseline gap-4">
                            <dt className="w-8 shrink-0 text-[13px] text-warm-500">
                              {h.label}
                            </dt>
                            <dd className="font-display text-[14px] tracking-[0.02em] text-ink">
                              {h.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {/* 우측 : 운동 공간 전경 */}
          <Reveal delay={160} className="lg:col-span-4">
            <div className="group h-full">
              <Photo
                src={images.gymFloor}
                alt="어반짐 운동 공간 전경"
                position="center 55%"
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="h-[280px] w-full rounded-lg sm:h-[360px] lg:h-full lg:min-h-[480px]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
