import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('textToggle');
  const hiddenText = document.getElementById('hiddenText');

  if (!toggleBtn || !hiddenText) {
    return;
  }

  toggleBtn.addEventListener('click', () => {
    hiddenText.classList.toggle('visible');
  });
});