// Select Element
let burgerIcon = document.querySelector(".burger-icon");
let nav = document.querySelector("nav");
let closeIcon = document.querySelector("nav .close");
let link_nav = document.querySelectorAll("nav a");
// Open the Nav menu when pressing the burgerIcon
burgerIcon.onclick = function () {
  nav.style.transform = "translateY(0)";
};
// Close the Nav menu when pressing the closeIcon
closeIcon.onclick = function () {
  nav.style.transform = "translateY(-100%)";
};
// change background header when scrolling
window.onscroll = function () {
  if (window.scrollY >= 400) {
    document.querySelector(".header").classList.add("header-scrolling");
  } else {
    document.querySelector(".header").classList.remove("header-scrolling");
  }
};
// Close Nav when clicking on link
Array.from(link_nav).forEach((ele) => {
  ele.onclick = function () {
    nav.style.transform = "translateY(-100%)";
  };
});
