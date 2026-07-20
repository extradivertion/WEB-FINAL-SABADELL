import { useEffect } from "react";
import { GOOGLE_ADS } from "../data/business";

type GtagWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export function reportConversionAndRedirect(url: string) {
  const w = window as GtagWindow;

  const redirect = () => {
    window.location.href = url;
  };

  if (!w.gtag) {
    redirect();
    return;
  }

  w.gtag("event", "conversion", {
    send_to: GOOGLE_ADS.formConversionSendTo,
    value: 1.0,
    currency: "EUR",
    event_callback: redirect,
  });
}

const CLICK_CONVERSIONS: { selector: string; sendTo: string }[] = [
  { selector: 'a[href*="wa.me"]', sendTo: GOOGLE_ADS.whatsappConversionSendTo },
  { selector: 'a[href^="tel:"]', sendTo: GOOGLE_ADS.phoneConversionSendTo },
];

/**
 * Tracks every WhatsApp or phone link click as a Google Ads conversion via a
 * single delegated listener, so new links of either kind don't need
 * per-component wiring.
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
