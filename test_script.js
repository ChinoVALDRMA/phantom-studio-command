// --- DATA pools ---
const pillars = [
  { id: 'p1', name: '🎛️ Studio Session', type: 'Solo', difficulty: 'Fácil', format: 'Short', hashtags: ['#producerlife', '#studioflow', '#ableton', '#techhouse', '#beatmaking'] },
  { id: 'p2', name: '🎹 Before/After Sound', type: 'Solo', difficulty: 'Fácil', format: 'Short', hashtags: ['#sounddesign', '#mixing', '#musicproduction', '#beforeafter', '#audioprocessing'] },
  { id: 'p3', name: '📚 Tutorial Rápido', type: 'Solo', difficulty: 'Medio', format: 'Short', hashtags: ['#productiontips', '#abletonhacks', '#musicproducer', '#tutorial', '#learnmusic'] },
  { id: 'p4', name: '🎧 Track Preview', type: 'Solo', difficulty: 'Fácil', format: 'Short', hashtags: ['#newmusic', '#upcomingrelease', '#phanto', '#afrohouse', '#snippet'] },
  { id: 'p5', name: '🤝 Collab Session', type: 'Collab', difficulty: 'Medio', format: 'Short', hashtags: ['#collaboration', '#studiovibes', '#phantomteam', '#makingof', '#artists'] },
  { id: 'p6', name: '😂 Humor de Productor', type: 'Solo', difficulty: 'Fácil', format: 'Short', hashtags: ['#producermemes', '#relatable', '#studiolife', '#producerhumor', '#djproblems'] },
  { id: 'p7', name: '💬 Storytelling', type: 'Solo', difficulty: 'Medio', format: 'Short', hashtags: ['#musicstory', '#behindthescenes', '#creativelife', '#inspiration', '#artistjourney'] },
  { id: 'p8', name: '🧠 Psy/Lifestyle', type: 'Solo', difficulty: 'Medio', format: 'Short', hashtags: ['#lifestyle', '#psychology', '#mindset', '#creativeprocess', '#phantoidentity'] },
  { id: 'p9', name: '🔥 Live Performance', type: 'Solo/Collab', difficulty: 'Difícil', format: 'Short', hashtags: ['#liveset', '#djset', '#performance', '#pioneer', '#pushlive'] },
  { id: 'p10', name: '📸 Photo Mode', type: 'Solo', difficulty: 'Fácil', format: 'Carousel', hashtags: ['#studiophoto', '#gearporn', '#aesthetic', '#phantomstudio', '#musicgear'] },
  { id: 'p11', name: '🎬 Deep Dive (YouTube)', type: 'Solo', difficulty: 'Difícil', format: 'Long', hashtags: ['#deepdive', '#youtube', '#longform', '#masterclass', '#producertalk'] },
  { id: 'p12', name: '🎤 Freestyle/Jam', type: 'Collab', difficulty: 'Difícil', format: 'Short', hashtags: ['#freestyle', '#jamming', '#improvisation', '#livevocals', '#phantomvibes'] }
];

const hooks = {
  curiosity: [
    "No vas a creer cómo suena esto con un solo efecto...",
    "El secreto que nadie te dice sobre los bajos en Tech House...",
    "¿Qué pasa si mezclamos Cumbia con Afrohouse? Escucha esto...",
    "POV: Encontraste EL sonido perfecto a las 3am...",
    "El sample que me prohibieron usar pero que suena increíble..."
  ],
  comparison: [
    "Esto tardó 5 minutos vs Esto tardó 5 horas",
    "Plugin de $200 vs Plugin Gratis. ¿Notas la diferencia?",
    "Mi primera producción vs Mi último track",
    "Cómo sonaba mi demo vs Cómo suena el master final"
  ],
  challenge: [
    "Intenta no mover la cabeza con este beat...",
    "Solo el 1% de los productores identifica este sample...",
    "A que no adivinas de dónde saqué este sonido...",
    "¿Puedes reconocer este instrumento oculto en el mix?"
  ],
  educational: [
    "El truco en Ableton que me ahorra horas...",
    "Cómo hacer que tu bajo suene GORDO en 3 pasos...",
    "Deja de usar reverb así. Haz esto en su lugar...",
    "La cadena de efectos 'mágica' para mis voces..."
  ],
  story: [
    "La historia de cómo este track casi nunca sale...",
    "Estaba a punto de borrar este proyecto hasta que...",
    "Cómo un mal día en el estudio terminó en mi mejor beat...",
    "Lo que aprendí trabajando con este artista de la escena..."
  ]
};

