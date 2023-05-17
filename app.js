const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
  toggleBtn.classList.add("hide-toggle-btn");
  closeBtn.classList.add("show-close-btn");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  closeBtn.classList.remove("show-close-btn");
  toggleBtn.classList.remove("hide-toggle-btn");
});
