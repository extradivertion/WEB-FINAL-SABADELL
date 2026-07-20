import type { PageConfig } from "./pageConfigs";

export type FaqItem = { question: string; answer: string };

export const NAV_ZONES: { name: string; path: string }[] = [
  { name: "Barcelona ciudad", path: "/dj-eventos-barcelona" },
  { name: "Sabadell", path: "/dj-eventos-sabadell" },
  { name: "Terrassa", path: "/dj-eventos-terrassa" },
  { name: "Sant Cugat del Vallès", path: "/dj-eventos-sant-cugat" },
  { name: "Cerdanyola del Vallès", path: "/dj-eventos-cerdanyola" },
  { name: "Rubí", path: "/dj-eventos-rubi" },
  { name: "Barberà del Vallès", path: "/dj-eventos-barbera-del-valles" },
  { name: "Sant Quirze del Vallès", path: "/dj-eventos-sant-quirze-del-valles" },
];

export const NAV_SERVICES: { name: string; path: string }[] = [
  { name: "Bodas", path: "/dj-bodas-barcelona" },
  { name: "Fiestas privadas", path: "/dj-fiestas-privadas-barcelona" },
  { name: "Eventos de empresa", path: "/dj-eventos-empresa-barcelona" },
  { name: "Vallès Occidental", path: "/dj-eventos-valles-occidental" },
];

export type ServiceCard = {
  title: string;
  text: string;
  image: string;
  link: string;
};

export const EVENT_SERVICE_CARDS: ServiceCard[] = [
  {
    title: "DJ para bodas",
    text: "Música coordinada para banquete y fiesta, con los momentos importantes cuidados al detalle.",
    image: "/montaje-dj-profesional-barcelona.jpg",
    link: "/dj-bodas-barcelona",
  },
  {
    title: "DJ para fiestas privadas",
    text: "Cumpleaños, celebraciones familiares y fiestas en locales o casas privadas.",
    image: "/servicio-fiestas.jpg",
    link: "/dj-fiestas-privadas-barcelona",
  },
  {
    title: "DJ para eventos de empresa",
    text: "Cenas corporativas, afterworks y celebraciones internas con un tono profesional.",
    image: "/servicio-corporativos.jpg",
    link: "/dj-eventos-empresa-barcelona",
  },
  {
    title: "DJ para discotecas y locales",
    text: "Sesiones adaptadas al público, al horario y al tipo de sala o celebración.",
    image: "/servicio-discoteca.jpg",
    link: "#formulario",
  },
  {
    title: "Tardeos, graduaciones y fiestas universitarias",
    text: "Sesiones pensadas para público joven, con la energía adecuada según el momento del evento.",
    image: "/servicio-privados.jpg",
    link: "#formulario",
  },
  {
    title: "Experiencias musicales a medida",
    text: "Eventos deportivos, celebraciones especiales y formatos que no encajan en una categoría fija.",
    image: "/servicio-medida.jpg",
    link: "#formulario",
  },
];

export type ProcessStep = { step: string; title: string; text: string };

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "1",
    title: "Nos cuentas tu evento",
    text: "Fecha, ubicación, tipo de celebración y número de invitados. Puedes escribirnos por WhatsApp, correo o el formulario.",
  },
  {
    step: "2",
    title: "Recibes una propuesta a medida",
    text: "Preparamos un presupuesto ajustado al espacio, la duración y el equipo que necesita tu evento.",
  },
  {
    step: "3",
    title: "Reservamos la fecha",
    text: "Confirmamos disponibilidad y bloqueamos el día para que puedas seguir organizando el resto del evento tranquilo.",
  },
  {
    step: "4",
    title: "Coordinamos la música y los detalles",
    text: "Hablamos de estilos, canciones importantes, momentos especiales y cualquier detalle técnico del espacio.",
  },
  {
    step: "5",
    title: "Montaje y fiesta",
    text: "Llegamos con tiempo para el montaje, revisamos el sonido y nos encargamos de que la música funcione toda la noche.",
  },
];

export const EQUIPMENT_ITEMS: string[] = [
  "DJ profesional",
  "Controladora y mesa de mezclas",
  "Cabina DJ",
  "Equipo de sonido profesional",
  "Iluminación tipo discoteca",
  "Micrófono",
  "Montaje y desmontaje",
  "Transporte incluido",
];

export const TRUST_ITEMS = [
  { label: "EVENTOS AL AÑO", value: "+50", text: "eventos realizados cada año" },
  { label: "MÚSICA", value: "100% a medida", text: "personalizada para cada evento" },
  { label: "SERVICIO", value: "DJ + equipo", text: "sonido, cabina e iluminación" },
];

