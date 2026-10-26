import Icon from "./Icon";
import { site } from "@/lib/site";

export default function MobileContactBar() {
  return (
    <nav aria-label="빠른 문의" className="mobile-contact-bar">
      <div className="mobile-contact-inner">
        <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="floating-booking"><span className="naver-initial" aria-hidden="true">N</span>네이버 예약<Icon name="arrow" className="h-4 w-4" /></a>
        <a href={site.phoneUrl} className="floating-phone"><Icon name="phone" className="h-5 w-5" />전화 상담<Icon name="arrow" className="h-4 w-4" /></a>
      </div>
    </nav>
  );
}
