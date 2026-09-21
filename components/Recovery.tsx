import Container from "./Container";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { images } from "@/lib/site";

const cards: {
  icon: IconName;
  title: string;
  desc: string;
  src: string;
  /** 크롭 기준점 */
  position: string;
  /** 지그재그 배치 */
  reverse: boolean;
}[] = [
  {
    icon: "stretching",
    title: "스트레칭 공간",
    desc: "운동 전후, 몸을 편안하게",
    src: images.stretching,
    /* 시설 섹션의 스트레칭존과 같은 공간이라 아래쪽(매트) 위주로 크롭 */
    position: "center 78%",
    reverse: false,
  },
  {
    icon: "massage",
    title: "회복 공간",
    desc: "프리미엄 안마의자로 더 깊은 휴식",
    src: images.recovery,
    position: "center 62%",
    reverse: true,
  },
];

export default function Recovery() {
  return (
    <section className="bg-warm-100 py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          eyebrow="Rest & Recovery"
          title="운동 후까지 편안하게"
          aside={["운동의 마무리까지,", "세심하게 생각합니다."]}
        />

        <div className="mt-16 flex flex-col gap-5 lg:mt-20">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <article
                className={`group grid overflow-hidden rounded-lg bg-white lg:grid-cols-2 ${
                  card.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Photo
                  src={card.src}
                  alt={`어반짐 ${card.title}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  position={card.position}
                  className="h-[260px] w-full sm:h-[340px] lg:h-[420px]"
                />

                <div className="flex flex-col justify-center p-9 lg:p-14">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-warm-100 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-warm-50">
                    <Icon name={card.icon} className="h-[22px] w-[22px]" />
                  </span>

                  <h3 className="mt-8 text-[23px] font-semibold tracking-[-0.015em] text-ink lg:text-[26px]">
                    {card.title}
                  </h3>
                  <p className="mt-3.5 text-[15.5px] leading-[1.85] text-warm-600 lg:text-[16px]">
                    {card.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
