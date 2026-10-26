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
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", onDesktop);
    document.addEventListener("keydown", onKeyDown);
    return () => { desktop.removeEventListener("change", onDesktop); document.removeEventListener("keydown", onKeyDown); };
  }, [open]);
  return <header className="site-header"><Container>
    <div className="header-row">
      <a href="#top" aria-label="어반짐 평거점 홈" onClick={() => setOpen(false)}><Logo /></a>
      <nav className="desktop-nav" aria-label="주요 메뉴"><ul>{site.nav.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></nav>
      <div className="header-actions"><a className="header-contact" href={site.phoneUrl}>회원권 · PT 문의 <Icon name="arrow" /></a><button ref={toggleRef} type="button" onClick={() => setOpen(!open)} aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} aria-controls="mobile-menu" className="menu-toggle"><Icon name={open ? "close" : "menu"} /></button></div>
    </div>
    <nav id="mobile-menu" hidden={!open} className="mobile-menu" aria-label="모바일 메뉴"><ul>{site.nav.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)}>{item.label}<Icon name="arrow" /></a></li>)}</ul><a className="action action-dark" href={site.phoneUrl}>회원권 · PT 전화 문의 <Icon name="phone" /></a></nav>
  </Container></header>;
}
