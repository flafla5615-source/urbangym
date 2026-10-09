import Container from "./Container";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { images } from "@/lib/site";

/** 검증되지 않은 직원 상주 시간과 인증/수상 이력은 홍보 문구에서 제외. */
const reasons: { number: string; icon: IconName; title: string; desc: string }[] = [
  { number: "01", icon: "clock", title: "24시간, 내 리듬대로", desc: "출근 전에도, 퇴근 후에도. 하루의 일정에 맞춰 운동할 수 있는 24시간 공간." },
  { number: "02", icon: "trainer", title: "웨이트와 유산소를 한 곳에서", desc: "머신존·프리웨이트존·유산소존 등 목적에 맞춰 이용하는 운동 공간." },
  { number: "03", icon: "beginner", title: "처음 시작하는 운동도", desc: "운동을 어디서부터 시작할지 고민된다면, PT 상담으로 나에게 맞는 방법부터." },
  { number: "04", icon: "massage", title: "운동 후의 시간까지", desc: "스트레칭과 회복 공간까지 함께 생각한 편안한 피트니스 환경." },
];

export default function Reasons() {
  return (
    <section id="about" className="bg-warm-50 py-24 md:py-32 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Why Urban Gym"
          title={["일상의 속도를 아는", "운동 공간"]}
          aside={["운동은 꾸준할 때 달라집니다.", "어반짐은 그 꾸준함을 위한 공간을 만듭니다."]}
        />
        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((item, i) => (
              <Reveal key={item.number} delay={i * 65}>
                <article className="group flex h-full min-h-[250px] flex-col rounded-[20px] border border-warm-200 bg-white p-7 transition-[border-color,box-shadow,translate] duration-500 hover:-translate-y-1 hover:border-warm-300 hover:shadow-[0_14px_40px_-24px_rgba(25,27,25,.22)] sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-warm-100 text-accent">
                      <Icon name={item.icon} className="h-[21px] w-[21px]" />
                    </span>
                    <span className="font-display text-[12px] tracking-[0.2em] text-warm-400">{item.number}</span>
                  </div>
                  <h3 className="mt-8 text-[19px] font-semibold tracking-tight text-ink sm:text-[21px]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-warm-600">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140} className="lg:col-span-4">
            <div className="group relative h-full overflow-hidden rounded-[20px]">
              <Photo
                src={images.gymFloor}
                alt="어반짐 평거점 시설 전경"
                position="center 55%"
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="h-[320px] w-full sm:h-[400px] lg:h-full lg:min-h-[500px]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
              <p className="absolute bottom-7 left-7 font-display text-[11px] uppercase tracking-[0.3em] text-white">Your Everyday Wellness</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
