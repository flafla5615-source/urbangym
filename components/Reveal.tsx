"use client";

import { useEffect, useRef } from "react";

/**
 * 스크롤 진입 시 은은하게 나타나는 래퍼.
 * transform / opacity 만 사용하므로 성능 부담이 없습니다.
 * 모션을 원치 않으면 이 컴포넌트를 제거하고 children 만 남기면 됩니다.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  /** 밀리초 단위 지연 (카드 stagger 용) */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.IntersectionObserver || !el.animate) return;

    let animation: Animation | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animation = el.animate(
            [{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 700, delay, easing: "cubic-bezier(0.16,1,0.3,1)", fill: "backwards" },
          );
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => { observer.disconnect(); animation?.cancel(); };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}
