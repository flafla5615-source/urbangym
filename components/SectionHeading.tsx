import Reveal from "./Reveal";

/**
 * 섹션 상단 공통 헤딩.
 * 좌측 = 큰 타이틀 / 우측 = 보조 문구 형태의 스플릿 레이아웃입니다.
 */
export default function SectionHeading({
  eyebrow,
  title,
  aside,
  className = "",
  tone = "dark",
}: {
  /** 작은 영문 라벨 */
  eyebrow?: string;
  /** 줄바꿈이 필요하면 배열로 전달 */
  title: string | string[];
  /** 우측 보조 문구 */
  aside?: string[];
  className?: string;
  tone?: "dark" | "light";
}) {
  const titleLines = Array.isArray(title) ? title : [title];
  const titleColor = tone === "light" ? "text-warm-50" : "text-ink";
  const asideColor = tone === "light" ? "text-warm-300" : "text-warm-600";
  const eyebrowColor = tone === "light" ? "text-accent-soft" : "text-accent";

  return (
    <div
      className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16 ${className}`}
    >
      <Reveal className="max-w-2xl">
        {eyebrow && (
          <p className={`eyebrow mb-5 ${eyebrowColor}`}>{eyebrow}</p>
        )}
        <h2
          className={`text-[30px] font-semibold leading-[1.28] tracking-[-0.02em] sm:text-[38px] lg:text-[46px] ${titleColor}`}
        >
          {titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </Reveal>

      {aside && (
        <Reveal delay={120} className="md:shrink-0 md:pb-2">
          <p className={`text-[15px] leading-[1.85] md:text-right ${asideColor}`}>
            {aside.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </Reveal>
      )}
    </div>
  );
}
