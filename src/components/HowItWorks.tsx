import { PROCESS_STEPS } from "../data/content";
import { GradientText } from "./ui";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-12"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.07)] md:rounded-[2rem] md:p-9">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700/80">Cómo funciona</p>
          <h2 className="mt-3 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            De la idea a la <GradientText>fiesta</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Así organizamos la música de tu evento, paso a paso.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <li
              key={step.step}
              className="relative flex flex-col items-center rounded-[1.25rem] border border-slate-200 bg-slate-50/80 p-5 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-base font-black text-sky-300">
                {step.step}
              </span>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-950 md:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>

              {index < PROCESS_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 text-2xl text-sky-400 md:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
