import Container from "./Container";
import Icon from "./Icon";
import Reveal from "./Reveal";
import NaverMap from "./NaverMap";
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
          <NaverMap />
        </div>
      </Container>
    </section>
  );
}
