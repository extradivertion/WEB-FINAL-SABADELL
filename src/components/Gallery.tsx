import { useEffect, useState } from "react";
import { RESULT_IMAGES } from "../data/content";
import { GradientText } from "./ui";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div
      id="resultados"
      className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_22px_55px_rgba(15,23,42,0.16)] md:rounded-[2rem] md:p-8"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-300/80">Resultados</p>
          <h2 className="mt-3 text-[30px] font-black uppercase leading-[0.96] tracking-tight text-white sm:text-4xl md:text-5xl">
            Galería de eventos
            <GradientText dark className="block">realizados</GradientText>
          </h2>
        </div>
      </div>

      <div className="grid auto-rows-[135px] grid-flow-dense grid-cols-2 gap-2.5 md:auto-rows-[150px] md:grid-cols-4 md:gap-3 lg:auto-rows-[165px]">
        {RESULT_IMAGES.map((image) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
            className={`group relative overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 text-left shadow-[0_12px_26px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(0,0,0,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${image.className}`}
            aria-label={`Ampliar imagen: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={480}
              height={480}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
            aria-label="Cerrar imagen ampliada"
          >
            Cerrar
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[86vh] max-w-[94vw] rounded-[1.25rem] object-contain shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