export type Review = { name: string; location: string; text: string };

export const REVIEWS: Review[] = [
  {
    name: "Marta · cumpleaños privado",
    location: "Barcelona",
    text: "Queríamos una fiesta animada pero sin que pareciera una sesión genérica. Entendió muy rápido el estilo, mezcló temas actuales con clásicos y la gente acabó bailando muchísimo más de lo que esperábamos.",
  },
  {
    name: "Álvaro · fiesta privada",
    location: "Sabadell",
    text: "Muy fácil organizarlo todo. Nos orientó con el horario, el equipo y el tipo de música. Durante la fiesta fue adaptándose al ambiente y eso se notó bastante.",
  },
  {
    name: "Paula · evento de empresa",
    location: "Terrassa",
    text: "Buscábamos algo profesional pero con buen ambiente, y salió muy bien. Música cuidada, montaje limpio y trato cercano desde el primer contacto.",
  },
];

export type ResultImage = { src: string; alt: string; className: string };

export const RESULT_IMAGES: ResultImage[] = [
  {
    src: "/dj-eventos-barcelona-montaje-iluminacion.jpg",
    alt: "Montaje DJ para eventos en Barcelona con iluminación",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/cabina-dj-evento-privado-barcelona.jpg",
    alt: "Cabina DJ para evento privado en Barcelona",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/dj-evento-barcelona-sonido-iluminacion.jpg",
    alt: "DJ para evento en Barcelona con sonido e iluminación",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/dj-fiesta-privada-sabadell.jpg",
    alt: "DJ para fiesta privada en Sabadell",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/fiesta-dj-barcelona-luces-ambiente.jpg",
    alt: "Fiesta con DJ, luces y ambiente en Barcelona",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/evento-corporativo-dj-barcelona.jpg",
    alt: "DJ para evento corporativo en Barcelona",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/dj-fiesta-privada-valles-occidental.jpg",
    alt: "DJ para fiesta privada en Vallès Occidental",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/montaje-dj-profesional-barcelona.jpg",
    alt: "Montaje DJ profesional para evento en Barcelona",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/sesion-dj-barcelona-evento.jpg",
    alt: "Sesión DJ para evento en Barcelona",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/evento-privado-musica-dj-barcelona.jpg",
    alt: "Evento privado con música DJ en Barcelona",
    className: "md:col-span-1 md:row-span-1",
  },
];

const BASE_FAQS: FaqItem[] = [
  {
    question: "¿Qué incluye el servicio de DJ?",
    answer:
      "Según lo que necesite tu evento, el servicio puede incluir DJ profesional, controladora y cabina DJ, equipo de sonido, iluminación tipo discoteca, micrófono, transporte y montaje/desmontaje. Ajustamos el equipo al tamaño del espacio para no incluir nada innecesario.",
  },
  {
    question: "¿Podemos elegir la música?",
    answer:
      "Sí. Antes del evento hablamos contigo para entender estilos, canciones importantes, momentos especiales y temas que prefieres evitar. Trabajamos un formato open format: música comercial, house, reggaeton, urbano, clásicos de fiesta y remember, adaptado al público.",
  },
  {
    question: "¿Con cuánto tiempo hay que reservar?",
    answer:
      "Lo ideal es reservar con varias semanas de margen, especialmente si el evento es en fin de semana, verano, Navidad o fechas con mucha demanda. Aun así, si tienes una fecha cercana, escríbenos y revisamos disponibilidad.",
  },
  {
    question: "¿Cuánto dura el servicio?",
    answer:
      "Lo habitual son entre 3 y 6 horas, pero se ajusta a cada evento. En el formulario puedes indicar las horas que necesitas y te lo confirmamos en la propuesta.",
  },
  {
    question: "¿Qué ocurre si necesitamos ampliar el horario?",
    answer:
      "Si el espacio lo permite, podemos ampliar el horario del servicio el mismo día del evento. Lo hablamos con el DJ en el momento y se ajusta al presupuesto según las horas extra.",
  },
];

export const buildFaqs = (page: PageConfig): FaqItem[] => [
  {
    question: page.pricingFaqQuestion,
    answer:
      "El precio depende de la fecha, la ubicación, la duración, el número de invitados y las necesidades técnicas del espacio. Antes de dar un precio revisamos el tipo de evento y preparamos un presupuesto a medida.",
  },
  BASE_FAQS[0],
  { question: page.travelFaqQuestion, answer: page.travelFaqAnswer },
  BASE_FAQS[1],
  BASE_FAQS[2],
  BASE_FAQS[3],
  BASE_FAQS[4],
];
