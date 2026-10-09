"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 모바일 메뉴가 열려 있을 때 배경 스크롤 잠금 */
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", onDesktop);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onDesktop);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-warm-50/90 backdrop-blur-md transition-[border-color] duration-500 ${
        scrolled || open ? "border-b border-warm-200" : "border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between lg:h-[84px]">
          {/* 좌측 : 로고 */}
          <a href="#top" className="shrink-0" aria-label="어반짐 평거점 홈" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          {/* 중앙 : 메뉴 (데스크톱) */}
          <nav className="hidden lg:block" aria-label="주요 메뉴">
            <ul className="flex items-center gap-10">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative py-2 text-[15px] text-warm-600 transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-[scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 우측 : CTA + 모바일 토글 */}
          <div className="flex items-center gap-2">
            <a
              href={site.contactUrl}
              className="hidden rounded-full border border-ink bg-ink px-6 py-2.5 text-[14px] font-medium text-warm-50 transition-colors duration-300 hover:bg-charcoal-soft sm:inline-flex"
            >
              상담 문의
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:bg-warm-100 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* 모바일 메뉴 */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-160px)] overflow-y-auto border-t border-warm-200 bg-warm-50 lg:hidden"
      >
        <Container>
          <nav aria-label="모바일 메뉴">
            <ul className="flex flex-col py-4">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-warm-200/70 py-4 text-[17px] text-ink last:border-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.contactUrl}
              onClick={() => setOpen(false)}
              className="mb-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-warm-50 sm:hidden"
            >
              상담 문의
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
