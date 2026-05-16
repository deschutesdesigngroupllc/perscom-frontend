import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600 focus-visible:ring-offset-ink-950 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_8px_30px_-10px_rgba(37,99,235,0.6)] hover:bg-brand-500 hover:shadow-[0_12px_40px_-10px_rgba(37,99,235,0.8)] hover:-translate-y-0.5",
  secondary:
    "bg-ink-900/80 text-white border border-white/10 backdrop-blur-md hover:bg-ink-800 hover:-translate-y-0.5",
  ghost:
    "text-ink-700 hover:text-ink-900 hover:bg-ink-900/5",
  white:
    "bg-white text-ink-900 hover:bg-ink-50 hover:-translate-y-0.5 shadow-lg",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = Common &
  Omit<ComponentProps<typeof Link>, "className"> & { href: string };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: LinkButtonProps) {
  const cls = clsx(base, sizes[size], variants[variant], className);
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
