import Container from "./Container";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="bg-warm-100 py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid overflow-hidden rounded-[24px] bg-ink lg:grid-cols-2">
          <div className="px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-24">
            <Reveal>
              <p className="eyebrow text-accent-soft">Visit Urban Gym</p>
              <h2 className="mt-6 text-[32px] font-semibold leading-[1.25] tracking-[-0.03em] text-white sm:text-[44px]">
                평거동에서<br />가까이 만나는 어반짐.
              </h2>
              <div className="mt-11 space-y-6 border-t border-white/20 pt-8">
                <div className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                  <div>
                    <p className="text-[15px] font-semibold text-white">{site.contact.address}</p>
                    <p className="mt-1 text-[14px] text-warm-300">{site.contact.addressDetail}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                  <p className="text-[15px] text-warm-200">{site.hours[0].value}</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                  <a href={site.phoneUrl} className="text-[15px] text-warm-200 underline-offset-4 hover:underline">{site.contact.phone}</a>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-warm-50 px-6 py-3.5 text-[14px] font-semibold text-ink transition-colors hover:bg-white">
                  네이버 지도에서 위치 보기 <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a href={site.phoneUrl} className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-white/10">
                  전화 문의
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden bg-[#35443a] p-8 text-white sm:p-12 lg:min-h-[560px] lg:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden="true" style={{backgroundImage:"linear-gradient(#e4e9df 1px, transparent 1px), linear-gradient(90deg,#e4e9df 1px,transparent 1px)",backgroundSize:"55px 55px"}} />
            <div className="pointer-events-none absolute left-1/2 top-[35%] -z-10 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-[400px] sm:w-[400px]" aria-hidden="true" />
            <div className="pointer-events-none absolute left-1/2 top-[35%] -z-10 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 sm:h-[260px] sm:w-[260px]" aria-hidden="true" />
            <span className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-warm-50 p-5 text-accent shadow-[0_20px_80px_rgba(0,0,0,.22)]" aria-hidden="true"><Icon name="pin" className="h-8 w-8" /></span>
            <p className="font-display text-[11px] uppercase tracking-[0.3em] text-white/60">JINJU · PYEONGGEO-DONG</p>
            <p className="mt-4 text-[34px] font-semibold tracking-tight sm:text-[45px]">URBAN GYM</p>
            <p className="mt-2 text-[15px] text-warm-200">{site.contact.addressDetail}</p>
            <p className="mt-8 border-t border-white/20 pt-5 text-[13px] leading-[1.8] text-warm-200">차량으로 방문하시나요? 주차 이용 방법은 전화로 편하게 문의해 주세요.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
