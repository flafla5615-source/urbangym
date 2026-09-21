import Container from "./Container";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { images } from "@/lib/site";

export default function Philosophy() {
  return (
    /* 위쪽 여백 없이 사진이 바로 붙도록 — 밝은 섹션과의 대비를 살립니다 */
    <section className="bg-ink pb-24 md:pb-32 lg:pb-40">
      {/* 풀블리드 와이드 이미지 */}
      <Reveal>
        <div className="group">
          <Photo
            src={images.philosophy}
            alt="어반짐 전체 공간 전경"
            sizes="100vw"
            zoom={false}
            position="center 62%"
            className="h-[46vh] min-h-[300px] w-full sm:h-[58vh] lg:h-[68vh]"
          />
        </div>
      </Reveal>

      <Container className="mt-16 lg:mt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.02em] text-warm-50 sm:text-[38px] lg:text-[46px]">
              <span className="block">운동만 하는 곳이 아니라,</span>
              <span className="block">관리받는 곳</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <p className="text-[16px] leading-[1.95] text-warm-300 lg:text-[17px]">
              <span className="block">
                어반짐은 단순히 회원권만 등록하는 공간이 아니라,
              </span>
              <span className="block">
                더 편하게 시작하고 더 꾸준히 이어갈 수 있도록
              </span>
              <span className="block">관리하는 헬스장을 지향합니다.</span>
            </p>

            <div className="mt-12 flex items-center gap-5 border-t border-charcoal-soft pt-8">
              <span className="font-display text-[11px] uppercase tracking-[0.3em] text-warm-50">
                Urban Gym
              </span>
              <span className="h-px flex-1 bg-charcoal-soft" />
              <span className="font-display text-[11px] uppercase tracking-[0.3em] text-accent-soft">
                A Better Tomorrow
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
