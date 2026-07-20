import { useEffect, useRef, useState, type KeyboardEvent, type RefObject } from "react";
import type { PageConfig } from "../data/pageConfigs";
import { BUSINESS } from "../data/business";
import { useContactForm, type ContactFormData } from "../hooks/useContactForm";

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
  { kind: "field", field: "phone", question: "¿Cuál es tu teléfono?", required: true, type: "tel", placeholder: "ej: 654 685 158", autoComplete: "tel" },
  { kind: "field", field: "email", question: "¿Cuál es tu email?", required: true, type: "email", placeholder: "ej: nombre@email.com", autoComplete: "email" },
  { kind: "choice", field: "eventType", question: "¿Qué tipo de evento es?", required: true, options: EVENT_TYPE_OPTIONS },
  { kind: "field", field: "location", question: "¿Dónde se celebra el evento?", required: true, type: "text", placeholder: "ej: Barcelona, Sabadell...", autoComplete: "address-level2" },
  { kind: "field", field: "eventDate", question: "¿Qué fecha tiene el evento?", required: false, type: "date" },
  { kind: "field", field: "guests", question: "¿Cuántos invitados aproximadamente?", required: false, type: "text", placeholder: "ej: 80", inputMode: "numeric" },
  { kind: "choice", field: "hours", question: "¿Cuántas horas de servicio necesitas?", required: false, options: HOURS_OPTIONS },
  { kind: "choice", field: "soundEquipment", question: "¿El lugar del evento cuenta con equipo de sonido?", required: false, options: ["Sí", "No", "No lo sé"] },
  { kind: "choice", field: "venueType", question: "¿Se celebrará en exterior o en interior?", required: false, options: ["Exterior", "Interior", "Ambos"] },
  { kind: "textarea", field: "details", question: "¿Algo más que debamos saber?", required: false, placeholder: "Estilo musical, momentos especiales, horario exacto..." },
];

const fieldClass =
  "w-full border-b-2 border-white/20 bg-transparent pb-3 text-2xl text-white placeholder:text-slate-400 outline-none transition focus:border-sky-300 md:text-3xl";

export default function ContactForm({ pageConfig }: { pageConfig: PageConfig }) {
  const { formData, isSubmitting, formError, setField, handleInputChange, handleSubmit } = useContactForm({
    defaultLocation: pageConfig.formLocation,
    pageLabel: pageConfig.city,
  });

  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showValidation, setShowValidation] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const step = STEPS[currentStep];
  const isLastStep = currentStep === STEPS.length - 1;
  const currentValue = formData[step.field];
  const isStepValid = !step.required || currentValue.trim().length > 0;

  useEffect(() => {
    if (started) fieldRef.current?.focus();
  }, [currentStep, started]);

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
    setCurrentStep((s) => s + 1);
  };

  const goBack = () => {
    if (currentStep === 0) return;
    setShowValidation(false);
    setCurrentStep((s) => s - 1);
  };

  const handleChoiceSelect = (value: string) => {
    setField(step.field, value);
    setShowValidation(false);
    window.setTimeout(() => {
      if (isLastStep) {
        formRef.current?.requestSubmit();
      } else {
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
    <div
      id="formulario"
      style={{ scrollMarginTop: "90px" }}
      className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.18)] backdrop-blur md:rounded-[2rem] md:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200">Presupuesto DJ para eventos</p>
      <h2 className="mt-3 text-[28px] font-black uppercase leading-[0.96] tracking-tight text-white md:text-5xl">
        Solicita tu propuesta <span className="block text-sky-200">para el evento</span>
      </h2>

      {!started ? (
        <>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
            Responde unas preguntas rápidas y sencillas sobre tu evento en {pageConfig.city}. Solo te llevará un par
            de minutos y te responderemos con una propuesta a medida.
          </p>
          <button
            type="button"
            onClick={() => setStarted(true)}
            className="mt-6 rounded-full bg-white px-7 py-4 text-base font-semibold text-sky-900 shadow-[0_16px_34px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Pedir presupuesto
          </button>
        </>
      ) : (
        <form ref={formRef} className="mt-6" onSubmit={handleSubmit} acceptCharset="UTF-8">
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">
              <span>
                Pregunta {currentStep + 1} de {STEPS.length}
              </span>
              <span>{progress}% completado</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-sky-300 transition-all duration-300"
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
                        className={`rounded-2xl border px-4 py-3.5 text-left text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                          selected
                            ? "border-sky-300 bg-sky-300/20 text-white"
                            : "border-white/15 bg-white/5 text-slate-100 hover:border-sky-300/50 hover:bg-white/10"
                        }`}
                      >
                        {option}
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
                className="text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                ← Atrás
              </button>
            ) : (
              <span aria-hidden="true" />
            )}

            {step.kind === "choice" ? (
              !step.required && (
                <button
                  type="button"
                  onClick={goNext}
                  className="text-sm font-semibold text-slate-300 transition hover:text-white"
                >
                  Saltar esta pregunta
                </button>
              )
            ) : (
              <button
                type="button"
                onClick={goNext}
                disabled={isSubmitting}
                className="rounded-full bg-white px-7 py-3 text-base font-semibold text-sky-900 shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                {isSubmitting
                  ? "Enviando..."
                  : isLastStep
                    ? "Enviar solicitud"
                    : !step.required && currentValue.trim() === ""
                      ? "Saltar"
                      : "Siguiente"}
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

          <details className="mt-6 rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            <summary className="cursor-pointer list-none font-semibold text-white">
              Información sobre protección de datos
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
      )}
    </div>
  );
}
