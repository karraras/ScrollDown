let navbar = document.querySelector("nav");
let scrollPrevious = window.scrollY;
window.onscroll = function () {
  let scrollCurrent = window.scrollY;

  if (scrollPrevious > scrollCurrent) {
    document.querySelector("nav").style.display = "flex";
  } else {
    document.querySelector("nav").style.display = "none";
  }
  scrollPrevious = scrollCurrent;
};
