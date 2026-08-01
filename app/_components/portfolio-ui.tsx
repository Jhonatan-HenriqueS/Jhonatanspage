import Image from "next/image";
import type { ReactNode } from "react";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark" | "outline" | "ghost";
  className?: string;
  showArrow?: boolean;
  ariaLabel?: string;
};

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M3 10h14M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PillLink({
  href,
  children,
  variant = "dark",
  className = "",
  showArrow = true,
  ariaLabel,
}: PillLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      aria-label={ariaLabel}
      className={`pill-link pill-link--${variant} ${className}`}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span>{children}</span>
      {showArrow ? <ArrowUpRight className="pill-link__icon" /> : null}
    </a>
  );
}

export function SectionEyebrow({
  index,
  children,
  light = false,
}: {
  index: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`section-eyebrow reveal${light ? " section-eyebrow--light" : ""}`}
    >
      <span>{index}</span>
      <p>{children}</p>
    </div>
  );
}

type ProjectMediaProps = {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
};

export function ProjectMedia({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: ProjectMediaProps) {
  return (
    <Image
      alt={alt}
      className={className}
      fill
      priority={priority}
      sizes={sizes}
      src={src}
    />
  );
}
