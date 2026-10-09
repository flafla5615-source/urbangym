import Button from "./Button";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

const programs = [
  {
    number: "01",
    en: "OPEN GYM",
    title: "자유 헬스",
    intro: "운동의 페이스는 내가 정합니다.",
    detail: "24시간 운영하는 어반짐에서 웨이트부터 유산소까지, 나의 루틴에 맞춰 운동해보세요.",
    points: ["24시간 연중무휴", "웨이트 · 유산소 · 스트레칭"],
    dark: true,
  },
  {
    number: "02",
    en: "PERSONAL TRAINING",
    title: "퍼스널 트레이닝",
    intro: "나에게 맞는 시작이 필요할 때.",
    detail: "운동 목표와 현재 상태를 상담하고, 나에게 맞는 운동 방향과 PT 이용 방법을 안내받으세요.",
    points: ["개인 목표 상담", "PT 프로그램 상담"],
    dark: false,
  },
] as const;

export default function Programs() {
  return (
    <section id="program" className="bg-warm-50 py-24 md:py-32 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Gym & Personal Training"
          title={["운동의 목적이 달라도,", "시작하는 곳은 어반짐"]}
          aside={["자유롭게 운동하고 싶을 때도,", "체계적인 상담이 필요할 때도."]}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16">
          {programs.map((program, i) => (
            <Reveal key={program.en} delay={i * 120}>
              <article className={`flex h-full min-h-[430px] flex-col justify-between overflow-hidden rounded-[24px] p-8 sm:p-11 ${program.dark ? "bg-ink text-warm-50" : "border border-warm-200 bg-warm-100 text-ink"}`}>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className={`eyebrow ${program.dark ? "text-accent-soft" : "text-accent"}`}>{program.en}</p>
                    <span className={`font-display text-[13px] ${program.dark ? "text-warm-400" : "text-warm-500"}`}>{program.number}</span>
                  </div>
                  <h3 className="mt-12 text-[30px] font-semibold tracking-[-0.035em] sm:text-[37px]">{program.title}</h3>
                  <p className="mt-4 text-[17px] font-medium">{program.intro}</p>
                  <p className={`mt-3 max-w-[45ch] text-[15px] leading-[1.9] ${program.dark ? "text-warm-300" : "text-warm-600"}`}>{program.detail}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {program.points.map((point) => (
                      <span key={point} className={`rounded-full border px-3.5 py-2 text-[12px] ${program.dark ? "border-white/20 text-warm-200" : "border-warm-300 text-warm-600"}`}>{point}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-12">
                  <Button href={site.contactUrl} variant={program.dark ? "light" : "solid"}>이용권 · PT 문의</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[13px] leading-[1.8] text-warm-500">회원권 구성과 PT 이용 방법은 전화 상담으로 안내해 드립니다.</p>
      </Container>
    </section>
  );
}
