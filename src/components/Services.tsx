import type { CSSProperties } from "react";
import type { PageConfig } from "../data/pageConfigs";
import { EVENT_SERVICE_CARDS } from "../data/content";
import { CtaButton, GradientText } from "./ui";

const getImage = (title: string) => EVENT_SERVICE_CARDS.find((c) => c.title === title)!;

type CollageItem = {
  item: ReturnType<typeof getImage>;
  desktop: { left: number; top: number; width: number; height: number; z: number };
  rotateClass: string;
  size: "sm" | "md" | "lg";
};

const COLLAGE: CollageItem[] = [
  {
    item: getImage("Bodas"),
    desktop: { left: 0, top: 2, width: 44, height: 58, z: 10 },
    rotateClass: "rotate-[-1.5deg]",
    size: "lg",
  },
  {
    item: getImage("Fiestas privadas"),
    desktop: { left: 38, top: 0, width: 30, height: 40, z: 30 },
    rotateClass: "rotate-[2.5deg]",
    size: "sm",
  },
  {
    item: getImage("Eventos de empresa"),
    desktop: { left: 66, top: 8, width: 32, height: 34, z: 20 },
    rotateClass: "rotate-[-2deg]",
    size: "sm",
  },
  {
    item: getImage("Cumpleaños"),
    desktop: { left: 4, top: 58, width: 34, height: 40, z: 25 },
    rotateClass: "rotate-[2deg]",
    size: "sm",
  },
  {
    item: getImage("Locales"),
    desktop: { left: 42, top: 54, width: 56, height: 44, z: 15 },
    rotateClass: "rotate-[-1.5deg]",
    size: "md",
  },
];

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

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          {pageConfig.serviceIntro}
        </p>
      </div>

      {/* Móvil: pila simple sin rotación */}
      <div className="grid grid-cols-1 gap-3 md:hidden">
        {COLLAGE.map(({ item, size }) => (
          <CollagePhoto key={item.title} item={item} size={size} className="relative h-[220px] w-full" />
        ))}
      </div>

      {/* Escritorio: collage libre con solapes */}
      <div className="relative hidden md:block md:h-[640px]">
        {COLLAGE.map(({ item, desktop, size, rotateClass }) => (
          <CollagePhoto
            key={item.title}
            item={item}
            size={size}
            className={`absolute ${rotateClass}`}
            style={{
              left: `${desktop.left}%`,
              top: `${desktop.top}%`,
              width: `${desktop.width}%`,
              height: `${desktop.height}%`,
              zIndex: desktop.z,
            }}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <CtaButton href="#formulario" size="lg" variant="solid">
          Pedir presupuesto
        </CtaButton>
      </div>
    </section>
  );
}

function CollagePhoto({
  item,
  size,
  className = "",
  style,
}: {
  item: ReturnType<typeof getImage>;
  size: "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <a
      href={item.link}
      style={style}
      className={`group block overflow-hidden shadow-[0_16px_34px_rgba(15,23,42,0.22)] transition-transform duration-300 hover:z-40 hover:rotate-0 hover:scale-[1.03] focus-visible:z-40 focus-visible:rotate-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${className}`}
    >
      <div className="relative h-full w-full">
        <img
          src={item.image}
          alt={`DJ para ${item.title.toLowerCase()} en Barcelona`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/5 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-4">
          <h3
            className={`font-bold uppercase leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] ${
              size === "lg" ? "text-2xl md:text-3xl" : size === "md" ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            }`}
          >
            {item.title}
          </h3>
        </div>
      </div>
    </a>
  );
}
