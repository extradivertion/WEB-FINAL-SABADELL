import type { PageConfig } from "../data/pageConfigs";
import { EVENT_SERVICE_CARDS } from "../data/content";
import { GradientText } from "./ui";

export default function Services({ pageConfig }: { pageConfig: PageConfig }) {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-5" style={{ scrollMarginTop: "90px" }}>
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-700/80">
          Servicios DJ para eventos
        </p>

        <h2 className="mt-3 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 drop-shadow-[0_2px_10px_rgba(15,23,42,0.06)] sm:text-4xl md:text-6xl">
          DJ para <GradientText>todo tipo</GradientText>
          <span className="block">de eventos</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
          {pageConfig.serviceIntro}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {EVENT_SERVICE_CARDS.slice(0, 2).map((item) => (
          <ServiceCardTile key={item.title} item={item} big />
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {EVENT_SERVICE_CARDS.slice(2).map((item) => (
          <ServiceCardTile key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ServiceCardTile({
  item,
  big = false,
}: {
  item: (typeof EVENT_SERVICE_CARDS)[number];
  big?: boolean;
}) {
  return (
    <a
      href={item.link}
      className={`group relative overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 md:rounded-[2rem] ${
        big ? "min-h-[220px] md:min-h-[280px]" : "min-h-[190px] md:min-h-[220px]"
      }`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(2,6,23,0.86), rgba(2,6,23,0.2)), url('${item.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`relative flex h-full flex-col items-center justify-end p-5 text-center ${big ? "md:p-9" : "md:p-6"}`}
      >
        <h3
          className={`mt-3 font-bold uppercase leading-tight text-white ${
            big ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200">{item.text}</p>
        <span className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-[0_10px_25px_rgba(255,255,255,0.18)] transition group-hover:-translate-y-0.5 group-hover:bg-slate-100">
          Pedir presupuesto
        </span>
      </div>
    </a>
  );
}
