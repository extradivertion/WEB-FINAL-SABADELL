// OBJETIVO
// Que TODAS las páginas locales usen la MISMA web principal de App.tsx,
// pero cambiando textos, título SEO, meta description, canonical, H1, zona y formulario según la URL.

// ARCHIVOS A TOCAR EN GITHUB:
// 1) src/App.tsx
// 2) src/main.tsx
// 3) public/sitemap.xml, solo si aún no tiene todas las URLs
// 4) vercel.json, solo comprobar que sigue correcto

// NO TOCAR:
// index.html
// LocalSeoPage.tsx puede quedarse, pero ya no se usará si main.tsx renderiza App directamente.


// ============================================================================
// CAMBIO 1 — src/App.tsx
// PEGA ESTE BLOQUE JUSTO DEBAJO DEL IMPORT, ANTES DE:
// export default function DJBarcelonaLanding() {
// ============================================================================

type PageConfig = {
  path: string;
  city: string;
  cityShort: string;
  heroLine1: string;
  heroLine2: string;
  heroSubtitle: string;
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
};

const pageConfigs: PageConfig[] = [
  {
    path: "/",
    city: "Barcelona",
    cityShort: "BCN",
    heroLine1: "DJ para eventos",
    heroLine2: "Barcelona",
    heroSubtitle: "música que hará inolvidable tu evento",
    seoTitle: "DJ para eventos en Barcelona | Extradivertion",
    seoDescription:
      "DJ para eventos en Barcelona y Vallès Occidental. Música, sonido e iluminación para fiestas privadas, eventos corporativos, discotecas y celebraciones a medida.",
    ogDescription:
      "Servicio de DJ para eventos privados, empresas, discotecas y celebraciones en Barcelona, Sabadell, Terrassa y Vallès Occidental.",
    zoneHeadingMain: "Servicio DJ en Barcelona",
    zoneHeadingHighlight: "y alrededores",
    serviceIntro:
      "Servicio de DJ en Barcelona para fiestas privadas, eventos corporativos, discotecas, cumpleaños y celebraciones a medida. Adaptamos la música, el equipo y el montaje al espacio y al público.",
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
  },
  {
    path: "/dj-eventos-barcelona",
    city: "Barcelona",
    cityShort: "BCN",
    heroLine1: "DJ para eventos",
    heroLine2: "Barcelona",
    heroSubtitle: "música que hará inolvidable tu evento en Barcelona",
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
  },
  {
    path: "/dj-eventos-sabadell",
    city: "Sabadell",
    cityShort: "SBD",
    heroLine1: "DJ para eventos",
    heroLine2: "Sabadell",
    heroSubtitle: "música, sonido e iluminación para eventos en Sabadell",
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
  },
  {
    path: "/dj-eventos-terrassa",
    city: "Terrassa",
    cityShort: "TRS",
    heroLine1: "DJ para eventos",
    heroLine2: "Terrassa",
    heroSubtitle: "servicio DJ para fiestas, empresas y celebraciones en Terrassa",
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
  },
  {
    path: "/dj-eventos-sant-cugat",
    city: "Sant Cugat del Vallès",
    cityShort: "Sant Cugat",
    heroLine1: "DJ para eventos",
    heroLine2: "Sant Cugat",
    heroSubtitle: "música y montaje profesional para eventos en Sant Cugat",
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
  },
  {
    path: "/dj-eventos-rubi",
    city: "Rubí",
    cityShort: "Rubí",
    heroLine1: "DJ para eventos",
    heroLine2: "Rubí",
    heroSubtitle: "DJ para fiestas privadas, cumpleaños y eventos de empresa en Rubí",
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
  },
  {
    path: "/dj-eventos-cerdanyola",
    city: "Cerdanyola del Vallès",
    cityShort: "Cerdanyola",
    heroLine1: "DJ para eventos",
    heroLine2: "Cerdanyola",
    heroSubtitle: "servicio DJ para fiestas privadas, empresas y celebraciones en Cerdanyola",
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
  },
  {
    path: "/dj-eventos-barbera-del-valles",
    city: "Barberà del Vallès",
    cityShort: "Barberà",
    heroLine1: "DJ para eventos",
    heroLine2: "Barberà",
    heroSubtitle: "música y sonido para eventos en Barberà del Vallès",
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
  },
  {
    path: "/dj-eventos-sant-quirze-del-valles",
    city: "Sant Quirze del Vallès",
    cityShort: "Sant Quirze",
    heroLine1: "DJ para eventos",
    heroLine2: "Sant Quirze",
    heroSubtitle: "DJ para fiestas privadas, empresas y celebraciones en Sant Quirze",
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
  },
];

const getCurrentPageConfig = () => {
  if (typeof window === "undefined") return pageConfigs[0];
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  return pageConfigs.find((page) => page.path === currentPath) || pageConfigs[0];
};

const getCanonicalUrl = (path: string) =>
  path === "/" ? "https://extradivertion.com/" : `https://extradivertion.com${path}`;


