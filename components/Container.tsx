/** 페이지 전체에서 쓰는 공통 가로 여백 컨테이너 */
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-14 ${className}`}
    >
      {children}
    </div>
  );
}