const talkingPoints = [
  "Explica por qué elegiste este sonido específico.",
  "Muestra tu cara de reacción al escuchar el drop.",
  "Comenta qué problema estabas intentando resolver.",
  "Haz una pregunta a la audiencia sobre su plugin favorito.",
  "Menciona que este track será parte del próximo release de PHANTO.",
  "Aclara que la simplicidad a veces es mejor que la complejidad."
];

const team = [
  { id: 'chino', name: 'ElChinoVALDRM', role: 'Fundador / Productor / Multi-instrumentalist', avatar: '👻', topics: ['Tech House Vibes con Piano/Sax', 'Estrategia de crecimiento Phanto', 'Live performance setup', 'Conectando talento musical'], color: 'tilin' },
  { id: 'tilin', name: 'Tilin', role: 'Artista / Jazz Spirit', avatar: '🎷', topics: ['Jazz & Urbano Fusion', 'Exploración psicodélica con guitarra', 'Estética única y perforaciones', 'Vibras de estudio y motivación'], color: 'tilin' },
  { id: 'codex', name: 'Codex (Ian)', role: 'Productor / Mechatronic Artist', avatar: '🤖', topics: ['Beats de Ecatepec para el mundo', 'Ingeniería Mecatrónica aplicada al sonido', 'Reggaetón, Trap & Guaracha crossover', 'Freestyle y rimas crudas'], color: 'codex' },
  { id: 'ridd', name: 'Ridd (Mau)', role: 'Cantante / Asesor Legal', avatar: '⚖️', topics: ['Derechos de autor para productores', 'Voz urbana con sentimiento', 'Leyes vs Realidad de la industria', 'Entrenamiento vocal desde cero'], color: 'ridd' },
  { id: 'vytruz', name: 'Vytruz (Allan)', role: 'Productor Pro / Finance Expert', avatar: '📉', topics: ['Workflow de Mac Studio & Shure SM7B', 'Finanzas y ahorro para músicos', 'Bass music de alta precisión', 'Uso avanzado de Serum & Splice'], color: 'vytruz' }
];

