import Icon from "./Icon";

type Variant = "solid" | "outline" | "light";

export default function Button({
  href, children, variant = "solid", withArrow = true, className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}) {
  const external = href.startsWith("https://");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`button button-${variant} ${className}`}>
      <span>{children}</span>{withArrow ? <Icon name="arrow" className="h-[18px] w-[18px]" /> : null}
    </a>
  );
}
