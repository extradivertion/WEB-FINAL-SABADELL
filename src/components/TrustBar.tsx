import type { PageConfig } from "../data/pageConfigs";

export default function TrustBar({ pageConfig }: { pageConfig: PageConfig }) {
  const trustItems = [
    { label: "EVENTOS AL AÑO", value: "+50", text: "eventos realizados cada año" },
    { label: "ZONA DE SERVICIO", value: pageConfig.cityShort, text: `${pageConfig.city} y alrededores` },
    { label: "SERVICIO COMPLETO", value: "DJ + equipo", text: "sonido, cabina e iluminación" },
  ];

  return (
    <section
      className="relative -mt-5 z-10 mx-auto max-w-5xl px-4 pb-4 md:-mt-6 md:px-6 md:pb-5"
      aria-label="Datos de confianza de Extradivertion"
    >
      <div className="grid gap-3 md:grid-cols-3">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.2rem] border border-white/40 bg-white/75 px-3 py-3.5 text-center shadow-[0_14px_28px_rgba(15,23,42,0.09)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(15,23,42,0.14)] md:rounded-[1.35rem] md:px-4 md:py-4"
          >
            <div className="mx-auto inline-flex rounded-full bg-sky-100/90 px-4 py-1.5 shadow-[0_8px_18px_rgba(14,165,233,0.12)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700 md:text-[11px] md:tracking-[0.22em]">
                {item.label}
              </p>
            </div>

            <p className="mt-3 text-[22px] font-black leading-none text-slate-950 drop-shadow-[0_2px_8px_rgba(15,23,42,0.08)] md:text-[30px]">
              {item.value}
            </p>

            <p className="mt-1.5 text-[13px] font-semibold leading-5 text-slate-700 md:text-[15px]">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
