import { REVIEWS } from "../data/content";
import { StarIcon } from "./ui";

const getReviewInitial = (name: string) => name.split("·")[0].trim().charAt(0).toUpperCase();
const getReviewName = (name: string) => name.split("·")[0].trim();
const getReviewEvent = (name: string) => (name.split("·")[1] ?? "").trim();

export default function Testimonials() {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.06)] md:rounded-[2rem] md:p-10">
      <div className="mb-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
          <StarIcon className="h-3.5 w-3.5" />
          Reseñas
        </p>

        <h2 className="mt-4 font-display text-[28px] uppercase leading-[0.95] tracking-[0.005em] text-slate-950 sm:text-4xl md:text-5xl">
          Eventos con música cuidada
          <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
            y ambiente de verdad
          </span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {REVIEWS.map((item) => (
          <article
            key={item.name}
            className="group relative flex h-full flex-col rounded-[1.35rem] border border-slate-200 bg-slate-50/60 p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-[0_18px_38px_rgba(15,23,42,0.09)]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-2 font-display text-6xl leading-none text-sky-500/15 transition group-hover:text-sky-500/25"
            >
              ”
            </span>

            <div className="flex gap-0.5 text-amber-400" role="img" aria-label="Valoración: 5 de 5 estrellas">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </div>

            <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-700">{item.text}</p>

            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-sky-300 font-display text-lg text-white shadow-[0_6px_16px_rgba(15,23,42,0.12)]">
                {getReviewInitial(item.name)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-950">{getReviewName(item.name)}</p>
                <p className="truncate text-xs font-semibold text-slate-500">
                  {getReviewEvent(item.name)}
                  {getReviewEvent(item.name) && " · "}
                  {item.location}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
