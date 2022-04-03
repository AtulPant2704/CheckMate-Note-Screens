const toggleMenu = document.querySelector(".toggle-menu");
const navHeader = document.querySelector(".nav-header");
const linkCollapse = document.querySelector(".collapse-link");

toggleMenu.addEventListener("click", function () {
  navHeader.classList.toggle("expander");
});

linkCollapse.addEventListener("click", function () {
  const collapseMenu = this.nextElementSibling;
  collapseMenu.classList.toggle("show-collapse");
  const rotate = collapseMenu.previousElementSibling;
  rotate.classList.toggle("rotate");
});
