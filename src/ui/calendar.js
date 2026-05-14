export function renderCalendar(weekData, container) {
  container.innerHTML = '';

  weekData.forEach(day => {
    const card = document.createElement('div');
    card.className = 'day-card';
    
    // Tags HTML
    const tagsHtml = day.tags.map(tag => {
      const isCollab = tag.includes('Collab');
      return `<span class="tag ${isCollab ? 'collab' : ''}">${tag}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="day-header">
        <span class="day-name">${day.dayName}</span>
        <span class="day-time">${day.time}</span>
      </div>
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

  let collabHtml = '';
  if (day.collabData) {
    collabHtml = `
      <div class="detail-section">
        <h3>🤝 Colaboración con ${day.collabData.person}</h3>
        <p><strong>Tema:</strong> ${day.collabData.topic}</p>
      </div>
    `;
  }

  body.innerHTML = `
    <h2 style="margin-bottom: 24px; font-size: 24px;">${day.dayName} - ${day.pillar.name}</h2>
    
    <div class="detail-section">
      <h3>🎣 Hook Principal</h3>
      <p>"${day.hook}"</p>
    </div>

    ${collabHtml}

    <div class="detail-section">
      <h3>🎬 Guión & Estructura</h3>
      <div class="script-box">${day.script}</div>
    </div>

    <div class="detail-section">
      <h3>✨ Efectos y Edición recomendados</h3>
      <ul>
        <li>${day.effect}</li>
        <li>Format: ${day.pillar.format}</li>
        <li>Difficulty: ${day.pillar.difficulty}</li>
      </ul>
    </div>
  `;

  modal.classList.remove('hidden');
}
