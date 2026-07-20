export const BUSINESS = {
  name: "Extradivertion",
  phoneDisplay: "654 685 158",
  phoneHref: "+34654685158",
  email: "smextradivertion@gmail.com",
  whatsappHref:
    "https://wa.me/34654685158?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20un%20evento.",
  formSubmitAction: "https://formsubmit.co/ajax/smextradivertion@gmail.com",
  siteUrl: "https://extradivertion.com",
  thankYouPath: "/gracias",
} as const;

export const GOOGLE_ADS = {
  id: "AW-18165194989",
  formConversionSendTo: "AW-18165194989/AwilCIXrodMcEO3B69VD",
  whatsappConversionSendTo: "AW-18165194989/DFQsCL7lt9McEO3B69VD",
  phoneConversionSendTo: "AW-18165194989/lN16CIiJuNMcEO3B69VD",
} as const;

export const getCanonicalUrl = (path: string) =>
  path === "/" ? `${BUSINESS.siteUrl}/` : `${BUSINESS.siteUrl}${path}`;
