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
  "relative inline-flex items-center justify-center gap-2.5 rounded-full font-bold tracking-[0.01em] transition duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

const SIZE_CLASSES: Record<"md" | "lg" | "xl", string> = {
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-7 py-4 text-sm md:px-9 md:py-4 md:text-base",
  xl: "px-8 py-4.5 text-base md:px-11 md:py-5 md:text-lg",
};

export function CtaButton({
  variant = "solid",
  size = "md",
  pulse = false,
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: "md" | "lg" | "xl";
  pulse?: boolean;
}) {
  return (
    <a className={`${BASE_BUTTON_CLASSES} ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`} {...rest}>
      {pulse && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-current opacity-20 motion-reduce:hidden"
        />
      )}
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5 md:h-6 md:w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.58-.9-2.17-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.2 2.05 3.13 4.97 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.71-.7 1.96-1.37.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.35z"/>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.16h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.08.81.82-3-.19-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24z"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4 md:h-5 md:w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
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
