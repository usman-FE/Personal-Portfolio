let btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  if (e.target.classList.contains("header__nav")) return;

  document
    .querySelector(".header__navigation--background")
    .classList.toggle("active-bg");
  document.querySelector(".header__nav").classList.toggle("active-nav");
  document
    .querySelector(".header__nav-list")
    .classList.toggle("active-nav-list");
  document
    .querySelector(".header__navigation--icon")
    .classList.toggle("icon-toggle");
});
