const toggleMenu = document.querySelector(".toggle-menu");
const navHeader = document.querySelector(".nav-header");
const navLink = document.querySelectorAll(".nav-link");
const linkCollapse = document.querySelector(".collapse-link");

toggleMenu.addEventListener("click", function () {
  navHeader.classList.toggle("expander");
});

navLink.forEach((link) =>
  link.addEventListener("click", function () {
    navLink.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  })
);

linkCollapse.addEventListener("click", function () {
  const collapseMenu = this.nextElementSibling;
  collapseMenu.classList.toggle("show-collapse");
  const rotate = collapseMenu.previousElementSibling;
  rotate.classList.toggle("rotate");
});
