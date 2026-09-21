import Container from "./Container";
import Icon, { type IconName } from "./Icon";
import Logo from "./Logo";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "이용안내", href: "#info" },
  { label: "오시는 길", href: site.mapUrl },
  { label: "상담문의", href: site.contactUrl },
];

/** 주소 · 운영시간 · 연락처 — 확정 전까지 placeholder */
const infoBlocks: { icon: IconName; label: string; lines: string[] }[] = [
  {
    icon: "pin",
    label: "오시는 길",
    lines: [site.contact.address, site.contact.addressDetail],
  },
  {
    icon: "clock",
    label: "운영시간",
    lines: site.hours.map((h) => `${h.label} · ${h.value}`),
  },
  {
    icon: "phone",
    label: "연락처",
    lines: [site.contact.phone, `주차 ${site.contact.parking}`],
  },
];

export default function Footer() {
  return (
    <footer id="info" className="border-t border-warm-200 bg-warm-50">
      <Container>
        {/* 이용안내 : 주소 · 운영시간 · 연락처 */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-20">
          {infoBlocks.map((block) => (
            <div key={block.label}>
              <div className="flex items-center gap-2.5 text-warm-500">
                <Icon name={block.icon} className="h-[18px] w-[18px]" />
                <span className="text-[13px] font-medium tracking-[-0.01em]">
                  {block.label}
                </span>
              </div>
              <div className="mt-4 space-y-1.5">
                {block.lines.map((line, i) => (
                  <p
                    key={`${block.label}-${i}`}
                    className="text-[15px] leading-[1.75] text-ink"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 바 */}
        <div className="flex flex-col gap-8 border-t border-warm-200 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:gap-12">
            <Logo />
            <nav aria-label="푸터 메뉴">
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-warm-600 transition-colors duration-300 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:text-right">
            <p className="font-display text-[12px] font-medium uppercase tracking-[0.28em] text-ink">
              {site.brand.en}
            </p>
            <p className="font-display mt-2 text-[10.5px] uppercase tracking-[0.24em] text-warm-400">
              {site.brand.tagline}
            </p>
          </div>
        </div>

        <div className="border-t border-warm-200 py-7">
          <p className="text-[12.5px] text-warm-400">
            © {new Date().getFullYear()} {site.brand.ko} {site.brand.en}. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
