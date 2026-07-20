import { REVIEWS } from "../data/content";

const getReviewInitial = (name: string) => name.split("·")[0].trim().charAt(0).toUpperCase();

export default function Testimonials() {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)] md:rounded-[1.75rem]">
      <div className="flex flex-col gap-4 border-b border-slate-200 bg-slate-50/80 p-5 md:flex-row md:items-end md:justify-between md:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.30em] text-sky-700/75">Reseñas</p>
          <h2 className="mt-2 text-[26px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 md:text-4xl">
            Eventos con música cuidada
            <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
              y ambiente de verdad
            </span>
          </h2>
        </div>

        <div className="inline-flex w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 shadow-[0_8px_18px_rgba(15,23,42,0.05)]">
          Experiencias reales
        </div>
      </div>

      <div className="grid gap-4 p-5 md:grid-cols-3 md:p-7">
        {REVIEWS.map((item) => (
          <article
            key={item.name}
            className="group flex h-full flex-col rounded-[1.2rem] border border-slate-200 bg-white p-4 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] md:rounded-[1.35rem] md:p-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-sky-300 text-base font-black text-white shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
                {getReviewInitial(item.name)}
              </div>
              <div>
                <p className="text-sm font-black text-slate-950">{item.name}</p>
                <p className="text-xs font-semibold text-slate-500">{item.location}</p>
              </div>
            </div>

            <div className="mb-3 flex gap-1 text-sky-700" aria-label="Valoración de 5 estrellas">
              <span aria-hidden="true">★★★★★</span>
            </div>

            <p className="flex-1 text-sm leading-7 text-slate-600 md:text-[15px]">“{item.text}”</p>

            <div className="mt-5 rounded-full bg-sky-50 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
              Servicio DJ a medida
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
