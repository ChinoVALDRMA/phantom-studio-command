export const scripts = {
  Short: `ESTRUCTURA SUGERIDA (15-30s):
1. HOOK (0-3s): [hook]
   - Visual: Texto grande en pantalla. Captar atención.
2. SETUP (3-8s): 
   - Visual: [effect]
   - Acción: Mostrar contexto rápido (ej. DAW, Push, cara de concentración).
3. BUILD (8-15s): 
   - Acción: Mostrar proceso o subir energía.
4. PAYOFF/DROP (15-25s):
   - Acción: Resultado final, drop explosivo, reacción.
5. CTA (25-30s):
   - Acción: "Sígueme para más" o "Link in bio" text.`,

  Long: `ESTRUCTURA SUGERIDA (1-3 min YouTube/Reel):
1. HOOK: [hook] (Primeros 5 segundos cruciales).
2. INTRO: Quién eres y qué vas a lograr en este video.
3. CONTEXTO: La historia detrás del track o la técnica.
4. BODY: 
   - Paso 1 o Parte 1 del proceso.
   - [effect]
   - Paso 2 o Parte 2.
5. RESULTADO FINAL: Escucha completa de la sección.
6. OUTRO: Suscríbete, deja un comentario con qué género quieres ver.`,

  Carousel: `ESTRUCTURA SUGERIDA (Photo Mode):
- Slide 1 (Portada): Título llamativo + Imagen clean del estudio/hardware.
- Slide 2: [hook]
- Slide 3-4: Valor educativo o fotos estéticas.
- Slide 5: CTA visual a seguir o comentar.`
};

export function getScriptTemplate(format) {
  return scripts[format] || scripts.Short;
}
