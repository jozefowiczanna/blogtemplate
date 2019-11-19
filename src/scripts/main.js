
$(document).ready(function(){

  $("#theTarget").skippr();

  if (window.innerWidth < 576) {
    $('.hero').css({ height: window.innerHeight });
  }
});    

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.menu-wrapper');

const toggleNav = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('menu-wrapper--active');
}

hamburger.addEventListener('click', toggleNav);
nav.addEventListener('click', toggleNav);

const searchBtn = document.querySelector('.search__btn-js');
const searchForm = document.querySelector('.search__form');

const toggleSearch = () => {
  searchForm.classList.toggle('search__form--active');
}

searchBtn.addEventListener('click', toggleSearch);

// prevent navigation animation trigger when resizing window
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});