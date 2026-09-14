import { useEffect, useRef, useState, type KeyboardEvent, type RefObject } from "react";
import type { PageConfig } from "../data/pageConfigs";
import { BUSINESS } from "../data/business";
import { useContactForm, type ContactFormData } from "../hooks/useContactForm";
import { ArrowRightIcon, CheckIcon, LightningIcon, PlusIcon } from "./ui";

type StepBase = {
  field: keyof ContactFormData;
  question: string;
  required: boolean;
};

type FieldStep = StepBase & {
  kind: "field";
  type: "text" | "tel" | "email" | "date";
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "numeric";
};

type TextareaStep = StepBase & {
  kind: "textarea";
  placeholder?: string;
};

type ChoiceStep = StepBase & {
  kind: "choice";
  options: string[];
};

type Step = FieldStep | TextareaStep | ChoiceStep;

const EVENT_TYPE_OPTIONS = [
  "Boda",
  "Cumpleaños",
  "Fiesta privada",
  "Evento de empresa",
  "Discoteca o local",
  "Tardeo",
  "Graduación",
  "Fiesta universitaria",
  "Evento deportivo",
  "Otro",
];

const HOURS_OPTIONS = ["2 horas", "3 horas", "4 horas", "5 horas", "6 horas", "Más de 6 horas"];

const STEPS: Step[] = [
  { kind: "field", field: "name", question: "¿Cuál es tu nombre?", required: true, type: "text", placeholder: "ej: Álvaro Martínez", autoComplete: "name" },
  { kind: "field", field: "phone", question: "¿Cuál es tu teléfono?", required: true, type: "tel", placeholder: "ej: 644 353 133", autoComplete: "tel" },
  { kind: "choice", field: "eventType", question: "¿Qué tipo de evento es?", required: true, options: EVENT_TYPE_OPTIONS },
  { kind: "field", field: "location", question: "¿Dónde se celebra el evento?", required: true, type: "text", placeholder: "ej: Barcelona, Sabadell...", autoComplete: "address-level2" },
  { kind: "field", field: "eventDate", question: "¿Qué fecha tiene el evento?", required: false, type: "date" },
  { kind: "field", field: "guests", question: "¿Cuántos invitados aproximadamente?", required: false, type: "text", placeholder: "ej: 80", inputMode: "numeric" },
  { kind: "choice", field: "hours", question: "¿Cuántas horas de servicio necesitas?", required: false, options: HOURS_OPTIONS },
  { kind: "choice", field: "venueType", question: "¿Se celebrará en exterior o en interior?", required: false, options: ["Exterior", "Interior", "Ambos", "No lo sé"] },
  { kind: "textarea", field: "details", question: "¿Algo más que debamos saber?", required: false, placeholder: "Estilo musical, momentos especiales, horario exacto..." },
];

const START_POINTS = ["Sin compromiso", "2 minutos", "Te respondemos hoy"];

// Agrupa los 9 pasos en 3 fases para el carril lateral
const PHASES = [
  { label: "Tus datos", detail: "Nombre y teléfono", upTo: 1 },
  { label: "El evento", detail: "Tipo, sitio, fecha e invitados", upTo: 5 },
  { label: "Detalles", detail: "Horas, espacio y extras", upTo: 8 },
];

const getPhaseIndex = (step: number) => PHASES.findIndex((phase) => step <= phase.upTo);

const fieldClass =
  "w-full border-b-2 border-white/20 bg-transparent pb-3 text-2xl text-white placeholder:text-slate-400 outline-none transition focus:border-sky-300 md:text-3xl";

