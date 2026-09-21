import Container from "./Container";
import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const audience: { icon: IconName; text: string }[] = [
  { icon: "beginner", text: "혼자 시작하기 막막한 분" },
  { icon: "hygiene", text: "깨끗한 환경을 중요하게 생각하는 분" },
  { icon: "layout", text: "운동 동선과 시설 퀄리티를 보는 분" },
  { icon: "comfort", text: "친절하고 안정적인 분위기를 원하는 분" },
];

export default function Audience() {
  return (
    <section id="program" className="bg-warm-50 py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Who We Welcome"
          title="초보자도, 꾸준히 운동하는 분도"
          aside={["어떤 목표든,", "어반짐이 함께합니다."]}
        />

        {/* 카드 대신 얇은 구분선 기반 리스트 — 앞 섹션과 리듬을 다르게 */}
        <div className="mt-16 grid border-t border-warm-200 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {audience.map((item, i) => (
            <Reveal key={item.text} delay={i * 80}>
              <div className="group flex h-full flex-col justify-between gap-10 border-b border-warm-200 py-10 pr-6 sm:min-h-[260px] lg:border-r lg:last:border-r-0 lg:py-12 lg:pl-8 lg:first:pl-0">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-warm-300 text-warm-600 transition-colors duration-500 group-hover:border-ink group-hover:text-ink">
                  <Icon name={item.icon} className="h-[21px] w-[21px]" />
                </span>

                <p className="text-[17px] font-medium leading-[1.6] tracking-[-0.01em] text-ink lg:text-[18px]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
