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

// Copias de la lista que forman la cinta. La animación desplaza exactamente
// una copia (-25% de la pista), así que el salto de vuelta es invisible.
// Con 4 copias siempre queda cinta de sobra para cubrir pantallas anchas.
const COPIES = 4;

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
      className={`w-auto max-h-[14vh] shrink-0 object-contain mix-blend-multiply transition hover:scale-105 ${SIZE_CLASSES[client.size ?? "md"]}`}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function ClientsCarousel() {
  return (
    <section
      className="relative z-10 -mt-5 w-full bg-white pb-5 pt-3 md:-mt-6 md:pb-7 md:pt-3"
      aria-label="Marcas y espacios donde ha pinchado Extradivertion"
    >
      {/*
        Fundido de entrada desde el hero. El degradado no es lineal: arranca
        casi invisible y sube de golpe al final, que es como el ojo espera que
        se disuelva una foto. Un fundido lineal deja un borde perceptible justo
        donde empieza.
      */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_26%,rgba(255,255,255,0.18)_46%,rgba(255,255,255,0.45)_64%,rgba(255,255,255,0.78)_80%,rgba(255,255,255,0.95)_91%,rgb(255,255,255)_100%)] md:-top-[15vh] md:h-[15vh]"
        aria-hidden="true"
      />

      {/* Halo de luz en la costura: el hero parece iluminar la cinta desde detrás */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-24 w-[85%] -translate-x-1/2 rounded-[50%] bg-sky-200/25 blur-3xl md:-top-[14vh] md:h-[14vh] md:w-[70%]"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-clients-scroll">
          {Array.from({ length: COPIES }, (_, copy) => (
            <ul
              key={copy}
              className="flex shrink-0 list-none items-center gap-8 pr-8 md:gap-12 md:pr-12"
              aria-hidden={copy > 0}
            >
              {CLIENTS.map((client) => (
                <li key={client.name} className="flex shrink-0 items-center">
                  <ClientLogo client={client} />
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Fundidos laterales: los logos entran y salen sin corte seco */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent md:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent md:w-24"
          aria-hidden="true"
        />
      </div>

      {/* Fundido de salida al gris de la pagina, por debajo de los logos */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-b from-white to-slate-100 md:h-7"
        aria-hidden="true"
      />
    </section>
  );
}
