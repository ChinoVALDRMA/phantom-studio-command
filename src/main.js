import { generateWeek } from './engine/generator.js';
import { renderCalendar } from './ui/calendar.js';

let currentWeekOffset = 0; // 0 = current week, -1 = last week, 1 = next week

function init() {
  updateFollowerTracker();
  loadWeek(currentWeekOffset);
  setupEventListeners();
}

function updateFollowerTracker() {
  const currentFollowers = localStorage.getItem('phanto_followers') || 0;
  document.getElementById('follower-count').innerText = currentFollowers;
  const percentage = Math.min((currentFollowers / 1000) * 100, 100);
  document.getElementById('growth-progress').style.width = `${percentage}%`;
}

function loadWeek(offset) {
  const date = new Date();
  date.setDate(date.getDate() + (offset * 7));
  
  // Calculate week number roughly
  const startDate = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
  
  document.getElementById('week-title').innerText = `Semana ${weekNumber}, ${date.getFullYear()}` + (offset === 0 ? ' (Actual)' : '');

  const weekData = generateWeek(date.getFullYear(), weekNumber);
  renderCalendar(weekData, document.getElementById('calendar-grid'));
}

function setupEventListeners() {
  document.getElementById('prev-week').addEventListener('click', () => {
    currentWeekOffset--;
    loadWeek(currentWeekOffset);
  });

  document.getElementById('next-week').addEventListener('click', () => {
    currentWeekOffset++;
    loadWeek(currentWeekOffset);
  });

  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('content-detail-modal').classList.add('hidden');
  });

  // Close modal on click outside
  document.getElementById('content-detail-modal').addEventListener('click', (e) => {
    if (e.target.id === 'content-detail-modal') {
      e.target.classList.add('hidden');
    }
  });

  // Example interaction for tracker
  document.getElementById('follower-count').parentElement.addEventListener('click', () => {
    const newVal = prompt("Ingresa el nuevo número de seguidores:");
    if (newVal !== null && !isNaN(newVal)) {
      localStorage.setItem('phanto_followers', newVal);
      updateFollowerTracker();
    }
  });
}

init();
