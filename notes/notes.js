const btnFilter = document.querySelector(".btn-filter");
const filterContainer = document.querySelector(".filter-container");

btnFilter.addEventListener("click", function () {
  filterContainer.classList.toggle("filter-container-active");
});
