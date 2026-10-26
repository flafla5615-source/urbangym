"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
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
    <header className="site-header">
      <Container>
        <div className="header-row">
          <a href="#top" aria-label="어반짐 평거점 홈" onClick={() => setOpen(false)} className="brand-home"><Logo subtitle="평거점 · 진주 평거동" /></a>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {site.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="header-booking"><Icon name="calendar" className="h-4 w-4" /><span>네이버 예약</span></a>
            <button ref={toggleRef} type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="mobile-menu" className="menu-toggle"><Icon name={open ? "close" : "menu"} className="h-6 w-6" /></button>
          </div>
        </div>
      </Container>
      <div id="mobile-menu" hidden={!open} className="mobile-menu">
        <Container>
          <nav aria-label="모바일 메뉴">
            {site.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow" className="h-5 w-5" /></a>)}
            <a href={site.phoneUrl} onClick={() => setOpen(false)}>전화 상담 <span>{site.contact.phone}</span></a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
