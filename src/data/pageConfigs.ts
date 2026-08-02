export type PageConfig = {
  path: string;
  navLabel: string;
  city: string;
  cityShort: string;
  heroLine1: string;
  heroLine2: string;
  heroSubtitle: string;
  heroImages: string[];
  seoTitle: string;
  seoDescription: string;
  ogDescription: string;
  zoneHeadingMain: string;
  zoneHeadingHighlight: string;
  serviceIntro: string;
  zoneParagraph1: string;
  zoneParagraph2: string;
  formLocation: string;
  footerLocationText: string;
  areaServed: string[];
  pricingFaqQuestion: string;
  travelFaqQuestion: string;
  travelFaqAnswer: string;
};

export const pageConfigs: PageConfig[] = [
  {
    path: "/",
    navLabel: "Barcelona ciudad",
    city: "Barcelona",
    cityShort: "BCN",
    heroLine1: "DJ para eventos",
    heroLine2: "Barcelona",
    heroSubtitle: "Creamos la música, el ambiente y la fiesta perfecta para que tu evento sea inolvidable",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Barcelona | Extradivertion",
    seoDescription:
      "DJ para eventos en Barcelona: bodas, cumpleaños, fiestas privadas y empresa. Open format, sonido e iluminación profesional. Presupuesto en 24h.",
    ogDescription:
      "DJ para eventos en Barcelona con música comercial y house, sonido, iluminación y montaje para celebraciones a medida.",
    zoneHeadingMain: "Servicio DJ en Barcelona",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ para bodas, fiestas privadas, cumpleaños y eventos de empresa en Barcelona. Adaptamos la música open format, el sonido, la iluminación y el montaje al espacio y al público de cada evento.",
    zoneParagraph1:
      "Nos movemos principalmente por Barcelona y el Vallès Occidental, con un servicio pensado para eventos privados, empresas, discotecas y celebraciones a medida. La clave no es solo llegar: es llevar el montaje adecuado, cuidar el sonido y adaptar la sesión al espacio y al público.",
    zoneParagraph2:
      "Cubrimos habitualmente Barcelona, Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí y Barberà del Vallès. Si tu evento está en una zona cercana, revisamos disponibilidad y te decimos rápido la mejor opción.",
    formLocation: "Barcelona",
    footerLocationText: "Barcelona · Sabadell · Terrassa · Vallès Occidental",
    areaServed: [
      "Barcelona",
      "Sabadell",
      "Terrassa",
      "Sant Cugat del Vallès",
      "Cerdanyola del Vallès",
      "Rubí",
      "Barberà del Vallès",
      "Vallès Occidental",
    ],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Barcelona?",
    travelFaqQuestion: "¿Trabajáis fuera de Barcelona ciudad?",
    travelFaqAnswer:
      "Sí. Nos movemos habitualmente por todo el Vallès Occidental (Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí, Barberà y Sant Quirze) y el área metropolitana de Barcelona. Escríbenos con tu ubicación y te confirmamos disponibilidad y desplazamiento.",
  },
  {
    path: "/dj-eventos-barcelona",
    navLabel: "Barcelona ciudad",
    city: "Barcelona",
    cityShort: "BCN",
    heroLine1: "DJ para eventos",
    heroLine2: "Barcelona",
    heroSubtitle: "música que hará inolvidable tu evento en Barcelona",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Barcelona | Extradivertion",
    seoDescription:
      "DJ para eventos en Barcelona. Música, sonido e iluminación para fiestas privadas, empresas, discotecas, cumpleaños y celebraciones.",
    ogDescription:
      "Servicio DJ para eventos en Barcelona con música adaptada, sonido, cabina e iluminación para fiestas privadas y empresas.",
    zoneHeadingMain: "Servicio DJ en Barcelona",
    zoneHeadingHighlight: "y área metropolitana",
    serviceIntro:
      "Servicio de DJ en Barcelona para fiestas privadas, eventos corporativos, discotecas, cumpleaños y celebraciones a medida. Adaptamos la música, el equipo y el montaje al espacio y al público.",
    zoneParagraph1:
      "Trabajamos eventos en Barcelona con una propuesta musical cuidada, pensada para que el ambiente funcione desde el primer momento. Podemos incluir DJ profesional, sonido, cabina e iluminación según las necesidades del espacio.",
    zoneParagraph2:
      "También cubrimos zonas cercanas como L'Hospitalet, Badalona, Sant Cugat, Cerdanyola, Sabadell y Terrassa. Si tienes una fecha en mente, revisamos disponibilidad y montaje.",
    formLocation: "Barcelona",
    footerLocationText: "Barcelona · Área metropolitana · Vallès Occidental",
    areaServed: ["Barcelona", "L'Hospitalet", "Badalona", "Sant Cugat", "Cerdanyola", "Sabadell", "Terrassa"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Barcelona?",
    travelFaqQuestion: "¿Os desplazáis por el área metropolitana de Barcelona?",
    travelFaqAnswer:
      "Sí. Además de Barcelona ciudad trabajamos habitualmente en L'Hospitalet, Badalona, Sant Cugat, Cerdanyola, Sabadell y Terrassa. Cuéntanos la ubicación exacta y te confirmamos desplazamiento.",
  },
  {
    path: "/dj-eventos-sabadell",
    navLabel: "Sabadell",
    city: "Sabadell",
    cityShort: "SBD",
    heroLine1: "DJ para eventos",
    heroLine2: "Sabadell",
    heroSubtitle: "música, sonido e iluminación para eventos en Sabadell",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Sabadell | Extradivertion",
    seoDescription:
      "DJ para eventos en Sabadell. Servicio para fiestas privadas, empresas, cumpleaños, discotecas y celebraciones con sonido e iluminación.",
    ogDescription:
      "Servicio DJ para eventos en Sabadell con música adaptada, sonido, cabina e iluminación para celebraciones privadas y empresas.",
    zoneHeadingMain: "Servicio DJ en Sabadell",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Sabadell para fiestas privadas, cumpleaños, eventos de empresa, discotecas y celebraciones a medida. Adaptamos la música y el montaje al espacio y al público.",
    zoneParagraph1:
      "Trabajamos eventos en Sabadell con un enfoque cercano y profesional: música adaptada, montaje cuidado y una sesión preparada para crear buen ambiente sin complicarte la organización.",
    zoneParagraph2:
      "También cubrimos Barberà del Vallès, Sant Quirze, Terrassa, Cerdanyola, Rubí y Barcelona. Si el evento está cerca, revisamos disponibilidad y desplazamiento.",
    formLocation: "Sabadell",
    footerLocationText: "Sabadell · Barberà · Sant Quirze · Terrassa",
    areaServed: ["Sabadell", "Barberà del Vallès", "Sant Quirze del Vallès", "Terrassa", "Cerdanyola", "Rubí"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Sabadell?",
    travelFaqQuestion: "¿Os desplazáis por Sabadell y alrededores?",
    travelFaqAnswer:
      "Sí. Trabajamos habitualmente en Sabadell, Barberà del Vallès, Sant Quirze, Terrassa, Cerdanyola y Rubí. Dinos la ubicación de tu evento y te confirmamos disponibilidad.",
  },
  {
    path: "/dj-eventos-terrassa",
    navLabel: "Terrassa",
    city: "Terrassa",
    cityShort: "TRS",
    heroLine1: "DJ para eventos",
    heroLine2: "Terrassa",
    heroSubtitle: "servicio DJ para fiestas, empresas y celebraciones en Terrassa",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Terrassa | Extradivertion",
    seoDescription:
      "DJ para eventos en Terrassa. Música, sonido e iluminación para fiestas privadas, empresas, cumpleaños y celebraciones.",
    ogDescription:
      "Servicio DJ para eventos en Terrassa con sonido, cabina e iluminación para fiestas privadas, eventos de empresa y celebraciones.",
    zoneHeadingMain: "Servicio DJ en Terrassa",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Terrassa para fiestas privadas, eventos corporativos, cumpleaños y celebraciones a medida. Creamos una sesión adaptada al tipo de público, espacio y ambiente que buscas.",
    zoneParagraph1:
      "En Terrassa trabajamos eventos donde la música, el sonido y el montaje tienen que estar cuidados. Preparamos la sesión según el tipo de celebración y las necesidades técnicas del espacio.",
    zoneParagraph2:
      "También cubrimos Sabadell, Matadepera, Rubí, Sant Cugat, Cerdanyola y otras zonas del Vallès Occidental.",
    formLocation: "Terrassa",
    footerLocationText: "Terrassa · Sabadell · Rubí · Vallès Occidental",
    areaServed: ["Terrassa", "Sabadell", "Matadepera", "Rubí", "Sant Cugat", "Cerdanyola", "Vallès Occidental"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Terrassa?",
    travelFaqQuestion: "¿Os desplazáis por Terrassa y alrededores?",
    travelFaqAnswer:
      "Sí. Cubrimos Terrassa, Matadepera, Rubí, Sant Cugat, Cerdanyola y el resto del Vallès Occidental. Cuéntanos dónde es el evento y revisamos disponibilidad.",
  },
  {
    path: "/dj-eventos-sant-cugat",
    navLabel: "Sant Cugat del Vallès",
    city: "Sant Cugat del Vallès",
    cityShort: "Sant Cugat",
    heroLine1: "DJ para eventos",
    heroLine2: "Sant Cugat",
    heroSubtitle: "música y montaje profesional para eventos en Sant Cugat",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Sant Cugat | Extradivertion",
    seoDescription:
      "DJ para eventos en Sant Cugat. Música, sonido e iluminación para fiestas privadas, empresas, cumpleaños y celebraciones.",
    ogDescription:
      "Servicio DJ para eventos en Sant Cugat del Vallès con música adaptada, sonido profesional e iluminación según el espacio.",
    zoneHeadingMain: "Servicio DJ en Sant Cugat",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Sant Cugat para fiestas privadas, eventos corporativos, cumpleaños y celebraciones a medida. Adaptamos la música, el equipo y el montaje al tipo de evento.",
    zoneParagraph1:
      "En Sant Cugat trabajamos eventos privados y de empresa con una propuesta musical cuidada, pensada para crear ambiente sin que organizar la música sea complicado.",
    zoneParagraph2:
      "También cubrimos Rubí, Cerdanyola, Barcelona, Sabadell, Sant Quirze y otras zonas del Vallès Occidental.",
    formLocation: "Sant Cugat del Vallès",
    footerLocationText: "Sant Cugat · Rubí · Cerdanyola · Barcelona",
    areaServed: ["Sant Cugat del Vallès", "Rubí", "Cerdanyola", "Barcelona", "Sabadell", "Sant Quirze"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Sant Cugat?",
    travelFaqQuestion: "¿Os desplazáis por Sant Cugat y alrededores?",
    travelFaqAnswer:
      "Sí. Trabajamos en Sant Cugat, Rubí, Cerdanyola, Barcelona, Sabadell y Sant Quirze. Escríbenos con la ubicación y revisamos disponibilidad y desplazamiento.",
  },
  {
    path: "/dj-eventos-rubi",
    navLabel: "Rubí",
    city: "Rubí",
    cityShort: "Rubí",
    heroLine1: "DJ para eventos",
    heroLine2: "Rubí",
    heroSubtitle: "DJ para fiestas privadas, cumpleaños y eventos de empresa en Rubí",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Rubí | Extradivertion",
    seoDescription:
      "DJ para eventos en Rubí. Música, sonido e iluminación para fiestas privadas, cumpleaños, empresas y celebraciones.",
    ogDescription:
      "Servicio DJ para eventos en Rubí con música adaptada, sonido, cabina e iluminación para celebraciones privadas y empresas.",
    zoneHeadingMain: "Servicio DJ en Rubí",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Rubí para fiestas privadas, cumpleaños, eventos de empresa y celebraciones a medida. Cuidamos la música, el sonido y el ambiente del evento.",
    zoneParagraph1:
      "En Rubí preparamos sesiones musicales adaptadas al público, al horario y al espacio. Podemos incluir equipo de sonido, cabina DJ e iluminación según lo que necesite el evento.",
    zoneParagraph2:
      "También cubrimos Sant Cugat, Terrassa, Cerdanyola, Sabadell, Castellbisbal y otras zonas del Vallès Occidental.",
    formLocation: "Rubí",
    footerLocationText: "Rubí · Sant Cugat · Terrassa · Cerdanyola",
    areaServed: ["Rubí", "Sant Cugat", "Terrassa", "Cerdanyola", "Sabadell", "Castellbisbal"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Rubí?",
    travelFaqQuestion: "¿Os desplazáis por Rubí y alrededores?",
    travelFaqAnswer:
      "Sí. Cubrimos Rubí, Sant Cugat, Terrassa, Cerdanyola, Sabadell y Castellbisbal. Dinos dónde es tu evento y te confirmamos disponibilidad.",
  },
  {
    path: "/dj-eventos-cerdanyola",
    navLabel: "Cerdanyola del Vallès",
    city: "Cerdanyola del Vallès",
    cityShort: "Cerdanyola",
    heroLine1: "DJ para eventos",
    heroLine2: "Cerdanyola",
    heroSubtitle: "servicio DJ para fiestas privadas, empresas y celebraciones en Cerdanyola",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Cerdanyola del Vallès | Extradivertion",
    seoDescription:
      "DJ para eventos en Cerdanyola del Vallès. Música, sonido e iluminación para fiestas privadas, empresas y celebraciones.",
    ogDescription:
      "Servicio DJ para eventos en Cerdanyola del Vallès con música adaptada, sonido profesional e iluminación según el espacio.",
    zoneHeadingMain: "Servicio DJ en Cerdanyola",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Cerdanyola del Vallès para fiestas privadas, eventos de empresa, celebraciones y formatos con público joven o mixto.",
    zoneParagraph1:
      "En Cerdanyola adaptamos la música y el montaje al tipo de celebración, buscando que el evento tenga ritmo, buen ambiente y una organización sencilla.",
    zoneParagraph2:
      "También cubrimos Barcelona, Sant Cugat, Ripollet, Barberà, Sabadell y Rubí.",
    formLocation: "Cerdanyola del Vallès",
    footerLocationText: "Cerdanyola · Sant Cugat · Barberà · Barcelona",
    areaServed: ["Cerdanyola del Vallès", "Barcelona", "Sant Cugat", "Ripollet", "Barberà", "Sabadell", "Rubí"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Cerdanyola?",
    travelFaqQuestion: "¿Os desplazáis por Cerdanyola y alrededores?",
    travelFaqAnswer:
      "Sí. Trabajamos en Cerdanyola, Barcelona, Sant Cugat, Ripollet, Barberà, Sabadell y Rubí. Escríbenos con la ubicación y revisamos disponibilidad.",
  },
  {
    path: "/dj-eventos-barbera-del-valles",
    navLabel: "Barberà del Vallès",
    city: "Barberà del Vallès",
    cityShort: "Barberà",
    heroLine1: "DJ para eventos",
    heroLine2: "Barberà",
    heroSubtitle: "música y sonido para eventos en Barberà del Vallès",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Barberà del Vallès | Extradivertion",
    seoDescription:
      "DJ para eventos en Barberà del Vallès. Música, sonido e iluminación para fiestas privadas, empresas y celebraciones.",
    ogDescription:
      "Servicio DJ para eventos en Barberà del Vallès con música adaptada, sonido, cabina e iluminación para celebraciones.",
    zoneHeadingMain: "Servicio DJ en Barberà",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Barberà del Vallès para fiestas privadas, celebraciones, cumpleaños y eventos de empresa con música, sonido e iluminación adaptada.",
    zoneParagraph1:
      "En Barberà del Vallès ofrecemos un servicio DJ pensado para que el montaje sea sencillo para ti y el ambiente funcione desde el primer momento.",
    zoneParagraph2:
      "También cubrimos Sabadell, Badia del Vallès, Cerdanyola, Ripollet, Sant Quirze y Terrassa.",
    formLocation: "Barberà del Vallès",
    footerLocationText: "Barberà · Sabadell · Cerdanyola · Sant Quirze",
    areaServed: ["Barberà del Vallès", "Sabadell", "Badia del Vallès", "Cerdanyola", "Ripollet", "Sant Quirze", "Terrassa"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Barberà del Vallès?",
    travelFaqQuestion: "¿Os desplazáis por Barberà del Vallès y alrededores?",
    travelFaqAnswer:
      "Sí. Cubrimos Barberà, Sabadell, Badia del Vallès, Cerdanyola, Ripollet, Sant Quirze y Terrassa. Cuéntanos dónde es el evento y te confirmamos disponibilidad.",
  },
  {
    path: "/dj-eventos-sant-quirze-del-valles",
    navLabel: "Sant Quirze del Vallès",
    city: "Sant Quirze del Vallès",
    cityShort: "Sant Quirze",
    heroLine1: "DJ para eventos",
    heroLine2: "Sant Quirze",
    heroSubtitle: "DJ para fiestas privadas, empresas y celebraciones en Sant Quirze",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Sant Quirze del Vallès | Extradivertion",
    seoDescription:
      "DJ para eventos en Sant Quirze del Vallès. Música, sonido e iluminación para fiestas privadas, empresas y celebraciones.",
    ogDescription:
      "Servicio DJ para eventos en Sant Quirze del Vallès con música personalizada, sonido profesional e iluminación adaptada.",
    zoneHeadingMain: "Servicio DJ en Sant Quirze",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Sant Quirze del Vallès para fiestas privadas, cumpleaños, eventos corporativos y celebraciones familiares.",
    zoneParagraph1:
      "En Sant Quirze del Vallès trabajamos eventos privados y de empresa con una organización clara, música personalizada y montaje adaptado al espacio.",
    zoneParagraph2:
      "También cubrimos Sabadell, Terrassa, Sant Cugat, Rubí, Barberà del Vallès y el resto del Vallès Occidental.",
    formLocation: "Sant Quirze del Vallès",
    footerLocationText: "Sant Quirze · Sabadell · Terrassa · Rubí",
    areaServed: ["Sant Quirze del Vallès", "Sabadell", "Terrassa", "Sant Cugat", "Rubí", "Barberà del Vallès"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en Sant Quirze del Vallès?",
    travelFaqQuestion: "¿Os desplazáis por Sant Quirze y alrededores?",
    travelFaqAnswer:
      "Sí. Trabajamos en Sant Quirze, Sabadell, Terrassa, Sant Cugat, Rubí y Barberà del Vallès. Escríbenos con la ubicación y revisamos disponibilidad.",
  },
  {
    path: "/dj-eventos-valles-occidental",
    navLabel: "Vallès Occidental",
    city: "Vallès Occidental",
    cityShort: "Vallès",
    heroLine1: "DJ para eventos",
    heroLine2: "Vallès Occidental",
    heroSubtitle: "servicio DJ para toda la comarca: Sabadell, Terrassa, Sant Cugat y alrededores",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos en Vallès Occidental | Extradivertion",
    seoDescription:
      "DJ para eventos en Vallès Occidental. Servicio en Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí y Barberà con sonido e iluminación.",
    ogDescription:
      "Servicio DJ para eventos en el Vallès Occidental con música adaptada, sonido, cabina e iluminación para celebraciones a medida.",
    zoneHeadingMain: "Servicio DJ en el Vallès",
    zoneHeadingHighlight: "Occidental",
    serviceIntro:
      "Servicio de DJ para eventos en toda la comarca del Vallès Occidental: fiestas privadas, bodas, eventos de empresa, cumpleaños y celebraciones a medida allá donde nos necesites.",
    zoneParagraph1:
      "Al ser nuestra zona de trabajo habitual, conocemos bien los espacios más comunes de la comarca: locales, casas privadas, jardines, salas de celebraciones y espacios de empresa. Eso nos permite proponerte un montaje realista desde el primer contacto.",
    zoneParagraph2:
      "Cubrimos Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí, Barberà del Vallès y Sant Quirze, además de Barcelona y su área metropolitana.",
    formLocation: "Vallès Occidental",
    footerLocationText: "Sabadell · Terrassa · Sant Cugat · Vallès Occidental",
    areaServed: ["Sabadell", "Terrassa", "Sant Cugat del Vallès", "Cerdanyola del Vallès", "Rubí", "Barberà del Vallès", "Sant Quirze del Vallès"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para un evento en el Vallès Occidental?",
    travelFaqQuestion: "¿Por qué zonas del Vallès Occidental os movéis?",
    travelFaqAnswer:
      "Trabajamos en toda la comarca: Sabadell, Terrassa, Sant Cugat, Cerdanyola, Rubí, Barberà del Vallès y Sant Quirze, además de Barcelona. Escríbenos con tu municipio y revisamos disponibilidad.",
  },
  {
    path: "/dj-eventos-empresa-barcelona",
    navLabel: "Eventos de empresa",
    city: "Barcelona",
    cityShort: "Empresas",
    heroLine1: "DJ para eventos",
    heroLine2: "de empresa",
    heroSubtitle: "ambiente cuidado para cenas, afterworks y celebraciones corporativas",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para eventos de empresa en Barcelona | Extradivertion",
    seoDescription:
      "DJ para eventos de empresa en Barcelona: cenas corporativas, afterworks y celebraciones internas. Música adaptada al tono del evento, sonido e iluminación.",
    ogDescription:
      "Servicio DJ para eventos de empresa en Barcelona con música adaptada al tono del evento, sonido, cabina e iluminación profesional.",
    zoneHeadingMain: "DJ para empresas en Barcelona",
    zoneHeadingHighlight: "y Vallès Occidental",
    serviceIntro:
      "Servicio de DJ para eventos de empresa en Barcelona: cenas corporativas, afterworks, celebraciones internas y presentaciones de marca. Coordinamos contigo el tono musical antes del evento para que encaje con el público y el momento de la velada.",
    zoneParagraph1:
      "Un evento de empresa tiene un ritmo distinto al de una fiesta privada: suele empezar con un ambiente más tranquilo y subir de intensidad más tarde. Preparamos la sesión para acompañar esa evolución sin que en ningún momento se sienta forzada.",
    zoneParagraph2:
      "Trabajamos en Barcelona, Sabadell, Terrassa, Sant Cugat y el resto del Vallès Occidental. Podemos coordinarnos con la agencia de eventos o con el equipo interno de la empresa si ya hay un proveedor de espacio o catering.",
    formLocation: "Barcelona",
    footerLocationText: "Barcelona · Vallès Occidental · Eventos de empresa",
    areaServed: ["Barcelona", "Sabadell", "Terrassa", "Sant Cugat del Vallès", "Vallès Occidental"],
    pricingFaqQuestion: "¿Cuánto cuesta un DJ para un evento de empresa en Barcelona?",
    travelFaqQuestion: "¿Podéis coordinaros con nuestra agencia de eventos o el espacio?",
    travelFaqAnswer:
      "Sí. Nos coordinamos con la agencia, el espacio o el equipo de catering para encajar horarios, sonido y necesidades técnicas sin fricciones el día del evento.",
  },
  {
    path: "/dj-fiestas-privadas-barcelona",
    navLabel: "Fiestas privadas",
    city: "Barcelona",
    cityShort: "Privadas",
    heroLine1: "DJ para fiestas",
    heroLine2: "privadas",
    heroSubtitle: "cumpleaños, celebraciones familiares y fiestas en locales o casas privadas",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para fiestas privadas en Barcelona | Extradivertion",
    seoDescription:
      "DJ para fiestas privadas en Barcelona: cumpleaños, celebraciones familiares y fiestas en locales o casas privadas. Música, sonido e iluminación.",
    ogDescription:
      "DJ para fiestas privadas en Barcelona con música comercial y house, sonido, iluminación y montaje para celebraciones a medida.",
    zoneHeadingMain: "DJ para fiestas privadas",
    zoneHeadingHighlight: "en Barcelona",
    serviceIntro:
      "Si estás organizando una fiesta privada en Barcelona, un cumpleaños o una celebración en un local, casa privada o sala reservada, preparamos una sesión DJ adaptada al ambiente que buscas para que la pista funcione de forma natural desde el primer tema.",
    zoneParagraph1:
      "Trabajamos con música comercial y house, además de estilos actuales, clásicos de fiesta y canciones importantes para el grupo. También podemos incluir sonido e iluminación, cabina DJ y montaje adaptado al espacio para que no tengas que preocuparte por la parte técnica.",
    zoneParagraph2:
      "Cubrimos Barcelona y alrededores, incluyendo celebraciones privadas, cumpleaños, fiestas en locales, eventos en casas y formatos a medida en Sabadell, Terrassa, Sant Cugat y el resto del Vallès Occidental.",
    formLocation: "Barcelona",
    footerLocationText: "Barcelona · Fiestas privadas · Vallès Occidental",
    areaServed: ["Barcelona", "Sabadell", "Terrassa", "Sant Cugat del Vallès", "Vallès Occidental"],
    pricingFaqQuestion: "¿Cuánto cuesta un DJ para una fiesta privada en Barcelona?",
    travelFaqQuestion: "¿Trabajáis en casas privadas y locales reservados?",
    travelFaqAnswer:
      "Sí. Trabajamos en casas privadas, locales, salas privadas, terrazas y espacios para eventos en Barcelona y alrededores. Antes del evento confirmamos acceso, horarios y potencia disponible.",
  },
  {
    path: "/dj-bodas-barcelona",
    navLabel: "Bodas",
    city: "Barcelona",
    cityShort: "Bodas",
    heroLine1: "DJ para bodas",
    heroLine2: "Barcelona",
    heroSubtitle: "música cuidada para el banquete y la fiesta, de principio a fin",
    heroImages: ["/dj-home-blue.jpg", "/dj-eventos-barcelona-montaje-iluminacion.jpg"],
    seoTitle: "DJ para bodas en Barcelona | Extradivertion",
    seoDescription:
      "DJ para bodas en Barcelona y Vallès Occidental. Música personalizada para banquete y fiesta, sonido, iluminación y coordinación previa con los novios.",
    ogDescription:
      "Servicio de DJ para bodas en Barcelona con música personalizada, sonido, iluminación y coordinación previa con los novios.",
    zoneHeadingMain: "DJ para bodas en Barcelona",
    zoneHeadingHighlight: "y Vallès Occidental",
    serviceIntro:
      "Servicio de DJ para bodas en Barcelona y el Vallès Occidental. Coordinamos contigo la música del banquete y de la fiesta para que la transición entre momentos sea natural y el ambiente acompañe toda la celebración.",
    zoneParagraph1:
      "Antes de la boda hablamos con los novios sobre estilos, canciones importantes, momentos especiales (primer baile, entradas, sorpresas) y temas que preferís evitar. El objetivo es que la música se sienta pensada para vosotros, no genérica.",
    zoneParagraph2:
      "Trabajamos en fincas, masías, salones de banquetes y espacios privados en Barcelona, Sabadell, Terrassa, Sant Cugat y el resto del Vallès Occidental. Si el espacio ya tiene equipo de sonido, lo revisamos para ajustar la propuesta.",
    formLocation: "Barcelona",
    footerLocationText: "Barcelona · Bodas · Vallès Occidental",
    areaServed: ["Barcelona", "Sabadell", "Terrassa", "Sant Cugat del Vallès", "Vallès Occidental"],
    pricingFaqQuestion: "¿Cuánto cuesta contratar un DJ para una boda en Barcelona?",
    travelFaqQuestion: "¿Coordináis la música con la finca o el espacio de la boda?",
    travelFaqAnswer:
      "Sí. Antes de la boda contactamos con el espacio o el wedding planner para confirmar horarios, potencia disponible y cualquier restricción de sonido del recinto.",
  },
];

export const getPageConfig = (pathname: string): PageConfig => {
  const currentPath = pathname.replace(/\/$/, "") || "/";
  return pageConfigs.find((page) => page.path === currentPath) ?? pageConfigs[0];
};
