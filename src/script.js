const toggleBtn = document.getElementById("textToggle");
const hiddenText = document.getElementById("hiddenText");

toggleBtn.addEventListener("click", () => {
  hiddenText.classList.toggle("visible");
});
