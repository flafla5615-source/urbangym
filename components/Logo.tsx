import { site } from "@/lib/site";

export default function Logo({ className = "", showText = true, tone = "dark" }: { className?: string; showText?: boolean; tone?: "dark" | "light" }) {
  return <span className={"brand-logo " + (tone === "light" ? "brand-light " : "") + className}>
    <svg viewBox="0 0 40 40" aria-hidden="true" fill="none"><circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1.4" /><path d="M13.4 12.6v9.1c0 3.7 2.9 6.5 6.6 6.5s6.6-2.8 6.6-6.5v-9.1" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" /></svg>
    {showText && <span className="brand-type"><strong>{site.brand.en}</strong><span>어반짐 평거점</span></span>}
  </span>;
}
