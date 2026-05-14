export const effects = [
  "Transición: Whip pan rápido",
  "Toma: Close-up manos en Push/Teclado",
  "Edición: Cortes rápidos al ritmo (Beat sync cut)",
  "Efecto visual: Glitch en el drop",
  "Toma: POV estilo primera persona produciendo",
  "Efecto post: Color grading cálido/analógico (Film Noir)",
  "Transición: Zoom punch agresivo",
  "Toma: Timelapse del estudio organizándose",
  "Efecto visual: Speed ramp (lento a rápido) justo antes del drop",
  "Toma: Pantalla dividida (cara reaccionando + Ableton screen)"
];

export function getRandomEffect(prng) {
  return effects[Math.floor(prng() * effects.length)];
}
