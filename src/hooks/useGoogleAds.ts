import { useEffect } from "react";
import { GOOGLE_ADS } from "../data/business";

type GtagWindow = typeof window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export function useGoogleAdsTag() {
  useEffect(() => {
    const scriptId = "google-ads-gtag-js";
    const configId = "google-ads-gtag-config";
    const w = window as GtagWindow;

    w.dataLayer = w.dataLayer || [];
    w.gtag =
      w.gtag ||
      ((...args: unknown[]) => {
        w.dataLayer?.push(args);
      });

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS.id}`;
      document.head.appendChild(script);
    }

    if (!document.getElementById(configId)) {
      const configScript = document.createElement("script");
      configScript.id = configId;
      configScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ADS.id}');
      `;
      document.head.appendChild(configScript);
    }
  }, []);
}

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
    event_callback: redirect,
  });
}
