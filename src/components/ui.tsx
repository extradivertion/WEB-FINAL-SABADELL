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

export function LightningIcon({ className = "h-4 w-4 md:h-5 md:w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 2 4 13.2c-.36.42-.06 1.07.5 1.07h5.05l-1.1 7.35c-.09.6.68.94 1.05.46L20 10.88c.35-.42.05-1.06-.5-1.06h-5.06l1.11-7.36c.09-.6-.68-.94-1.05-.46z" />
    </svg>
  );
}

export function InstantReplyBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute -top-4 -left-3 z-10 inline-flex -rotate-[8deg] items-center gap-1.5 whitespace-nowrap rounded-full border-[3px] border-white bg-orange-500 px-3 py-1 text-[10px] font-black uppercase tracking-[0.06em] text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.45)] md:-top-[18px] md:text-[11px] ${className}`}
    >
      <LightningIcon className="h-3 w-3" />
      Respuesta inmediata
    </span>
  );
}

export function MapPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export function DiscIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 13.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4z" opacity=".35" />
      <circle cx="12" cy="12" r="2.1" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2 2.9 6.26 6.85.72-5.1 4.6 1.42 6.72L12 16.9l-6.07 3.4 1.42-6.72-5.1-4.6 6.85-.72z" />
    </svg>
  );
}

export function SpeakerIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7 3.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zm0 6.1a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8z" />
    </svg>
  );
}

export function ExpandIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 3H3v6M15 21h6v-6M21 9V3h-6M3 15v6h6" />
    </svg>
  );
}

export function QuestionIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.1 15.6a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm1.8-5.6c-.7.5-.9.8-.9 1.4v.3h-1.9v-.4c0-1.2.4-1.9 1.4-2.6.7-.5.9-.8.9-1.3 0-.6-.5-1-1.3-1s-1.3.4-1.4 1.2H8.7c.1-1.8 1.4-2.9 3.4-2.9 2 0 3.3 1 3.3 2.6 0 1-.4 1.7-1.5 2.4z" />
    </svg>
  );
}

export function PlusIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v.4l-9 5.35-9-5.35v-.4zm0 2.72V18.5A1.5 1.5 0 0 0 4.5 20h15a1.5 1.5 0 0 0 1.5-1.5V8.22l-8.49 5.05a1 1 0 0 1-1.02 0L3 8.22z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1z" />
    </svg>
  );
}
