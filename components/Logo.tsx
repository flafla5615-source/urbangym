import { site } from "@/lib/site";

/** U의 두 기둥과 중앙 바를 결합한 어반짐 벡터 로고. 단색·역상으로 사용합니다. */
export default function Logo({
  className = "",
  showText = true,
  tone = "dark",
  subtitle = site.brand.ko,
}: {
  className?: string;
  showText?: boolean;
  /** dark : 밝은 배경용 / light : 어두운 배경용 */
  tone?: "dark" | "light";
  subtitle?: string;
}) {
  const textColor = tone === "light" ? "text-warm-50" : "text-ink";
  const subColor = tone === "light" ? "text-warm-300" : "text-warm-500";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 56 56"
        aria-hidden="true"
        className={`h-10 w-10 shrink-0 ${textColor}`}
        fill="none"
      >
        <path
          d="M6 5h10v24c0 7 4.5 12 12 12s12-5 12-12V5h10v24c0 13-9 22-22 22S6 42 6 29V5Z"
          fill="currentColor"
        />
        <path d="M23 5h10v17H23z" fill="currentColor" />
      </svg>

      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[17px] font-normal uppercase tracking-[0.015em] ${textColor}`}
          >
            URBAN GYM
          </span>
          <span className={`mt-1 text-[11px] font-medium tracking-[-0.01em] ${subColor}`}>
            {subtitle}
          </span>
        </span>
      )}
    </span>
  );
}
