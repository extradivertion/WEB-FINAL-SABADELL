import { EQUIPMENT_ITEMS } from "../data/content";
import { GradientText } from "./ui";

export default function Equipment() {
  return (
    <div
      id="equipo-disponible"
      style={{ scrollMarginTop: "90px" }}
      className="overflow-hidden rounded-[1.5rem] border border-sky-100 bg-slate-950 p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,0.14)] md:rounded-[2rem] md:p-8"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">Servicio incluido</p>
          <h2 className="mt-3 text-2xl font-black uppercase leading-none tracking-tight text-white md:text-4xl">
            <GradientText dark>Equipo disponible</GradientText>
          </h2>
        </div>

        <span className="hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 sm:inline-flex">
          Setup completo
        </span>
      </div>

      <p className="mb-6 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
        Todo lo necesario para ofrecer una sesión DJ cuidada, profesional y adaptada al tamaño de tu evento. Usamos
        material fiable y probado: no incluimos nada que el espacio no necesite.
      </p>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {EQUIPMENT_ITEMS.map((item) => (
          <li
            key={item}
            className="rounded-[1.1rem] border border-white/10 bg-gradient-to-br from-white/12 to-white/5 px-3 py-4 text-center text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.20)] backdrop-blur md:rounded-[1.25rem] md:px-5 md:py-6 md:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
