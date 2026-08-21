import type { ReactNode } from "react";
import type { PageConfig } from "../data/pageConfigs";
import { BUSINESS } from "../data/business";
import { NAV_SERVICES, NAV_ZONES } from "../data/content";
import { ArrowRightIcon, LightningIcon, MailIcon, PhoneIcon, PlusIcon, WhatsAppIcon } from "./ui";

const SECTION_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios DJ" },
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
          {/* Banda de cierre: último empujón al formulario */}
          <a
            href="#formulario"
            className="group mb-8 flex flex-col gap-3 rounded-2xl border border-orange-400/30 bg-orange-500/[0.08] px-5 py-4 transition hover:border-orange-400/60 hover:bg-orange-500/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[15px] font-semibold leading-6 text-orange-50">
              <LightningIcon className="mr-2 inline h-4 w-4 align-[-2px] text-orange-400" />
              ¿Tienes fecha? Pide presupuesto y te respondemos en menos de 1 hora.
            </p>
            <span className="inline-flex shrink-0 items-center gap-2 text-[13px] font-black uppercase tracking-[0.14em] text-orange-300 transition group-hover:gap-3 group-hover:text-white">
              Pedir presupuesto
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </a>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <img
                src="/logo-sobre-nosotros.png"
                alt="Extradivertion"
                width={789}
                height={300}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain object-left invert"
              />

              <h2 className="mt-5 font-display text-2xl uppercase tracking-[0.005em] text-white md:text-3xl">
                DJ para eventos en Barcelona
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">{pageConfig.footerLocationText}</p>
              <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
                Bodas, eventos privados, corporativos, discotecas y celebraciones a medida.
              </p>

              <div className="mt-6 grid gap-2.5">
                <FooterContact href={BUSINESS.whatsappHref} icon={<WhatsAppIcon className="h-4 w-4" />} label="WhatsApp" />
                <FooterContact href={`tel:${BUSINESS.phoneHref}`} icon={<PhoneIcon className="h-4 w-4" />} label={BUSINESS.phoneDisplay} />
                <FooterContact href={`mailto:${BUSINESS.email}`} icon={<MailIcon className="h-4 w-4" />} label={BUSINESS.email} />
              </div>
            </div>

            <nav aria-label="Navegación del footer" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <FooterLinks title="Secciones" items={SECTION_LINKS.map((l) => ({ name: l.label, path: l.href }))} />
              <FooterLinks
                title="Servicios"
                items={NAV_SERVICES.map((s) => ({ name: `DJ ${s.name.toLowerCase()}`, path: s.path }))}
              />
              <FooterLinks
                title="Zonas"
                items={NAV_ZONES.map((z) => ({ name: `DJ eventos ${z.name}`, path: z.path }))}
              />
            </nav>

            <div className="grid content-start gap-2.5 text-sm text-slate-300">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Legal</p>
              <details className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition open:bg-white/[0.08] hover:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">Aviso legal<span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-200 transition duration-200 group-open:rotate-45 group-open:bg-sky-400 group-open:text-slate-950"><PlusIcon className="h-3 w-3" /></span></summary>
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
              <details className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition open:bg-white/[0.08] hover:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">Política de privacidad<span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-200 transition duration-200 group-open:rotate-45 group-open:bg-sky-400 group-open:text-slate-950"><PlusIcon className="h-3 w-3" /></span></summary>
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
              <details className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition open:bg-white/[0.08] hover:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">Política de cookies<span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-200 transition duration-200 group-open:rotate-45 group-open:bg-sky-400 group-open:text-slate-950"><PlusIcon className="h-3 w-3" /></span></summary>
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
              <details className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition open:bg-white/[0.08] hover:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400">Condiciones de contratación<span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-200 transition duration-200 group-open:rotate-45 group-open:bg-sky-400 group-open:text-slate-950"><PlusIcon className="h-3 w-3" /></span></summary>
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

function FooterContact({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="group inline-flex w-fit max-w-full items-center gap-2.5 text-sm text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky-300 transition group-hover:border-sky-300/40 group-hover:bg-sky-300/15">
        {icon}
      </span>
      <span className="truncate font-semibold">{label}</span>
    </a>
  );
}

function FooterLinks({ title, items }: { title: string; items: { name: string; path: string }[] }) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">{title}</p>
      <ul className="grid gap-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className="inline-block transition hover:translate-x-0.5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
