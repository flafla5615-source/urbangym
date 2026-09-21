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
}[] = [
  {
    no: "01",
    icon: "trainer",
    title: "전문트레이너",
    desc: "운동 목적에 맞는 안내와 관리",
  },
  {
    no: "02",
    icon: "clean",
    title: "청결한 시설",
    desc: "쾌적하고 깔끔하게 유지되는 공간",
  },
  {
    no: "03",
    icon: "staff",
    title: "친절한 직원",
    desc: "처음 방문해도 편안한 응대",
  },
  {
    no: "04",
    icon: "managed",
    title: "관리형 헬스장",
    desc: "혼자 두지 않는 체계적인 운영",
  },
];

export default function Reasons() {
  return (
    <section id="about" className="bg-warm-50 py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Why Urban Gym"
          title="어반짐이 다른 이유"
          aside={["좋은 시설은 기본,", "결국 중요한 건 관리입니다."]}
        />

        {/* 카드 4개 + 보조 이미지 */}
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
                </article>
              </Reveal>
            ))}
          </div>

          {/* 우측 세로 이미지 */}
          <Reveal delay={160} className="lg:col-span-4">
            <div className="group h-full">
              <Photo
                src={images.detail}
                alt="어반짐 프론트 데스크와 라운지"
                position="center 38%"
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
