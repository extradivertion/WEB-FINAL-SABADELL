import { useState } from "react";

type LogoSize = "sm" | "md" | "lg" | "xl";
type Client = { name: string; logo: string | null; size?: LogoSize };

const SIZE_CLASSES: Record<LogoSize, string> = {
  sm: "h-10 md:h-12",
  md: "h-12 md:h-14",
  lg: "h-16 md:h-20",
  xl: "h-20 md:h-24",
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
      className={`w-auto max-h-[14vh] shrink-0 object-contain transition hover:scale-105 ${SIZE_CLASSES[client.size ?? "md"]}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ClientsCarousel() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section
      className="relative z-10 -mt-5 w-full border-b border-slate-200 bg-white pb-2 pt-3 md:-mt-6 md:pt-3"
      aria-label="Marcas y espacios donde ha pinchado Extradivertion"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-white md:-top-[4vh] md:h-[4vh]"
        aria-hidden="true"
      />


      <div className="relative overflow-hidden">
        <div className="flex w-max animate-clients-scroll items-center gap-8 md:gap-12">
          {track.map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
