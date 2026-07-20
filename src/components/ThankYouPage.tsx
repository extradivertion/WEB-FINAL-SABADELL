import { BUSINESS } from "../data/business";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-white">
      <div className="w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-[0_24px_60px_rgba(2,6,23,0.45)] backdrop-blur md:p-12">
        <div
          aria-hidden="true"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-3xl text-emerald-300"
        >
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl">
          Solicitud enviada
        </h1>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-300 md:text-lg">
          Gracias por tu solicitud de presupuesto. Te responderemos lo antes posible para preparar una propuesta a
          medida para tu evento.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-sky-900 shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Volver al inicio
          </a>
          <a
            href={BUSINESS.whatsappHref}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Extradivertion · DJ para eventos
        </p>
      </div>
    </div>
  );
}
