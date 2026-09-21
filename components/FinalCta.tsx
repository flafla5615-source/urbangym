import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { images, site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink">
      {/* 배경 이미지 + 어두운 오버레이 */}
      <Photo
        src={images.cta}
        alt=""
        sizes="100vw"
        zoom={false}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink/80 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/85 via-ink/70 to-ink/90"
      />

      <Container className="py-28 md:py-36 lg:py-44">
        <Reveal>
          <Logo tone="light" showText={false} />
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <p className="font-display text-[11px] uppercase tracking-[0.3em] text-accent-soft">
                Start Today
              </p>
              <h2 className="mt-6 text-[30px] font-semibold leading-[1.3] tracking-[-0.02em] text-warm-50 sm:text-[38px] lg:text-[48px]">
                어반짐에서 더 편한 운동을 시작해보세요
              </h2>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-10">
                <Button href={site.contactUrl} variant="light">
                  지금 상담하기
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240} className="lg:col-span-4">
            <div className="border-t border-warm-50/20 pt-8 lg:text-right">
              <p className="text-[16px] leading-[1.9] text-warm-200">
                <span className="block">건강한 오늘이</span>
                <span className="block">더 나은 내일을 만듭니다.</span>
              </p>
              <p className="mt-6 text-[14px] font-medium text-warm-50">
                {site.brand.ko}{" "}
                <span className="font-display ml-1 text-[12px] uppercase tracking-[0.22em] text-warm-400">
                  {site.brand.en}
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
