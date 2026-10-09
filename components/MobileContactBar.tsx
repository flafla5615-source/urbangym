import Icon from "./Icon";
import { site } from "@/lib/site";

/** 모바일 방문자의 네이버 예약과 전화 상담을 위한 고정 바. */
export default function MobileContactBar() {
  return (
    <nav aria-label="빠른 문의" className="fixed inset-x-0 bottom-0 z-[60] border-t border-warm-200 bg-warm-50/95 px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-[700px] gap-2.5">
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex h-[52px] flex-[.85] items-center justify-center gap-2 rounded-[14px] border border-warm-300 bg-white text-[15px] font-semibold text-ink">
            <Icon name="calendar" className="h-[18px] w-[18px]" /> 네이버 예약
        </a>
        <a href={site.phoneUrl} className="flex h-[52px] flex-[1.15] items-center justify-center gap-2 rounded-[14px] bg-ink text-[15px] font-semibold text-white transition-colors hover:bg-charcoal-soft">
          <Icon name="phone" className="h-[18px] w-[18px]" /> 전화 상담
        </a>
      </div>
    </nav>
  );
}
