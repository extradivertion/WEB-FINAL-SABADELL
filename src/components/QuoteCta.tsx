import { BUSINESS } from "../data/business";
import { CheckIcon, CtaButton, InstantReplyBadge, LightningIcon, WhatsAppIcon } from "./ui";

const POINTS = ["Sin compromiso", "Disponibilidad al momento", "Presupuesto cerrado"];

export default function QuoteCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-3">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 shadow-[0_26px_60px_rgba(15,23,42,0.32)] md:px-12 md:py-14">
        {/* Halos de color y retícula de fondo */}
        <div className="pointer-events-none absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]"
        />

        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:gap-12 lg:text-left">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-sky-100">
              <LightningIcon className="h-3.5 w-3.5" />
              Respuesta en menos de 1 hora
            </p>

            <h2 className="mt-4 font-display text-[32px] uppercase leading-[0.95] tracking-[0.005em] text-white sm:text-5xl md:text-6xl">
              Cuéntanos tu evento
              <span className="block bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                y te decimos precio
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300 lg:mx-0 md:text-lg">
              Dinos fecha, sitio y qué tipo de celebración es. Revisamos disponibilidad y te mandamos una
              propuesta ajustada a tu espacio y a tu público.
            </p>

            <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                  <CheckIcon className="h-4 w-4 shrink-0 text-sky-300" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:flex-col lg:items-stretch">
            <CtaButton
              href="#formulario"
              size="xl"
              variant="solid-invert"
              pulse
              className="mt-1 w-full sm:w-auto lg:w-full"
            >
              <InstantReplyBadge />
              <LightningIcon />
              Pedir presupuesto
            </CtaButton>

            <CtaButton
              href={BUSINESS.whatsappHref}
              size="xl"
              variant="outline-dark"
              className="w-full sm:w-auto lg:w-full"
            >
              <WhatsAppIcon />
              Hablar por WhatsApp
            </CtaButton>

            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="mt-1 text-sm font-semibold text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
            >
              o llámanos al {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
