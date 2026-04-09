// Modal für Bildvergrößerung (nur für Bild-Karten, nicht 3D)
function openModal(card) {
  if (card.classList.contains('model-card')) return;

  const img = card.querySelector('img');
  const title = card.querySelector('h3').textContent;
  const artist = card.querySelector('.artist').textContent;
  const desc = card.querySelector('.desc').textContent;

  document.getElementById('modal-img').src = img.src;
  document.getElementById('modal-img').alt = img.alt;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-artist').textContent = artist;
  document.getElementById('modal-desc').textContent = desc;

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// Escape-Taste schließt Modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
