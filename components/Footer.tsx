import Container from "./Container";
import Icon, { type IconName } from "./Icon";
import Logo from "./Logo";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "시설 안내", href: "#facility" },
  { label: "헬스 · PT", href: "#program" },
  { label: "오시는 길", href: "#location" },
  { label: "인스타그램", href: site.instagramUrl },
] as const;

const infoBlocks: { icon: IconName; label: string; lines: string[] }[] = [
  { icon: "pin", label: "오시는 길", lines: [site.contact.address, site.contact.addressDetail] },
  { icon: "clock", label: "운영시간", lines: site.hours.map((h) => h.value) },
  { icon: "phone", label: "상담 및 주차", lines: [site.contact.phone, site.contact.parking] },
];

export default function Footer() {
  return (
    <footer id="info" className="border-t border-warm-200 bg-warm-50">
      <Container>
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-20">
          {infoBlocks.map((block) => (
            <div key={block.label}>
              <div className="flex items-center gap-2.5 text-warm-500">
                <Icon name={block.icon} className="h-[18px] w-[18px]" />
                <span className="text-[13px] font-medium">{block.label}</span>
              </div>
              <div className="mt-4 space-y-1.5">
                {block.lines.map((line, i) => (
                  <p key={`${block.label}-${i}`} className="text-[15px] leading-[1.75] text-ink">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 border-t border-warm-200 py-10 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("https://") ? "_blank" : undefined} rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined} className="text-[14px] text-warm-600 transition-colors hover:text-ink">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-warm-200 py-7 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-warm-500">© {new Date().getFullYear()} {site.brand.ko}. All rights reserved.</p>
          <a href={site.phoneUrl} className="text-[13px] font-medium text-ink">상담 {site.contact.phone} ↗</a>
        </div>
      </Container>
    </footer>
  );
}
