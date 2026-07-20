import { BUSINESS } from "../data/business";

export default function DirectContact() {
  return (
    <div
      id="contacto-directo"
      className="mx-auto w-full max-w-3xl rounded-[1.5rem] border border-white/15 bg-white/10 px-5 py-7 text-center shadow-[0_18px_45px_rgba(2,6,23,0.18)] backdrop-blur md:rounded-[2rem] md:px-8 md:py-10"
      style={{ scrollMarginTop: "90px" }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">Contacto directo</p>
      <h2 className="mt-3 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-white md:text-5xl">
        Hablemos de <span className="block text-sky-200">tu evento</span>
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
        Si buscas un DJ para eventos en Barcelona, Sabadell, Terrassa o Vallès Occidental, escríbenos por WhatsApp o
        mándanos un correo con los detalles del evento.
      </p>

      <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-4 text-center">
        <a
          href={BUSINESS.whatsappHref}
          className="w-full rounded-full bg-white px-6 py-4 text-center text-base font-semibold text-sky-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          WhatsApp · Respondemos en 24h
        </a>
        <a
          href={`mailto:${BUSINESS.email}`}
          className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Escribir por correo
        </a>
      </div>
    </div>
  );
}
