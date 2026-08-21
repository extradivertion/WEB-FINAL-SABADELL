import { EQUIPMENT_ITEMS } from "../data/content";
import { CheckIcon, GradientText, SpeakerIcon } from "./ui";

export default function Equipment() {
  return (
    <div
      id="equipo-disponible"
      style={{ scrollMarginTop: "90px" }}
      className="relative isolate overflow-hidden rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] md:rounded-[2rem] md:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-100">
            <SpeakerIcon className="h-3.5 w-3.5" />
            Servicio incluido
          </p>

          <h2 className="mt-4 font-display text-[30px] uppercase leading-[0.95] tracking-[0.005em] text-white md:text-5xl">
            <GradientText dark>Equipo disponible</GradientText>
          </h2>

          <p className="mt-4 max-w-md text-[15px] leading-7 text-slate-300 md:text-base">
            Todo lo necesario para una sesión cuidada y adaptada al tamaño de tu evento. Material fiable y
            probado: no incluimos nada que el espacio no necesite.
          </p>
        </div>

        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {EQUIPMENT_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 border-b border-white/10 py-3 text-[15px] font-semibold text-white last:border-b-0 sm:text-base"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
