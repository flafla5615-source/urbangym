import Container from "./Container";
import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { images } from "@/lib/site";

const zones: {
  name: string;
  desc: string;
  src: string;
  /** 그리드 span */
  span: string;
  height: string;
  sizes: string;
  /** 크롭 기준점 */
  position: string;
  /** 전체 폭으로 크게 보여줄 카드 */
  feature?: boolean;
}[] = [
  {
    name: "머신존",
    desc: "다양한 머신으로 체계적인 운동",
    src: images.machine,
    /* 비대칭 배치를 위한 그리드 span */
    span: "lg:col-span-7",
    height: "h-[300px] sm:h-[420px] lg:h-[560px]",
    sizes: "(max-width: 1024px) 100vw, 58vw",
    /* 세로 사진을 가로 영역에 맞추기 위한 크롭 기준점 */
    position: "center 58%",
  },
  {
    name: "유산소존",
    desc: "탁 트인 전망과 쾌적한 운동 환경",
    src: images.cardio,
    span: "lg:col-span-5",
    height: "h-[300px] sm:h-[420px] lg:h-[560px]",
    sizes: "(max-width: 1024px) 100vw, 40vw",
    position: "center 58%",
  },
  {
    name: "프리웨이트존",
    desc: "자유로운 무게 운동이 가능한 공간",
    src: images.freeWeight,
    span: "lg:col-span-5",
    height: "h-[300px] sm:h-[380px] lg:h-[480px]",
    sizes: "(max-width: 1024px) 100vw, 40vw",
    position: "center 62%",
  },
  {
    name: "스트레칭존",
    desc: "운동 전후, 더 나은 컨디션을 위한 공간",
    src: images.stretchingZone,
    span: "lg:col-span-7",
    height: "h-[300px] sm:h-[380px] lg:h-[480px]",
    sizes: "(max-width: 1024px) 100vw, 58vw",
    position: "center 52%",
  },
  {
    /* 릴랙스존은 전체 폭으로 크게 — 시선이 머물도록 */
    name: "프리미엄 릴랙스존",
    desc: "운동 후의 시간까지 생각한 어반짐의 회복 공간",
    src: images.relax,
    span: "lg:col-span-12",
    height: "h-[320px] sm:h-[440px] lg:h-[560px]",
    sizes: "100vw",
    position: "center 62%",
    feature: true,
  },
];

export default function Facilities() {
  return (
    <section id="facility" className="bg-warm-100 py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Our Space"
          title="공간으로 느껴지는 차이"
          aside={["넓고 쾌적한 공간,", "직접 경험해보세요."]}
        />

        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-12">
          {zones.map((zone, i) => (
            <Reveal
              key={zone.name}
              delay={(i % 2) * 100}
              className={zone.span}
            >
              <article className="group relative h-full overflow-hidden rounded-lg">
                <Photo
                  src={zone.src}
                  alt={`어반짐 ${zone.name}`}
                  sizes={zone.sizes}
                  position={zone.position}
                  className={`w-full ${zone.height}`}
                />

                {/* 텍스트 가독성을 위한 그라데이션 오버레이 */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent"
                />

                <div
                  className={`absolute inset-x-0 bottom-0 p-7 ${
                    zone.feature ? "lg:p-12" : "lg:p-9"
                  }`}
                >
                  <h3
                    className={`font-semibold tracking-[-0.015em] text-warm-50 ${
                      zone.feature
                        ? "text-[23px] lg:text-[30px]"
                        : "text-[21px] lg:text-[23px]"
                    }`}
                  >
                    {zone.name}
                  </h3>
                  <p
                    className={`mt-2 max-w-[36ch] leading-[1.75] text-warm-200 ${
                      zone.feature
                        ? "text-[15px] lg:text-[16.5px]"
                        : "max-w-[28ch] text-[14.5px] lg:text-[15px]"
                    }`}
                  >
                    {zone.desc}
                  </p>
                  <span className="mt-5 block h-px w-10 origin-left bg-warm-50/70 transition-[scale] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[2.6]" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
