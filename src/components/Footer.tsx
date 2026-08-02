import type { PageConfig } from "../data/pageConfigs";
import { BUSINESS } from "../data/business";
import { NAV_SERVICES, NAV_ZONES } from "../data/content";

const SECTION_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios DJ" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#zonas", label: "Zonas de servicio" },
  { href: "#conocenos", label: "Sobre nosotros" },
  { href: "#equipo-disponible", label: "Equipo disponible" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contactar" },
];

export default function Footer({ pageConfig }: { pageConfig: PageConfig }) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-9 md:px-6 md:py-12">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.18)] backdrop-blur md:rounded-[2rem] md:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">Extradivertion</p>
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                DJ para eventos en Barcelona
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{pageConfig.footerLocationText}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Bodas, eventos privados, corporativos, discotecas y celebraciones a medida.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <a href={BUSINESS.whatsappHref} className="text-sky-200 transition hover:text-white">
                  WhatsApp
                </a>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <a href={`mailto:${BUSINESS.email}`} className="text-sky-200 transition hover:text-white">
                  {BUSINESS.email}
                </a>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <a href={`tel:${BUSINESS.phoneHref}`} className="text-sky-200 transition hover:text-white">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <nav aria-label="Navegación del footer" className="grid gap-2 text-sm text-slate-300">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Navegación</p>
              {SECTION_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}

              <div className="my-2 border-t border-white/10" />

              {NAV_SERVICES.map((service) => (
                <a key={service.path} href={service.path} className="transition hover:text-white">
                  DJ {service.name.toLowerCase()}
                </a>
              ))}
              {NAV_ZONES.map((zone) => (
                <a key={zone.path} href={zone.path} className="transition hover:text-white">
                  DJ eventos {zone.name}
                </a>
              ))}
            </nav>

            <div className="grid gap-2 text-sm text-slate-300 md:min-w-[240px]">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Legal</p>
              <details className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <summary className="cursor-pointer list-none font-medium text-white">Aviso legal</summary>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <p>
                    El titular de esta web es <strong>Extradivertion</strong>.
                  </p>
                  <p>
                    <strong>Domicilio:</strong> Sabadell
                  </p>
                  <p>
                    <strong>Correo de contacto:</strong>{" "}
                    <a href={`mailto:${BUSINESS.email}`} className="text-sky-200 hover:text-white">
                      {BUSINESS.email}
                    </a>
                  </p>
                  <p>
                    <strong>Teléfono / WhatsApp:</strong> {BUSINESS.phoneDisplay}
                  </p>
                  <p>
                    <strong>Actividad:</strong> servicios DJ para bodas, eventos privados, corporativos, discotecas y
                    celebraciones a medida.
                  </p>
                </div>
              </details>
              <details className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <summary className="cursor-pointer list-none font-medium text-white">Política de privacidad</summary>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <p>
                    <strong>Responsable:</strong> Extradivertion.
                  </p>
                  <p>
                    <strong>Finalidad:</strong> atender solicitudes de información y presupuesto realizadas por
                    formulario, WhatsApp o correo electrónico.
                  </p>
                  <p>
                    <strong>Base jurídica:</strong> aplicación de medidas precontractuales a petición del interesado.
                  </p>
                  <p>
                    <strong>Derechos:</strong> acceso, rectificación, supresión, oposición, limitación y portabilidad
                    escribiendo a{" "}
                    <a href={`mailto:${BUSINESS.email}`} className="text-sky-200 hover:text-white">
                      {BUSINESS.email}
                    </a>
                    .
                  </p>
                </div>
              </details>
              <details className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <summary className="cursor-pointer list-none font-medium text-white">Política de cookies</summary>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <p>
                    Esta web usa cookies técnicas necesarias para su funcionamiento y cookies de Google Ads para medir
                    conversiones de nuestras campañas publicitarias.
                  </p>
                  <p>
                    Puedes bloquear o eliminar estas cookies desde la configuración de tu navegador en cualquier
                    momento. Para más información sobre el tratamiento de tus datos, consulta la política de
                    privacidad.
                  </p>
                </div>
              </details>
              <details className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <summary className="cursor-pointer list-none font-medium text-white">Condiciones de contratación</summary>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <p>Las solicitudes enviadas desde esta web no constituyen contratación automática del servicio.</p>
                  <p>
                    Las condiciones finales de precio, horario, desplazamiento, necesidades técnicas, forma de pago y
                    cancelación se concretarán en la propuesta o acuerdo final correspondiente.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Extradivertion. Todos los derechos reservados.</p>
            <p>DJ para bodas y eventos en Barcelona, Sabadell, Terrassa y Vallès Occidental.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
