Trabajamos sobre la web de Extradivertion (DJ para eventos en Barcelona y
Vallès Occidental).

Lee PLAN.md en la raíz del repo. Es la especificación completa: contexto,
reglas, fases con criterios de aceptación y datos pendientes por mi parte.

⚠️ REGLA INNEGOCIABLE (sección 1.bis de PLAN.md):
La web está en producción. NUNCA hagas commit, push, merge a main ni deploy.
El flujo es siempre:
  1. Trabajas en una rama local, sin commitear
  2. Levantas el servidor de desarrollo y me das la URL local
  3. Me presentas el resumen de revisión (qué cambiaste, git diff --stat,
     qué debo mirar y en qué rutas, qué comprobar en móvil)
  4. Yo lo reviso en mi navegador y te digo si va o no
  5. Solo commiteas cuando yo escriba "aprobado, commitea"
  6. Publicar es un paso aparte que pido yo explícitamente
Si crees que necesitas ejecutar algo destructivo o irreversible, para y
pregúntame antes.

Empieza SOLO por la FASE 0 (auditoría y decisión de renderizado). El problema
es que el HTML que sirve el servidor llega vacío: solo el <head>. Google
indexa la página sin contenido, así que ninguna otra mejora sirve hasta
arreglarlo.

En esta primera sesión quiero exactamente esto y nada más:
1. Comprobar que el working tree está limpio y avisarme si no lo está
2. Auditoría del stack, rutas y build actual
3. Confirmación del diagnóstico con curl
4. Dos o tres opciones de solución con esfuerzo estimado y pros/contras

NO ejecutes la migración todavía. Preséntame las opciones y espera mi decisión.

Reglas que aplican siempre: no inventes datos (testimonios, cifras, precios,
marcas); si falta algo escribe TODO(cliente) y sigue. No cambies el diseño
visual en la Fase 0. No toques los textos legales.
