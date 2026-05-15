export type LocalSeoPage = {
  path: string;
  city: string;
  title: string;
  subtitle: string;
  description: string;
  nearby: string[];
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
};

export const localSeoPages: LocalSeoPage[] = [
  {
    path: "/dj-eventos-barcelona",
    city: "Barcelona",
    title: "DJ para eventos en Barcelona",
    subtitle:
      "Música, sonido e iluminación para fiestas privadas, eventos corporativos, discotecas, cumpleaños y celebraciones a medida en Barcelona.",
    description:
      "En Extradivertion ofrecemos servicio de DJ para eventos en Barcelona con música adaptada al público, sonido, cabina DJ e iluminación según las necesidades del evento. Trabajamos fiestas privadas, eventos corporativos, discotecas, cumpleaños y celebraciones donde el ambiente tiene que estar cuidado desde el primer momento.",
    nearby: ["L'Hospitalet", "Badalona", "Sant Cugat", "Cerdanyola", "Sabadell", "Terrassa"],
    seoTitle: "DJ para eventos en Barcelona | Extradivertion",
    seoDescription:
      "DJ para eventos en Barcelona. Música, sonido e iluminación para fiestas privadas, eventos corporativos, discotecas y celebraciones a medida.",
    heroImage: "/dj-home-blue.jpg",
  },
  {
    path: "/dj-eventos-sabadell",
    city: "Sabadell",
    title: "DJ para eventos en Sabadell",
    subtitle:
      "Servicio DJ para fiestas privadas, eventos de empresa, cumpleaños, discotecas y celebraciones a medida en Sabadell.",
    description:
      "Extradivertion ofrece servicio de DJ para eventos en Sabadell, adaptando la música, el montaje y el equipo técnico al tipo de celebración. Trabajamos fiestas privadas, eventos corporativos, cumpleaños, discotecas y celebraciones a medida con una propuesta cuidada, cercana y fácil de organizar.",
    nearby: ["Barberà del Vallès", "Sant Quirze del Vallès", "Terrassa", "Cerdanyola", "Rubí", "Barcelona"],
    seoTitle: "DJ para eventos en Sabadell | Extradivertion",
    seoDescription:
      "DJ para eventos en Sabadell. Música, sonido, cabina e iluminación para fiestas privadas, empresas, cumpleaños y celebraciones.",
    heroImage: "/dj-eventos-barcelona-montaje-iluminacion.jpg",
  },
  {
    path: "/dj-eventos-terrassa",
    city: "Terrassa",
    title: "DJ para eventos en Terrassa",
    subtitle:
      "Música, sonido e iluminación para fiestas privadas, eventos corporativos, cumpleaños y celebraciones en Terrassa.",
    description:
      "En Extradivertion trabajamos eventos en Terrassa con una propuesta musical adaptada al público, al espacio y al tipo de celebración. Podemos incluir DJ profesional, equipo de sonido, cabina e iluminación para crear un ambiente cuidado desde el inicio hasta el final del evento.",
    nearby: ["Sabadell", "Matadepera", "Rubí", "Sant Cugat", "Cerdanyola", "Vallès Occidental"],
    seoTitle: "DJ para eventos en Terrassa | Extradivertion",
    seoDescription:
      "DJ para eventos en Terrassa. Servicio musical para fiestas privadas, eventos de empresa, discotecas, cumpleaños y celebraciones.",
    heroImage: "/fiesta-dj-barcelona-luces-ambiente.jpg",
  },
  {
    path: "/dj-eventos-valles-occidental",
    city: "Vallès Occidental",
    title: "DJ para eventos en Vallès Occidental",
    subtitle:
      "Servicio DJ para eventos privados, empresas, discotecas y celebraciones en la zona del Vallès Occidental.",
    description:
      "Extradivertion ofrece servicio de DJ para eventos en Vallès Occidental, cubriendo zonas como Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí y Barberà del Vallès. Adaptamos la música, el equipo y el montaje a cada espacio para que la experiencia sea profesional y fácil de organizar.",
    nearby: ["Sabadell", "Terrassa", "Sant Cugat", "Cerdanyola", "Rubí", "Barberà del Vallès"],
    seoTitle: "DJ para eventos en Vallès Occidental | Extradivertion",
    seoDescription:
      "DJ para eventos en Vallès Occidental. Música, sonido e iluminación para fiestas privadas, empresas y celebraciones a medida.",
    heroImage: "/dj-eventos-barcelona-montaje-iluminacion.jpg",
  },
  {
    path: "/dj-fiestas-privadas-barcelona",
    city: "Barcelona",
    title: "DJ para fiestas privadas en Barcelona",
    subtitle:
      "Música a medida para cumpleaños, celebraciones privadas, fiestas en locales, casas, terrazas y espacios privados en Barcelona.",
    description:
      "Extradivertion ofrece servicio de DJ para fiestas privadas en Barcelona, adaptando la música al tipo de público, al espacio y al ambiente que quieres crear. Podemos incluir equipo de sonido, cabina DJ e iluminación para que la fiesta se vea y suene profesional.",
    nearby: ["Sabadell", "Terrassa", "Sant Cugat", "Cerdanyola", "Rubí", "Área metropolitana"],
    seoTitle: "DJ para fiestas privadas en Barcelona | Extradivertion",
    seoDescription:
      "DJ para fiestas privadas en Barcelona. Música, sonido e iluminación para cumpleaños, celebraciones y eventos privados.",
    heroImage: "/fiesta-dj-barcelona-luces-ambiente.jpg",
  },
  {
    path: "/dj-eventos-empresa-barcelona",
    city: "Barcelona",
    title: "DJ para eventos de empresa en Barcelona",
    subtitle:
      "Servicio DJ para eventos corporativos, cenas de empresa, celebraciones internas y fiestas de marca en Barcelona.",
    description:
      "En Extradivertion preparamos sesiones DJ para eventos de empresa en Barcelona con un enfoque profesional, musicalmente cuidado y adaptable al tono del evento. Podemos encargarnos del sonido, la cabina DJ, la iluminación y el montaje técnico necesario.",
    nearby: ["Sabadell", "Terrassa", "Sant Cugat", "Cerdanyola", "Rubí", "Vallès Occidental"],
    seoTitle: "DJ para eventos de empresa en Barcelona | Extradivertion",
    seoDescription:
      "DJ para eventos de empresa en Barcelona. Música, sonido e iluminación para eventos corporativos, cenas de empresa y celebraciones de marca.",
    heroImage: "/evento-corporativo-dj-barcelona.jpg",
  },
];
