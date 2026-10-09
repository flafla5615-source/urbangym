import Button from "./Button";
import Container from "./Container";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { images, site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-warm-50 pt-[76px] lg:pt-[84px]">
      <div className="grid lg:min-h-[calc(100dvh-84px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)]">
        <div className="order-1 flex items-center py-10 sm:py-16 lg:py-16">
          <Container className="lg:ml-auto lg:mr-0 lg:max-w-[680px] lg:pr-16">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-warm-300/80 bg-white/80 px-4 py-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="eyebrow text-accent">JINJU · PYEONGGEO · 24H</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-7 text-balance text-[clamp(2rem,4.3vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.055em] text-ink sm:mt-9">
                운동이 일상이 되는 곳,
                <span className="mt-2 block text-accent">{site.brand.ko}.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[36ch] text-[15px] leading-[1.95] text-warm-600 sm:text-[18px]">
                나에게 맞는 시간에, 나에게 맞는 방식으로.
                <br />
                24시간 열려 있는 평거동의 헬스 &amp; PT 공간.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
                <Button href={site.contactUrl}>회원권 · PT 전화 문의</Button>
                <Button href="#facility" variant="outline" withArrow={false}>시설 둘러보기</Button>
              </div>
              <p className="mt-4 text-[12px] text-warm-500">가격 및 진행 중인 혜택은 상담 시 안내드립니다.</p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 grid max-w-[480px] grid-cols-3 border-t border-warm-300 pt-6 sm:mt-14">
                {[
                  ["24H", "365일 운영"],
                  ["FITNESS", "헬스 · PT"],
                  ["JINJU", "진주 평거동"],
                ].map(([value, label]) => (
                  <div key={value} className="border-r border-warm-200 px-3 first:pl-0 last:border-0">
                    <p className="font-display text-[15px] font-semibold tracking-[0.02em] text-ink sm:text-[18px]">{value}</p>
                    <p className="mt-1.5 text-[12px] text-warm-500">{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </div>
        <div className="group relative order-2 min-h-[340px] lg:min-h-[calc(100dvh-84px)]">
          <Photo
            src={images.hero}
            alt="어반짐 평거점 실내 시설"
            priority
            zoom={false}
            position="center 32%"
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="h-[48vh] min-h-[340px] w-full sm:h-[56vh] lg:h-full lg:min-h-[calc(100dvh-84px)]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/60 to-transparent" />
          <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-3 text-white sm:bottom-10 sm:left-10 sm:right-10">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.26em] text-white/70">Your space, your pace.</p>
              <p className="mt-2 text-[22px] font-semibold tracking-tight sm:text-[28px]">URBAN GYM</p>
            </div>
            <span className="font-display text-[12px] tracking-[0.16em] text-white/85">6F—7F</span>
          </div>
        </div>
      </div>
    </section>
  );
}