export default function ContactForm({ pageConfig }: { pageConfig: PageConfig }) {
  const { formData, isSubmitting, formError, setField, handleInputChange, handleSubmit } = useContactForm({
    defaultLocation: pageConfig.formLocation,
    pageLabel: pageConfig.city,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showValidation, setShowValidation] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const step = STEPS[currentStep];
  const isLastStep = currentStep === STEPS.length - 1;
  const currentValue = formData[step.field];
  const isStepValid = !step.required || currentValue.trim().length > 0;

  // El formulario sale abierto de entrada, asi que NO enfocamos al montar:
  // hacerlo arrastraria la pagina hasta el formulario nada mas cargar.
  const hasNavigated = useRef(false);

  useEffect(() => {
    if (!hasNavigated.current) return;
    fieldRef.current?.focus();
  }, [currentStep]);

  const goNext = () => {
    if (!isStepValid) {
      setShowValidation(true);
      return;
    }
    setShowValidation(false);
    if (isLastStep) {
      formRef.current?.requestSubmit();
      return;
    }
    hasNavigated.current = true;
    setCurrentStep((s) => s + 1);
  };

  const goBack = () => {
    if (currentStep === 0) return;
    setShowValidation(false);
    hasNavigated.current = true;
    setCurrentStep((s) => s - 1);
  };

  const handleChoiceSelect = (value: string) => {
    setField(step.field, value);
    setShowValidation(false);
    window.setTimeout(() => {
      if (isLastStep) {
        formRef.current?.requestSubmit();
      } else {
        hasNavigated.current = true;
        setCurrentStep((s) => s + 1);
      }
    }, 200);
  };

  const handleFieldKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key !== "Enter") return;
    if (step.kind === "textarea" && e.shiftKey) return;
    e.preventDefault();
    goNext();
  };

  const progress = Math.round((currentStep / STEPS.length) * 100);

  return (
    <div id="formulario" style={{ scrollMarginTop: "90px" }}>
      {/* Marco naranja: es la única sección de la web con este acento */}
      <div className="rounded-[1.75rem] bg-gradient-to-br from-orange-400 via-orange-500 to-amber-400 p-[3px] shadow-[0_28px_70px_rgba(249,115,22,0.30)] md:rounded-[2.1rem]">
        <div className="relative isolate overflow-hidden rounded-[1.6rem] bg-slate-950 p-6 md:rounded-[1.95rem] md:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 -z-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
            {/* Carril: qué te vamos a preguntar. En móvil baja por debajo del
                formulario, para que al saltar aquí desde "Pedir presupuesto"
                se caiga directamente en la pregunta y no en las fases. */}
            <aside className="order-2 lg:order-1 lg:border-r lg:border-white/10 lg:pr-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-300">
                Tu progreso
              </p>

              <ol className="mt-4 grid gap-3">
                {PHASES.map((phase, index) => {
                  const activa = getPhaseIndex(currentStep) === index;
                  const hecha = getPhaseIndex(currentStep) > index;
                  return (
                    <li key={phase.label} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-black transition ${
                          hecha
                            ? "bg-orange-500 text-white"
                            : activa
                              ? "bg-white text-slate-950 ring-4 ring-orange-500/30"
                              : "border border-white/20 bg-white/5 text-slate-300"
                        }`}
                      >
                        {hecha ? <CheckIcon className="h-3.5 w-3.5" /> : index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className={`text-sm font-bold ${activa || hecha ? "text-white" : "text-slate-300"}`}>
                          {phase.label}
                        </p>
                        <p className="mt-0.5 text-[12px] leading-5 text-slate-400">{phase.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <ul className="mt-6 grid gap-2 border-t border-white/10 pt-5">
                {START_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-[13px] font-semibold text-slate-300">
                    <CheckIcon className="h-4 w-4 shrink-0 text-orange-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Contenido */}
            <div className="order-1 min-w-0 lg:order-2">
              <p className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-slate-950">
                <LightningIcon className="h-3.5 w-3.5" />
                Respuesta en menos de 1 hora
              </p>
              <h2 className="mt-4 font-display text-[30px] uppercase leading-[0.95] tracking-[0.005em] text-white sm:text-4xl md:text-[52px]">
                Solicita tu propuesta
                <span className="block bg-gradient-to-r from-orange-200 via-amber-200 to-orange-400 bg-clip-text text-transparent">
                  para el evento
                </span>
              </h2>

              <form ref={formRef} className="mt-6" onSubmit={handleSubmit} acceptCharset="UTF-8">
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">
              <span>
                Pregunta {currentStep + 1} de {STEPS.length}
              </span>
              <span>{progress}% completado</span>
            </div>
            <div
              className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-white/15"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progreso del formulario"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-100 shadow-[0_0_12px_rgba(125,211,252,0.6)] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="min-h-[190px]">
            <label htmlFor={`cf-${step.field}`} className="block text-xl font-bold text-white md:text-2xl">
              {step.question}
              {step.required && <span className="ml-1 text-sky-300">*</span>}
            </label>

            <div className="mt-6">
              {step.kind === "choice" && (
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {step.options.map((option) => {
                    const selected = currentValue === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleChoiceSelect(option)}
                        aria-pressed={selected}
                        className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-base font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                          selected
                            ? "border-sky-300 bg-sky-300/20 text-white shadow-[0_10px_24px_rgba(125,211,252,0.18)]"
                            : "border-white/15 bg-white/5 text-slate-100 hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-white/10"
                        }`}
                      >
                        {option}
                        <span
                          aria-hidden="true"
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                            selected ? "border-sky-200 bg-sky-200 text-sky-900" : "border-white/25 text-transparent"
                          }`}
                        >
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              {step.kind === "textarea" && (
                <textarea
                  id={`cf-${step.field}`}
                  ref={fieldRef as RefObject<HTMLTextAreaElement>}
                  rows={4}
                  name={step.field}
                  data-field={step.field}
                  value={currentValue}
                  onChange={handleInputChange}
                  onKeyDown={handleFieldKeyDown}
                  placeholder={step.placeholder}
                  className={fieldClass}
                />
              )}

              {step.kind === "field" && (
                <input
                  id={`cf-${step.field}`}
                  ref={fieldRef as RefObject<HTMLInputElement>}
                  type={step.type}
                  inputMode={step.inputMode}
                  name={step.field}
                  data-field={step.field}
                  value={currentValue}
                  onChange={handleInputChange}
                  onKeyDown={handleFieldKeyDown}
                  placeholder={step.placeholder}
                  autoComplete={step.autoComplete}
                  style={step.type === "date" ? { colorScheme: "dark" } : undefined}
                  className={fieldClass}
                />
              )}
            </div>

            {showValidation && !isStepValid && (
              <p role="alert" className="mt-3 text-sm font-semibold text-red-300">
                Este dato es necesario para poder ayudarte.
              </p>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300"
              >
                <ArrowRightIcon className="h-4 w-4 rotate-180" />
                Atrás
              </button>
            ) : (
              <span aria-hidden="true" />
            )}

            {step.kind === "choice" ? (
              !step.required && (
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300"
                >
                  Saltar esta pregunta
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              )
            ) : (
              <button
                type="button"
                onClick={goNext}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-bold text-sky-900 shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                {isLastStep && !isSubmitting && <LightningIcon />}
                {isSubmitting
                  ? "Enviando..."
                  : isLastStep
                    ? "Enviar solicitud"
                    : !step.required && currentValue.trim() === ""
                      ? "Saltar"
                      : "Siguiente"}
                {!isLastStep && !isSubmitting && <ArrowRightIcon className="h-5 w-5" />}
              </button>
            )}
          </div>

          {formError && (
            <div
              role="alert"
              className="mt-4 rounded-[1.2rem] border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-100"
            >
              {formError}
            </div>
          )}

          <details className="group mt-6 rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300 transition open:bg-white/[0.08]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
              Información sobre protección de datos
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-sky-200 transition duration-200 group-open:rotate-45 group-open:bg-sky-300 group-open:text-sky-900"
              >
                <PlusIcon className="h-3.5 w-3.5" />
              </span>
            </summary>
            <div className="mt-3 space-y-2 leading-6 text-slate-300">
              <p>
                <span className="font-semibold text-white">Responsable:</span> Extradivertion.
                <span className="ml-1 font-semibold text-white">Finalidad:</span> gestionar tu solicitud de
                presupuesto y contactar contigo sobre el evento.
                <span className="ml-1 font-semibold text-white">Legitimación:</span> aplicación de medidas
                precontractuales a petición del interesado.
              </p>
              <p>
                <span className="font-semibold text-white">Destinatarios:</span> no se cederán datos a terceros
                salvo obligación legal.
                <span className="ml-1 font-semibold text-white">Derechos:</span> acceso, rectificación, supresión,
                oposición, limitación y portabilidad escribiendo a{" "}
                <a href={`mailto:${BUSINESS.email}`} className="font-medium text-sky-200 hover:text-white">
                  {BUSINESS.email}
                </a>
                .
              </p>
              <p className="text-slate-400">
                Al enviar el formulario declaras haber leído el aviso legal, la política de privacidad y las
                condiciones de contratación incluidas en el footer.
              </p>
            </div>
          </details>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
