import { BUSINESS } from "../data/business";
import { ArrowRightIcon, LightningIcon, MailIcon, WhatsAppIcon } from "./ui";

const TOPICS = ["Colaboraciones", "Salas y locales", "Proveedores", "Prensa"];

export default function DirectContact() {
  return (
    <div
      id="contacto-directo"
      className="relative isolate overflow-hidden rounded-[1.75rem] bg-slate-950 px-6 py-8 shadow-[0_22px_50px_rgba(2,6,23,0.35)] md:px-10 md:py-10"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="pointer-events-none absolute -left-24 -top-28 -z-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]"
      />

      {/* Desvío al formulario: aquí no se piden presupuestos */}
      <a
        href="#formulario"
        className="group flex flex-col gap-3 rounded-2xl border border-sky-300/25 bg-sky-300/[0.08] px-5 py-4 transition hover:border-sky-300/50 hover:bg-sky-300/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-[15px] font-semibold leading-6 text-sky-50">
          <LightningIcon className="mr-2 inline h-4 w-4 align-[-2px] text-sky-300" />
          ¿Quieres presupuesto para tu evento? Se pide arriba, en el formulario.
        </p>
        <span className="inline-flex shrink-0 items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-sky-200 transition group-hover:gap-3 group-hover:text-white">
          Ir al formulario
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </a>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-100">
            <MailIcon className="h-3.5 w-3.5" />
            Contacto directo
          </p>

          <h2 className="mt-4 font-display text-[28px] uppercase leading-[0.95] tracking-[0.005em] text-white sm:text-4xl md:text-5xl">
            Contacto profesional
            <span className="block bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-400 bg-clip-text text-transparent">
              y colaboraciones
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300 md:text-base">
            Este canal es para todo lo que no sea contratar un evento. Escríbenos y te contestamos en 24 h.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-semibold text-slate-200"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-3">
          <a
            href={BUSINESS.whatsappHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-4 text-base font-bold text-sky-900 shadow-[0_14px_30px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>

          <a
            href={`mailto:${BUSINESS.email}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MailIcon className="h-5 w-5" />
            Escribir por correo
          </a>

          <p className="mt-1 break-all text-center text-[13px] font-semibold text-slate-400">{BUSINESS.email}</p>
        </div>
      </div>
    </div>
  );
}
