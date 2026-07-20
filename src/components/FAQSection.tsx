import type { FaqItem } from "../data/content";
import { BUSINESS } from "../data/business";
import { CtaButton, GradientText } from "./ui";

export default function FAQSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-12" style={{ scrollMarginTop: "90px" }}>
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:rounded-[2rem] md:p-9">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">Preguntas frecuentes</p>
          <h2 className="mt-3 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 drop-shadow-[0_2px_10px_rgba(15,23,42,0.06)] sm:text-4xl md:text-5xl">
            Dudas habituales antes de
            <GradientText className="block">contratar un DJ</GradientText>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.1rem] border border-slate-200 bg-slate-50/80 px-4 py-3.5 md:rounded-[1.25rem] md:px-5 md:py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[15px] font-bold text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 md:text-base">
                {faq.question}
                <span aria-hidden="true" className="shrink-0 text-sky-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-[1.35rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-5 text-center shadow-[0_14px_34px_rgba(15,23,42,0.07)] md:mt-8 md:rounded-[1.6rem] md:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-sky-700/80">¿Tienes una fecha en mente?</p>
          <h3 className="mt-3 text-xl font-black uppercase leading-tight text-slate-950 md:text-3xl">
            Cuéntanos la idea y te preparamos
            <GradientText className="block">una propuesta a medida</GradientText>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Revisamos disponibilidad, ubicación, horario y necesidades técnicas para darte una respuesta clara y
            adaptada a tu evento.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton href="#formulario" variant="solid">
              Pedir presupuesto
            </CtaButton>
            <CtaButton href={BUSINESS.whatsappHref} variant="outline-light">
              Hablar por WhatsApp
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
