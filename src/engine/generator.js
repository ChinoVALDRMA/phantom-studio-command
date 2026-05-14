import { createPRNG } from './randomizer.js';
import { pillars } from '../data/pillars.js';
import { getRandomHook } from '../data/hooks.js';
import { getRandomEffect } from '../data/effects.js';
import { getScriptTemplate } from '../data/scripts.js';
import { getRandomCollab } from '../data/collabs.js';

export function generateWeek(year, weekNumber) {
  const seed = year * 1000 + weekNumber;
  const prng = createPRNG(seed);

  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const weekData = [];

  // Shuffle pillars for this week
  const availablePillars = [...pillars].sort(() => prng() - 0.5);

  daysOfWeek.forEach((dayName, index) => {
    // Pick a pillar
    const pillar = availablePillars[index % availablePillars.length];
    
    // Generate content
    const hook = getRandomHook(null, prng);
    const effect = getRandomEffect(prng);
    const script = getScriptTemplate(pillar.format).replace('[hook]', hook).replace('[effect]', effect);
    
    let collabData = null;
    if (pillar.type.includes('Collab')) {
      collabData = getRandomCollab(prng);
    }

    weekData.push({
      dayName,
      dateOffset: index, // To calculate exact date in UI
      pillar,
      hook,
      effect,
      script,
      collabData,
      time: (index < 5) ? '18:00 - 20:00' : '12:00 - 14:00', // Lun-Vie vs Fin de semana
      tags: [pillar.type, pillar.difficulty, pillar.format]
    });
  });

  return weekData;
}
