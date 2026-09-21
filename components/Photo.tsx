import Image from "next/image";

/**
 * 사진 공통 컴포넌트.
 * 사진을 아직 넣지 않았거나 로딩 중일 때도 웜그레이 배경이 깔려서
 * 레이아웃이 깨지지 않습니다.
 *
 * 부모에 `group` 클래스를 주면 hover 시 아주 살짝 확대됩니다.
 */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  zoom = true,
  position = "center",
}: {
  src: string;
  alt: string;
  /** 비율·모서리 등 외부 레이아웃 클래스 */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** hover 확대 효과 사용 여부 */
  zoom?: boolean;
  /**
   * 크롭 기준점 (CSS object-position).
   * 세로 사진을 가로 영역에 넣을 때 "center 30%" 처럼 조절하세요.
   */
  position?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-warm-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        style={{ objectPosition: position }}
        className={`object-cover ${
          zoom
            ? "transition-[scale] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            : ""
        }`}
      />
    </div>
  );
}
