console.log("header.js loaded");

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header_nav");

console.log(hamburger);
console.log(nav);

// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".header_nav");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   nav.classList.toggle("active");
// });

// console.log(document.querySelector(".hamburger"));
// console.log(document.querySelector(".header_nav"));

// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".header_nav");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   nav.classList.toggle("active");
// });

// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".header_nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}