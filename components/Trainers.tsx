import Container from "./Container";
import Photo from "./Photo";
import SectionHeading from "./SectionHeading";
import { trainers } from "@/lib/trainers";

export default function Trainers() {
  return (
    <section id="trainers" className="border-t border-warm-200 bg-warm-100 py-24 md:py-32 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Meet Our Team"
          title={["건강한 변화를 함께할", "어반짐 트레이너"]}
          aside={["지도 철학부터 경력과 교육 이력까지,", "함께할 트레이너를 만나보세요."]}
        />

        <div className="mt-14 grid items-start gap-8 md:grid-cols-3 md:gap-5 lg:mt-16 lg:gap-7">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              aria-labelledby={`${trainer.id}-name`}
              className="overflow-hidden rounded-[24px] border border-warm-200 bg-warm-50"
            >
              <Photo
                src={trainer.image}
                alt={`어반짐 ${trainer.name} ${trainer.role} 프로필 사진`}
                className="aspect-[4/5]"
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1319px) 30vw, 385px"
                position="center 20%"
                zoom={false}
              />
              <div className="flex flex-col p-6 md:min-h-[340px] md:p-5 lg:min-h-[330px] lg:p-7">
                <p className="eyebrow text-accent">{trainer.roleEn}</p>
                <h3 id={`${trainer.id}-name`} className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-[28px] font-semibold tracking-[-0.03em]">{trainer.name}</span>
                  <span className="text-[14px] font-medium text-warm-600">{trainer.role}</span>
                </h3>
                <blockquote className="mt-5 space-y-2 border-l-2 border-accent-soft pl-4">
                  {trainer.slogans.map((slogan, i) => (
                    <p
                      key={slogan}
                      className={i === 0 ? "text-[16px] font-medium leading-[1.8] text-ink" : "text-[13px] leading-[1.8] text-warm-600"}
                    >
                      {slogan}
                    </p>
                  ))}
                </blockquote>
                <ul className="mt-6 space-y-2 text-[13px] leading-[1.8] text-warm-600 md:mt-auto md:pt-6">
                  {trainer.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <details className="group/profile border-t border-warm-200">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-6 py-4 text-[14px] font-medium text-accent transition-colors hover:bg-warm-200/40 md:px-5 lg:px-7 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="sr-only">{trainer.name} </span>
                    <span className="group-open/profile:hidden">전체 프로필 보기</span>
                    <span className="hidden group-open/profile:inline">프로필 접기</span>
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-5 w-5 shrink-0 transition-transform group-open/profile:rotate-180"
                  >
                    <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="space-y-7 px-6 pb-7 pt-3 md:px-5 lg:px-7">
                  {trainer.sections.map((section, i) => (
                    <div key={section.title}>
                      <h4 className="flex items-baseline gap-2 text-[15px] font-semibold text-ink">
                        <span className="font-display text-[12px] font-medium text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {section.title}
                      </h4>
                      {section.groups.map((group, groupIndex) => (
                        <div key={group.title ?? groupIndex} className="mt-3">
                          {group.title ? <p className="mb-2 text-[13px] font-medium text-accent">{group.title}</p> : null}
                          <ul className="space-y-2.5 text-[13px] leading-[1.85] text-warm-600">
                            {group.items.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-warm-400" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
