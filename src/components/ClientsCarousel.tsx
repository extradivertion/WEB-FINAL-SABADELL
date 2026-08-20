import { useState } from "react";
import { GradientText } from "./ui";

type LogoSize = "sm" | "md" | "lg" | "xl";
type Client = { name: string; logo: string | null; size?: LogoSize };

const SIZE_CLASSES: Record<LogoSize, string> = {
  sm: "h-16 md:h-24",
  md: "h-20 md:h-32",
  lg: "h-28 md:h-40",
  xl: "h-32 md:h-44",
};

const CLIENTS: Client[] = [
  { name: "La Roca Village", logo: "/logos/la-roca-village.png" },
  { name: "Corso Iluzione", logo: "/logos/corso-iluzione.png", size: "lg" },
  { name: "Discobus Barcelona", logo: "/logos/discobus-barcelona.png", size: "lg" },
  { name: "Coca-Cola", logo: "/logos/coca-cola.png" },
  { name: "Bacardí", logo: "/logos/bacardi.png", size: "lg" },
  { name: "Casa Club", logo: "/logos/casa-club.png", size: "sm" },
  { name: "El Secret de Vilassar", logo: "/logos/el-secret-vilassar.png", size: "xl" },
  { name: "Bodas.net", logo: "/logos/bodas-net.png" },
];

function ClientLogo({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  if (!client.logo || failed) {
    return (
      <span className="shrink-0 text-lg font-black uppercase tracking-tight text-slate-400 transition hover:text-sky-700 md:text-xl">
        {client.name}
      </span>
    );
  }

  return (
    <img
      src={client.logo}
      alt={client.name}
      className={`w-auto shrink-0 object-contain transition hover:scale-105 ${SIZE_CLASSES[client.size ?? "md"]}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ClientsCarousel() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section
      className="relative z-10 -mt-5 w-full border-b border-slate-200 bg-white pb-2 pt-6 md:-mt-6 md:pt-8"
      aria-label="Marcas y espacios donde ha pinchado Extradivertion"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-white md:-top-28 md:h-28"
        aria-hidden="true"
      />

      <p className="relative mb-3 text-center text-base font-black uppercase tracking-tight md:text-xl">
        <GradientText>Han confiado en nosotros</GradientText>
      </p>

      <div className="flex w-max animate-clients-scroll items-center gap-14 md:gap-20">
        {track.map((client, index) => (
          <ClientLogo key={`${client.name}-${index}`} client={client} />
        ))}
      </div>
    </section>
  );
}