// ============================================================================
// CAMBIO 2 — src/App.tsx
// DENTRO DE export default function DJBarcelonaLanding() {
// PEGA ESTO COMO PRIMERAS LÍNEAS DE LA FUNCIÓN, ANTES DEL useState DEL FORMULARIO
// ============================================================================

const pageConfig = getCurrentPageConfig();
const canonicalUrl = getCanonicalUrl(pageConfig.path);


// ============================================================================
// CAMBIO 3 — src/App.tsx
// EN EL useState DEL FORMULARIO, CAMBIA location: "" POR:
// ============================================================================

location: pageConfig.formLocation,


// ============================================================================
// CAMBIO 4 — src/App.tsx
// SUSTITUYE trustItems POR ESTE BLOQUE:
// ============================================================================

const trustItems = [
  { label: "EVENTOS A MEDIDA", value: "Personalizado", text: "música adaptada a cada público" },
  { label: "ZONA DE SERVICIO", value: pageConfig.cityShort, text: `${pageConfig.city} y alrededores` },
  { label: "SERVICIO COMPLETO", value: "DJ + equipo", text: "sonido, cabina e iluminación" },
];


// ============================================================================
// CAMBIO 5 — src/App.tsx
// SUSTITUYE const zones POR ESTE BLOQUE:
// ============================================================================

const zones = [
  { name: "Barcelona ciudad", path: "/dj-eventos-barcelona" },
  { name: "Sabadell", path: "/dj-eventos-sabadell" },
  { name: "Terrassa", path: "/dj-eventos-terrassa" },
  { name: "Sant Cugat del Vallès", path: "/dj-eventos-sant-cugat" },
  { name: "Cerdanyola del Vallès", path: "/dj-eventos-cerdanyola" },
  { name: "Rubí", path: "/dj-eventos-rubi" },
  { name: "Barberà del Vallès", path: "/dj-eventos-barbera-del-valles" },
  { name: "Sant Quirze del Vallès", path: "/dj-eventos-sant-quirze-del-valles" },
];


// ============================================================================
// CAMBIO 6 — src/App.tsx
// EN handleSubmit, CAMBIA:
// payload.append("Ubicación", formData.location || "No indicada");
// POR:
// ============================================================================

payload.append("Ubicación", formData.location || pageConfig.formLocation || "No indicada");
payload.append("Página local", pageConfig.city);


// ============================================================================
// CAMBIO 7 — src/App.tsx
// EN setFormData DESPUÉS DE ENVIAR, CAMBIA location: "" POR:
// ============================================================================

location: pageConfig.formLocation,


// ============================================================================
// CAMBIO 8 — src/App.tsx
// EN EL useEffect DE SEO, SUSTITUYE LAS PARTES INDICADAS:
// ============================================================================

// document.title = "DJ para eventos en Barcelona | Extradivertion";
// POR:
document.title = pageConfig.seoTitle;

// description content fijo POR:
content: pageConfig.seoDescription,

// og:title content fijo POR:
content: pageConfig.seoTitle,

// og:description content fijo POR:
content: pageConfig.ogDescription,

// og:url content fijo POR:
content: canonicalUrl,

// canonical href fijo POR:
href: canonicalUrl,

// En el schema cambia:
// url: "https://extradivertion.com/",
// POR:
url: canonicalUrl,

// Cambia addressLocality: "Sabadell",
// POR:
addressLocality: pageConfig.city,

// Cambia areaServed: [ ... ],
// POR:
areaServed: pageConfig.areaServed,

// Cambia description fija POR:
description: pageConfig.seoDescription,

// Cambia name del primer Service por:
name: pageConfig.heroLine1 + " en " + pageConfig.city,

// IMPORTANTE: al final del useEffect cambia:
// }, []);
// POR:
}, [canonicalUrl, pageConfig]);


// ============================================================================
// CAMBIO 9 — src/App.tsx
// EN EL HERO, CAMBIA LOS TEXTOS FIJOS:
// ============================================================================

// Cambia:
// <span className="block">DJ para eventos</span>
// POR:
<span className="block">{pageConfig.heroLine1}</span>

// Cambia:
// Barcelona
// POR:
{pageConfig.heroLine2}

// Cambia:
// música que hará inolvidable tu evento
// POR:
{pageConfig.heroSubtitle}


// ============================================================================
// CAMBIO 10 — src/App.tsx
// EN LA SECCIÓN SERVICIOS, CAMBIA EL PÁRRAFO FIJO POR:
// ============================================================================

<p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
  {pageConfig.serviceIntro}
</p>


// ============================================================================
// CAMBIO 11 — src/App.tsx
// EN LA SECCIÓN ZONAS, CAMBIA EL H2 Y LOS DOS PÁRRAFOS:
// ============================================================================

<h2 className="mt-4 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
  {pageConfig.zoneHeadingMain}
  <span className="block bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
    {pageConfig.zoneHeadingHighlight}
  </span>
</h2>

