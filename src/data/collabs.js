export const collabs = [
  { name: 'Tilin', topics: ['Jam session Guitarra+Push', 'Freestyle / Improv', 'Reacción a nuevo drop Tech House', 'Psy/Lifestyle chat'] },
  { name: 'Codex (Ian)', topics: ['Beat battle: Mismo sample', 'Freestyle sobre beat nuevo', 'Trap vs Tech House crossover'] },
  { name: 'Ridd (Mau)', topics: ['Reacción cantando', 'Legal tips para productores', 'Abogado vs Productor'] },
  { name: 'Vytruz (Allan)', topics: ['DJ Set Back-to-Back', 'Bass vs Techhouse debate', 'Studio tour: Comparando equipo'] }
];

export function getRandomCollab(prng) {
  const person = collabs[Math.floor(prng() * collabs.length)];
  const topic = person.topics[Math.floor(prng() * person.topics.length)];
  return { person: person.name, topic };
}
