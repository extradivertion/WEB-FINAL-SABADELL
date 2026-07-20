import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "solid-invert" | "outline-dark" | "outline-light";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  solid:
    "bg-sky-700 text-white shadow-[0_14px_30px_rgba(3,105,161,0.32)] hover:-translate-y-0.5 hover:bg-sky-800",
  "solid-invert":
    "bg-white text-sky-900 shadow-[0_16px_34px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:bg-slate-100",
  "outline-dark":
    "border border-white/25 bg-white/10 text-white shadow-[0_14px_30px_rgba(2,6,23,0.22)] backdrop-blur hover:-translate-y-0.5 hover:bg-white/15",
  "outline-light":
    "border border-slate-200 bg-white text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.04)] hover:bg-slate-50",
};

const BASE_BUTTON_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-[0.01em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

export function CtaButton({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: ButtonVariant; size?: "md" | "lg" }) {
  const sizeClasses = size === "lg" ? "px-7 py-4 text-sm md:px-9 md:py-4 md:text-base" : "px-6 py-3 text-sm md:text-base";
  return (
    <a className={`${BASE_BUTTON_CLASSES} ${sizeClasses} ${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">{children}</p>
  );
}

export function GradientText({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const gradient = dark ? "from-white via-sky-200 to-cyan-300" : "from-sky-700 via-cyan-500 to-sky-400";
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>{children}</span>
  );
}

export function GlowBlobs() {
  return (
    <>
      <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-cyan-100/60 blur-3xl" />
    </>
  );
}
