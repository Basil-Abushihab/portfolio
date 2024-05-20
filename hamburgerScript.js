const hamburger = document.querySelector("#hamburger");
const sectionContainer = document.querySelector("#sectionContainer");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sectionContainer.classList.toggle("active");
});
