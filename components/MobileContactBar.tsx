import Icon from "./Icon";
import { site } from "@/lib/site";

export default function MobileContactBar() {
  return <nav className="mobile-contact-bar" aria-label="빠른 문의"><a href={site.phoneUrl}><Icon name="phone" />회원권 · PT 문의</a><a href={site.bookingUrl} target="_blank" rel="noopener noreferrer"><Icon name="calendar" />네이버 예약</a></nav>;
}
