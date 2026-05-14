export const hooks = {
  curiosity: [
    "No vas a creer cómo suena esto con un solo efecto...",
    "El secreto que nadie te dice sobre los bajos en Tech House...",
    "¿Qué pasa si mezclamos Cumbia con Afrohouse? Escucha esto...",
    "POV: Encontraste EL sonido perfecto a las 3am..."
  ],
  comparison: [
    "Esto tardó 5 minutos vs Esto tardó 5 horas",
    "Plugin de $200 vs Plugin Gratis. ¿Notas la diferencia?",
    "Mi primera producción vs Mi último track"
  ],
  challenge: [
    "Intenta no mover la cabeza con este beat...",
    "Solo el 1% de los productores identifica este sample...",
    "A que no adivinas de dónde saqué este sonido..."
  ],
  educational: [
    "El truco en Ableton que me ahorra horas...",
    "Cómo hacer que tu bajo suene GORDO en 3 pasos...",
    "Deja de usar reverb así. Haz esto en su lugar..."
  ],
  story: [
    "La historia de cómo este track casi nunca sale...",
    "Estaba a punto de borrar este proyecto hasta que...",
    "Cómo un mal día en el estudio terminó en mi mejor beat..."
  ]
};

export function getRandomHook(category = null, prng) {
  const categories = Object.keys(hooks);
  const cat = category || categories[Math.floor(prng() * categories.length)];
  const options = hooks[cat];
  return options[Math.floor(prng() * options.length)];
}
