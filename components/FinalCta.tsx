import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { images, site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo src={images.cta} alt="" sizes="100vw" zoom={false} position="center 58%" className="h-full w-full" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/95 via-ink/85 to-ink/95" />
      <Container className="py-24 md:py-36 lg:py-40">
        <Reveal><Logo tone="light" showText={false} /></Reveal>
        <div className="mt-9 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <p className="eyebrow text-accent-soft">Start Your Routine</p>
              <h2 className="mt-6 text-balance text-[32px] font-semibold leading-[1.28] tracking-[-0.035em] text-warm-50 sm:text-[42px] lg:text-[53px]">
                나에게 맞는 운동을,<br />오늘 어반짐에서 시작하세요.
              </h2>
              <p className="mt-6 text-[16px] leading-[1.85] text-warm-300">진주 평거동 · 24시간 연중무휴 · 헬스 &amp; PT</p>
            </Reveal>
            <Reveal delay={170}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href={site.phoneUrl} variant="light">전화로 상담하기</Button>
                <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10">오시는 길</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={240} className="lg:col-span-4">
            <div className="border-t border-warm-50/20 pt-8 lg:text-right">
              <p className="text-[16px] leading-[1.9] text-warm-200">당신의 하루에 맞춘<br />운동의 새로운 기준.</p>
              <p className="mt-6 font-display text-[12px] uppercase tracking-[0.22em] text-warm-300">URBAN GYM PYEONGGEO</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
