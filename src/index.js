import './style.css';

const root = document.createElement('div');
root.innerHTML = '<h1>Collapse widget demo</h1>';
document.body.appendChild(root);

const toggleBtn = document.getElementById("textToggle");
const hiddenText = document.getElementById("hiddenText");

toggleBtn.addEventListener("click", () => {
  hiddenText.classList.toggle("visible");
});