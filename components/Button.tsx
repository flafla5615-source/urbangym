import Icon from "./Icon";

type Variant = "solid" | "outline" | "light";

const styles: Record<Variant, string> = {
  /* 차콜 배경 — 주요 CTA */
  solid:
    "bg-ink text-warm-50 hover:bg-charcoal-soft border border-ink hover:border-charcoal-soft",
  /* 밝은 배경 위 보조 버튼 */
  outline:
    "bg-transparent text-ink border border-warm-300 hover:border-ink hover:bg-warm-100",
  /* 어두운 배경 위 흰색 버튼 */
  light:
    "bg-warm-50 text-ink border border-warm-50 hover:bg-white",
};

export default function Button({
  href,
  children,
  variant = "solid",
  withArrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group/btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <Icon
          name="arrow"
          className="h-[18px] w-[18px] transition-[translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1"
        />
      )}
    </a>
  );
}
