import type { FaqItem } from "../data/content";
import { BUSINESS } from "../data/business";
import { CtaButton, GradientText, LightningIcon, PlusIcon, QuestionIcon, WhatsAppIcon } from "./ui";

export default function FAQSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-3" style={{ scrollMarginTop: "90px" }}>
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:rounded-[2rem] md:p-9">
        <div className="mb-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
            <QuestionIcon className="h-3.5 w-3.5" />
            Preguntas frecuentes
          </p>
          <h2 className="mt-4 font-display text-[30px] uppercase leading-[0.95] tracking-[0.005em] text-slate-950 sm:text-4xl md:text-5xl">
            Dudas habituales antes de
            <GradientText className="block">contratar un DJ</GradientText>
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-2.5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.25rem] border border-slate-200 bg-slate-50/70 px-5 py-4 transition open:border-sky-200 open:bg-white open:shadow-[0_12px_30px_rgba(15,23,42,0.07)] hover:border-slate-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold text-slate-950 transition group-hover:text-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 md:text-base">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition duration-200 group-open:rotate-45 group-open:bg-sky-600 group-open:text-white"
                >
                  <PlusIcon className="h-3.5 w-3.5" />
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-5 rounded-[1.35rem] border border-sky-100 bg-sky-50/60 px-6 py-5 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-[15px] font-semibold leading-7 text-slate-700 md:text-base">
            ¿Tu duda no está aquí?{" "}
            <GradientText className="font-bold">Pregúntanos directamente</GradientText> y te respondemos hoy
            mismo.
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <CtaButton href="#formulario" variant="solid">
              <LightningIcon />
              Pedir presupuesto
            </CtaButton>
            <CtaButton href={BUSINESS.whatsappHref} variant="outline-light">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
