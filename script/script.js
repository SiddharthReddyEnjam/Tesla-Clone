const menu = document.querySelector(".menu");
const blur = document.querySelector("#blur");
const navOpen = document.querySelector(".nav-open");
const container = document.querySelector(".container");
// HIDING SCROLLING FROM BODY
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  blur.style.display = "block";
  navOpen.classList.toggle("open-nav");
  body.classList.toggle("body-s");
});

blur.addEventListener("click", () => {
  blur.style.display = "none";
  navOpen.classList.toggle("open-nav");
  body.classList.toggle("body-s");
});

const cross = document.querySelector(".close-link");

cross.addEventListener("click", () => {
  blur.style.display = "none";
  navOpen.classList.toggle("open-nav");
  body.classList.toggle("body-s");
});
