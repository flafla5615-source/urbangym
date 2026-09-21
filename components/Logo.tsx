/**
 * 임시 로고
 * ------------------------------------------------------------
 * 원형 테두리 + U 레터마크 조합입니다.
 * TODO: 실제 로고 파일(SVG)이 나오면 아래 <svg> 부분만 교체하면 됩니다.
 */
export default function Logo({
  className = "",
  showText = true,
  tone = "dark",
}: {
  className?: string;
  showText?: boolean;
  /** dark : 밝은 배경용 / light : 어두운 배경용 */
  tone?: "dark" | "light";
}) {
  const textColor = tone === "light" ? "text-warm-50" : "text-ink";
  const subColor = tone === "light" ? "text-warm-300" : "text-warm-500";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={`h-9 w-9 shrink-0 ${textColor}`}
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="19"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.45"
        />
        <path
          d="M13.4 12.6v9.1c0 3.7 2.9 6.5 6.6 6.5s6.6-2.8 6.6-6.5v-9.1"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <span className="flex flex-col leading-none">
          <span className={`text-[15px] font-semibold tracking-tight ${textColor}`}>
            어반짐
          </span>
          <span
            className={`font-display mt-1 text-[9.5px] font-medium uppercase tracking-[0.3em] ${subColor}`}
          >
            Urban Gym
          </span>
        </span>
      )}
    </span>
  );
}
