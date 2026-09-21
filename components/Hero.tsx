import Button from "./Button";
import Container from "./Container";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { images, site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative bg-warm-50 pt-[76px] lg:pt-0">
      <div className="grid items-stretch lg:min-h-[100dvh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        {/* ── 좌측 : 카피 ─────────────────────── */}
        <div className="order-2 flex items-center py-16 md:py-24 lg:order-1 lg:py-0">
          <Container className="lg:ml-auto lg:mr-0 lg:max-w-[680px] lg:pr-16">
            <Reveal>
              <p className="eyebrow text-accent">A Healthier You at Urban Gym</p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-7 text-[32px] font-semibold leading-[1.3] tracking-[-0.025em] text-ink sm:text-[42px] lg:text-[52px] lg:leading-[1.24]">
                <span className="block text-warm-500">
                  시설만 좋은 헬스장은 많습니다
                </span>
                <span className="mt-2 block">
                  어반짐은 관리가 다른 헬스장입니다
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-8 text-[15px] leading-[1.9] text-warm-600 sm:text-[16px]">
                전문트레이너 · 청결한 시설 · 친절한 직원 · 관리형 헬스장
              </p>
              <p className="mt-3 text-[15px] leading-[1.9] text-warm-500 sm:text-[16px]">
                운동이 더 나은 일상이 되는 곳
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-11 flex flex-wrap items-center gap-3">
                <Button href={site.contactUrl}>상담 문의</Button>
                <Button href="#facility" variant="outline" withArrow={false}>
                  시설 둘러보기
                </Button>
              </div>
            </Reveal>

            {/* 하단 브랜드 라인 */}
            <Reveal delay={330}>
              <div className="mt-14 flex items-center gap-4 border-t border-warm-200 pt-7">
                <span className="font-display text-[11px] uppercase tracking-[0.28em] text-warm-400">
                  Urban Gym
                </span>
                <span className="h-px flex-1 bg-warm-200" />
                <span className="font-display text-[11px] uppercase tracking-[0.28em] text-warm-400">
                  Managed Fitness
                </span>
              </div>
            </Reveal>
          </Container>
        </div>

        {/* ── 우측 : 프론트 데스크 메인 비주얼 ── */}
        <div className="group order-1 lg:order-2">
          <Photo
            src={images.hero}
            alt="어반짐 프론트 데스크 전경"
            priority
            zoom={false}
            position="center 32%"
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="h-[52vh] min-h-[340px] w-full sm:h-[62vh] lg:h-full lg:min-h-[100dvh]"
          />
        </div>
      </div>
    </section>
  );
}
