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
  serviceFocus: string;
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
    nearby: ["Hospitalet", "Badalona", "Sant Cugat", "Cerdanyola", "Sabadell", "Terrassa"],
    seoTitle: "DJ para eventos en Barcelona | Extradivertion",
    seoDescription:
      "DJ para eventos en Barcelona. Música, sonido e iluminación para fiestas privadas, eventos corporativos, discotecas y celebraciones a medida.",
    heroImage: "/dj-home-blue.jpg",
    serviceFocus: "eventos privados, empresas, discotecas y celebraciones a medida",
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
    serviceFocus: "fiestas privadas, empresas, cumpleaños y celebraciones locales",
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
    serviceFocus: "eventos privados, celebraciones, empresas y fiestas con montaje completo",
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
    serviceFocus: "eventos en diferentes municipios del Vallès Occidental",
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
    serviceFocus: "cumpleaños, fiestas privadas y celebraciones con ambiente cuidado",
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
    serviceFocus: "eventos corporativos, cenas de empresa y celebraciones profesionales",
  },
  {
    path: "/dj-eventos-sant-cugat",
    city: "Sant Cugat del Vallès",
    title: "DJ para eventos en Sant Cugat",
    subtitle:
      "Servicio DJ para fiestas privadas, eventos corporativos, cumpleaños y celebraciones a medida en Sant Cugat.",
    description:
      "Extradivertion ofrece servicio de DJ para eventos en Sant Cugat del Vallès con música adaptada al público, sonido profesional e iluminación según el espacio. Trabajamos celebraciones privadas, eventos de empresa, cumpleaños y fiestas donde la música tiene que acompañar el ambiente de forma natural.",
    nearby: ["Rubí", "Cerdanyola", "Barcelona", "Sabadell", "Sant Quirze", "Vallès Occidental"],
    seoTitle: "DJ para eventos en Sant Cugat | Extradivertion",
    seoDescription:
      "DJ para eventos en Sant Cugat. Música, sonido e iluminación para fiestas privadas, empresas, cumpleaños y celebraciones.",
    heroImage: "/dj-eventos-barcelona-montaje-iluminacion.jpg",
    serviceFocus: "eventos privados, empresas y celebraciones en Sant Cugat",
  },
  {
    path: "/dj-eventos-rubi",
    city: "Rubí",
    title: "DJ para eventos en Rubí",
    subtitle:
      "DJ para fiestas privadas, cumpleaños, eventos de empresa y celebraciones a medida en Rubí y alrededores.",
    description:
      "En Extradivertion trabajamos eventos en Rubí con sesiones musicales adaptadas al tipo de público, al horario y al espacio. Podemos incluir DJ profesional, equipo de sonido, cabina e iluminación para que el evento tenga una presencia cuidada y un ambiente fácil de disfrutar.",
    nearby: ["Sant Cugat", "Terrassa", "Cerdanyola", "Sabadell", "Castellbisbal", "Vallès Occidental"],
    seoTitle: "DJ para eventos en Rubí | Extradivertion",
    seoDescription:
      "DJ para eventos en Rubí. Servicio musical para fiestas privadas, cumpleaños, empresas y celebraciones con sonido e iluminación.",
    heroImage: "/fiesta-dj-barcelona-luces-ambiente.jpg",
    serviceFocus: "fiestas privadas, cumpleaños y eventos de empresa en Rubí",
  },
  {
    path: "/dj-eventos-cerdanyola",
    city: "Cerdanyola del Vallès",
    title: "DJ para eventos en Cerdanyola del Vallès",
    subtitle:
      "Servicio DJ para fiestas privadas, eventos universitarios, empresas, cumpleaños y celebraciones en Cerdanyola.",
    description:
      "Extradivertion ofrece servicio de DJ para eventos en Cerdanyola del Vallès, adaptando la música y el montaje al tipo de celebración. Trabajamos fiestas privadas, celebraciones, eventos de empresa y formatos con público joven o mixto donde el ritmo del evento es clave.",
    nearby: ["Barcelona", "Sant Cugat", "Ripollet", "Barberà", "Sabadell", "Rubí"],
    seoTitle: "DJ para eventos en Cerdanyola del Vallès | Extradivertion",
    seoDescription:
      "DJ para eventos en Cerdanyola del Vallès. Música, sonido e iluminación para fiestas privadas, empresas y celebraciones.",
    heroImage: "/dj-home-blue.jpg",
    serviceFocus: "eventos privados, celebraciones y fiestas en Cerdanyola",
  },
  {
    path: "/dj-eventos-barbera-del-valles",
    city: "Barberà del Vallès",
    title: "DJ para eventos en Barberà del Vallès",
    subtitle:
      "Servicio DJ para fiestas privadas, celebraciones, cumpleaños y eventos de empresa en Barberà del Vallès.",
    description:
      "En Extradivertion ofrecemos servicio de DJ para eventos en Barberà del Vallès y alrededores, con música adaptada, equipo de sonido, cabina e iluminación si el evento lo necesita. La idea es que el montaje sea sencillo para ti y que el ambiente funcione desde el primer momento.",
    nearby: ["Sabadell", "Badia del Vallès", "Cerdanyola", "Ripollet", "Sant Quirze", "Terrassa"],
    seoTitle: "DJ para eventos en Barberà del Vallès | Extradivertion",
    seoDescription:
      "DJ para eventos en Barberà del Vallès. Música, sonido e iluminación para fiestas privadas, empresas y celebraciones.",
    heroImage: "/dj-eventos-barcelona-montaje-iluminacion.jpg",
    serviceFocus: "celebraciones privadas, cumpleaños y eventos de empresa en Barberà",
  },
  {
    path: "/dj-eventos-sant-quirze-del-valles",
    city: "Sant Quirze del Vallès",
    title: "DJ para eventos en Sant Quirze del Vallès",
    subtitle:
      "DJ para fiestas privadas, cumpleaños, eventos corporativos y celebraciones en Sant Quirze del Vallès.",
    description:
      "Extradivertion ofrece servicio de DJ para eventos en Sant Quirze del Vallès con música personalizada, sonido profesional e iluminación adaptada al espacio. Trabajamos eventos privados, celebraciones familiares y eventos de empresa con una organización clara y cercana.",
    nearby: ["Sabadell", "Terrassa", "Sant Cugat", "Rubí", "Barberà del Vallès", "Vallès Occidental"],
    seoTitle: "DJ para eventos en Sant Quirze del Vallès | Extradivertion",
    seoDescription:
      "DJ para eventos en Sant Quirze del Vallès. Música, sonido e iluminación para fiestas privadas, empresas y celebraciones.",
    heroImage: "/fiesta-dj-barcelona-luces-ambiente.jpg",
    serviceFocus: "eventos privados, empresas y celebraciones familiares en Sant Quirze",
  },
];
