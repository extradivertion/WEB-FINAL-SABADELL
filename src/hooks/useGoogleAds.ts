import { useEffect } from "react";
import { GOOGLE_ADS } from "../data/business";

type GtagWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

/** Margen máximo de espera a que gtag confirme la conversión antes de redirigir igualmente. */
const CONVERSION_TIMEOUT_MS = 1500;

/**
 * Registra la conversión de formulario y redirige a `url`.
 * La redirección se ejecuta siempre y solo una vez: si gtag está bloqueado por
 * un adblocker o tarda demasiado, el usuario no se queda atascado en el form.
 */
export function reportConversionAndRedirect(url: string) {
  const w = window as GtagWindow;

  let alreadyRedirected = false;
  const redirect = () => {
    if (alreadyRedirected) return;
    alreadyRedirected = true;
    window.location.href = url;
  };

  if (!w.gtag) {
    redirect();
    return;
  }

  window.setTimeout(redirect, CONVERSION_TIMEOUT_MS);

  w.gtag("event", "conversion", {
    send_to: GOOGLE_ADS.formConversionSendTo,
    value: 1.0,
    currency: "EUR",
    event_callback: redirect,
    event_timeout: CONVERSION_TIMEOUT_MS,
  });
}

const CLICK_CONVERSIONS: { selector: string; sendTo: string }[] = [
  { selector: 'a[href*="wa.me"]', sendTo: GOOGLE_ADS.whatsappConversionSendTo },
  { selector: 'a[href^="tel:"]', sendTo: GOOGLE_ADS.phoneConversionSendTo },
];

/**
 * Registra cada clic en un enlace de WhatsApp o teléfono como conversión de
 * Google Ads mediante un único listener delegado, para no tener que cablear
 * el tracking componente a componente.
 */
export function useClickConversionTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const w = window as GtagWindow;
      for (const { selector, sendTo } of CLICK_CONVERSIONS) {
        if (target.closest(selector)) {
          w.gtag?.("event", "conversion", { send_to: sendTo });
          return;
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);
}