const effects = [
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

// --- UTILS ---
function createPRNG(seed) {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return function() {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function getRandomFrom(arr, prng) { return arr[Math.floor(prng() * arr.length)]; }

function shuffle(array, prng) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(prng() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// --- GENERATOR V2 ---
function generateWeek(year, weekNumber) {
  const seed = year * 1000 + weekNumber;
  const prng = createPRNG(seed);
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
  // Ensure variety: shuffle pillars and pick first 7
  const availablePillars = shuffle([...pillars], prng);
  const weekData = [];

  daysOfWeek.forEach((dayName, index) => {
    const pillar = availablePillars[index % availablePillars.length];
    const categoryKeys = Object.keys(hooks);
    const hook = getRandomFrom(hooks[getRandomFrom(categoryKeys, prng)], prng);
    const effect = getRandomFrom(effects, prng);
    const points = shuffle([...talkingPoints], prng).slice(0, 2);
    
    let collabData = null;
    if (pillar.type === 'Collab' || pillar.id === 'p9' || pillar.id === 'p12') {
      const otherMembers = team.filter(m => m.id !== 'chino');
      const partner = getRandomFrom(otherMembers, prng);
      collabData = { person: partner.name, topic: getRandomFrom(partner.topics, prng) };
    }

    weekData.push({
      dayName,
      pillar,
      hook,
      effect,
      talkingPoints: points,
      collabData,
      time: (index < 5) ? '18:00 - 21:00' : '11:00 - 15:00',
      tags: [pillar.type, pillar.difficulty, pillar.format],
      hashtags: pillar.hashtags
    });
  });
  return weekData;
}

// --- UI Rendering ---
function renderCalendar(weekData) {
  const container = document.getElementById('calendar-grid');
  container.innerHTML = '';
  weekData.forEach(day => {
    const card = document.createElement('div');
    card.className = 'day-card';
    const tagsHtml = day.tags.map(tag => `<span class="tag ${tag.includes('Collab') ? 'collab' : ''} ${tag === 'Difícil' ? 'difficulty-advanced' : ''}">${tag}</span>`).join('');
    
    card.innerHTML = `
      <div class="day-header"><span class="day-name">${day.dayName}</span><span class="day-time">${day.time}</span></div>
      <div class="content-type">${day.pillar.name}</div>
      <div class="hook-preview">"${day.hook}"</div>
      <div class="tags">${tagsHtml}</div>
    `;
    card.addEventListener('click', () => openModal(day));
    container.appendChild(card);
  });
}

function openModal(day) {
  const modal = document.getElementById('content-detail-modal');
  const body = document.getElementById('modal-body');
  
  let collabHtml = day.collabData ? `
    <div class="detail-section">
      <h3>🤝 Colaboración con ${day.collabData.person}</h3>
      <p><strong>Enfoque:</strong> ${day.collabData.topic}</p>
    </div>` : '';

  body.innerHTML = `
    <h2 style="margin-bottom: 24px; font-size: 24px; color: var(--accent-cyan);">${day.dayName} — ${day.pillar.name}</h2>
    <div class="detail-section"><h3>🎣 Gancho (Hook)</h3><p style="font-size: 18px; font-weight: 600;">"${day.hook}"</p></div>
    ${collabHtml}
    <div class="detail-section">
      <h3>🗣️ Qué decir (Talking Points)</h3>
      <ul>${day.talkingPoints.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
    <div class="detail-section">
      <h3>🎬 Guión & Estética</h3>
      <div class="script-box">
        1. START: Hook visual y verbal.
        2. MID: ${day.effect}. Mostrar proceso.
        3. END: Resultado sonoro + CTA a seguir a PHANTO.
      </div>
    </div>
    <div class="detail-section">
      <h3>🏷️ Hashtags recomendados</h3>
      <div class="hashtags-box">${day.hashtags.join(' ')} #phantomstudio #elchino</div>
    </div>
  `;
  modal.classList.remove('hidden');
}

function renderGrowthTracker() {
  const container = document.getElementById('account-list');
  const accounts = JSON.parse(localStorage.getItem('phanto_accounts') || '[]');
  container.innerHTML = accounts.length ? '' : '<p style="color: var(--text-secondary);">No hay cuentas añadidas.</p>';
  
  let totalFollowers = 0;
  accounts.forEach((acc, i) => {
    totalFollowers += parseInt(acc.followers);
    const progress = Math.min((acc.followers / acc.goal) * 100, 100);
    const card = document.createElement('div');
    card.className = 'account-card';
    card.innerHTML = `
      <div class="account-info"><h3>${acc.name}</h3><p>@${acc.handle}</p></div>
      <div class="account-stats">
        <div class="stat-labels"><span>${acc.followers} seg.</span><span>Meta: ${acc.goal}</span></div>
        <div class="stat-bar-container"><div class="stat-bar-fill" style="width: ${progress}%"></div></div>
      </div>
      <button onclick="deleteAccount(${i})" style="background:transparent; border:none; color: #ff5555; cursor:pointer; font-size: 20px;">×</button>
    `;
    container.appendChild(card);
  });
  
  document.getElementById('global-followers').innerText = totalFollowers;
  document.getElementById('global-progress').style.width = `${Math.min((totalFollowers/1000)*100, 100)}%`;
}

function renderMemberStrategies() {
  const container = document.getElementById('member-grid');
  container.innerHTML = '';
  
  // Use current week for seeded randomness
  const date = new Date();
  const weekSeed = date.getFullYear() * 100 + Math.ceil(date.getDate() / 7);
  const prng = createPRNG(weekSeed);

  team.forEach(m => {
    const card = document.createElement('div');
    card.className = `member-card ${m.color}`;
    
    // Generate a weekly focus based on their specific topics
    const weeklyFocus = shuffle([...m.topics], prng)[0];
    const secondaryFocus = shuffle([...m.topics], prng)[1];

    card.innerHTML = `
      <div class="member-header">
        <div class="member-avatar">${m.avatar}</div>
        <div class="member-info"><h3>${m.name}</h3><p>${m.role}</p></div>
      </div>
      <div class="member-topics">
        <h5>Misión Semanal (Personalizada)</h5>
        <div style="background: rgba(102, 252, 241, 0.1); padding: 12px; border-radius: 8px; margin-bottom: 15px; border-left: 3px solid var(--accent-cyan);">
           <strong>Tema Central:</strong> ${weeklyFocus}
        </div>
        
        <h5>Tus Pilares de Contenido</h5>
        ${m.topics.map(t => `<span class="topic-tag">${t}</span>`).join('')}
        
        <div style="margin-top: 15px; font-size: 13px; color: var(--text-secondary);">
          <strong>Tip del Comandante:</strong> Esta semana, haz un video corto hablando sobre <em>"${secondaryFocus}"</em>. Usa un tono que conecte con tu audiencia.
        </div>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
          <h5 style="font-size: 10px; color: var(--accent-magenta);">Sugerencia de Hook Personalizado:</h5>
          <p style="font-size: 13px; font-style: italic;">"${getRandomFrom(Object.values(hooks).flat(), prng)}"</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderIdeas() {
  const container = document.getElementById('ideas-container');
  container.innerHTML = '';
  const prng = createPRNG(Date.now());
  for(let i=0; i<3; i++) {
    const card = document.createElement('div');
    card.className = 'idea-card';
    card.innerHTML = `
      <div class="idea-content">
        <h4>Idea #${i+1}</h4>
        <p>"${getRandomFrom(Object.values(hooks).flat(), prng)}" usando "${getRandomFrom(effects, prng)}"</p>
      </div>
    `;
    container.appendChild(card);
  }
}

// --- STATE & EVENTS ---
let currentWeekOffset = 0;

function switchView(viewId) {
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
}

function addAccount() {
  const name = prompt("Nombre de la cuenta:");
  const handle = prompt("Handle (ej: elchino_phanto):");
  const followers = prompt("Seguidores actuales:");
  const goal = prompt("Meta de seguidores:");
  if(name && handle && followers && goal) {
    const accounts = JSON.parse(localStorage.getItem('phanto_accounts') || '[]');
    accounts.push({ name, handle, followers: parseInt(followers), goal: parseInt(goal) });
    localStorage.setItem('phanto_accounts', JSON.stringify(accounts));
    renderGrowthTracker();
  }
}

function deleteAccount(index) {
  const accounts = JSON.parse(localStorage.getItem('phanto_accounts') || '[]');
  accounts.splice(index, 1);
  localStorage.setItem('phanto_accounts', JSON.stringify(accounts));
  renderGrowthTracker();
}

function init() {
  loadWeek(0);
  renderGrowthTracker();
  renderMemberStrategies();
  renderIdeas();
  
  // Nav events
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      switchView(btn.dataset.view);
    });
  });
  
  document.getElementById('prev-week').onclick = () => { currentWeekOffset--; loadWeek(currentWeekOffset); };
  document.getElementById('next-week').onclick = () => { currentWeekOffset++; loadWeek(currentWeekOffset); };
  document.getElementById('close-modal').onclick = () => document.getElementById('content-detail-modal').classList.add('hidden');
  document.getElementById('add-account-btn').onclick = addAccount;
  document.getElementById('refresh-ideas-btn').onclick = renderIdeas;
  
  window.onclick = (e) => { if(e.target.id === 'content-detail-modal') e.target.classList.add('hidden'); };
}

function loadWeek(offset) {
  const date = new Date();
  date.setDate(date.getDate() + (offset * 7));
  const startDate = new Date(date.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((date - startDate) / 86400000) + startDate.getDay() + 1) / 7);
  document.getElementById('week-title').innerText = `Semana ${weekNumber}, ${date.getFullYear()}` + (offset === 0 ? ' (Actual)' : '');
  renderCalendar(generateWeek(date.getFullYear(), weekNumber));
}

init();