<p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8">
  {pageConfig.zoneParagraph1}
</p>

<p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8">
  {pageConfig.zoneParagraph2}
</p>


// ============================================================================
// CAMBIO 12 — src/App.tsx
// EN LAS TARJETAS DE ZONAS, SUSTITUYE EL zones.map ACTUAL POR ESTE:
// ============================================================================

{zones.map((zone) => (
  <a
    key={zone.name}
    href={zone.path}
    className="group flex min-h-[58px] items-center justify-center rounded-[1rem] border border-white/18 bg-white/[0.075] px-3 py-3 text-center shadow-[0_10px_20px_rgba(0,0,0,0.18)] ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-sky-200/35 hover:bg-white/[0.11] md:min-h-[64px] md:px-3.5 md:py-3.5"
  >
    <p className="text-[14px] font-bold leading-5 text-white md:text-[15px]">
      {zone.name}
    </p>
  </a>
))}


// ============================================================================
// CAMBIO 13 — src/App.tsx
// EN EL FORMULARIO, CAMBIA LOS TEXTOS GENERALES POR VERSIONES DINÁMICAS:
// ============================================================================

// Cambia:
// Presupuesto DJ para eventos
// POR:
Presupuesto DJ para eventos en {pageConfig.city}

// Cambia el párrafo del formulario por:
<p className="mt-3 text-sm leading-7 text-slate-200 md:text-base">
  Déjanos la información básica y te responderemos con una propuesta adaptada para tu evento en {pageConfig.city} o alrededores.
</p>

// Cambia placeholder="Barcelona, Sabadell, Terrassa..." por:
placeholder={pageConfig.formLocation}


// ============================================================================
// CAMBIO 14 — src/App.tsx
// EN CONTACTO DIRECTO, CAMBIA EL PÁRRAFO POR:
// ============================================================================

<p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
  Si buscas un DJ para eventos en {pageConfig.city}, escríbenos por WhatsApp o mándanos un correo con los detalles del evento.
</p>


// ============================================================================
// CAMBIO 15 — src/App.tsx
// EN FOOTER, CAMBIA EL TEXTO DE LOCALIZACIÓN POR:
// ============================================================================

<p className="mt-3 text-sm leading-7 text-slate-300">
  {pageConfig.footerLocationText}
</p>


// ============================================================================
// CAMBIO 16 — src/App.tsx
// EN FOOTER, SUSTITUYE EL BLOQUE DE NAVEGACIÓN POR ESTE:
// ============================================================================

<div className="grid gap-2 text-sm text-slate-300">
  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
    Navegación
  </p>
  <a href="#inicio" className="transition hover:text-white">Inicio</a>
  <a href="#servicios" className="transition hover:text-white">Servicios DJ</a>
  <a href="#zonas" className="transition hover:text-white">Zonas de servicio</a>
  <a href="#conocenos" className="transition hover:text-white">Sobre nosotros</a>
  <a href="#equipo-disponible" className="transition hover:text-white">Equipo disponible</a>
  <a href="#resultados" className="transition hover:text-white">Resultados</a>
  <a href="#faq" className="transition hover:text-white">Preguntas frecuentes</a>
  <a href="#contacto" className="transition hover:text-white">Contactar</a>

  <div className="my-2 border-t border-white/10" />

  <a href="/dj-eventos-barcelona" className="transition hover:text-white">DJ eventos Barcelona</a>
  <a href="/dj-eventos-sabadell" className="transition hover:text-white">DJ eventos Sabadell</a>
  <a href="/dj-eventos-terrassa" className="transition hover:text-white">DJ eventos Terrassa</a>
  <a href="/dj-eventos-sant-cugat" className="transition hover:text-white">DJ eventos Sant Cugat</a>
  <a href="/dj-eventos-rubi" className="transition hover:text-white">DJ eventos Rubí</a>
  <a href="/dj-eventos-cerdanyola" className="transition hover:text-white">DJ eventos Cerdanyola</a>
  <a href="/dj-eventos-barbera-del-valles" className="transition hover:text-white">DJ eventos Barberà</a>
  <a href="/dj-eventos-sant-quirze-del-valles" className="transition hover:text-white">DJ eventos Sant Quirze</a>
</div>


// ============================================================================
// CAMBIO 17 — src/main.tsx
// SUSTITUYE TODO main.tsx POR ESTO:
// ============================================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// ============================================================================
// CAMBIO 18 — vercel.json
// COMPRUEBA QUE ESTÁ ASÍ:
// ============================================================================

{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}


// ============================================================================
// RESULTADO FINAL
// ============================================================================
// Todas estas URLs cargarán la misma web principal, pero con textos distintos:
// /dj-eventos-barcelona
// /dj-eventos-sabadell
// /dj-eventos-terrassa
// /dj-eventos-sant-cugat
// /dj-eventos-rubi
// /dj-eventos-cerdanyola
// /dj-eventos-barbera-del-valles
// /dj-eventos-sant-quirze-del-valles
