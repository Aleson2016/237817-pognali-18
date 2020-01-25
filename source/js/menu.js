"use strict";

var navMenu = document.querySelector(".main-navigation");
var navToggle = navMenu.querySelector(".main-navigation__toggle");


navMenu.classList.remove("main-navigation--no-js");

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (navMenu.classList.contains("main-navigation--closed")) {
    navMenu.classList.remove("main-navigation--closed");
    navMenu.classList.add("main-navigation--opened");
  } else {
    navMenu.classList.add("main-navigation--closed");
    navMenu.classList.remove("main-navigation--opened");
  }
});

window.addEventListener("keydown", function(evt) {
  if (event.keyCode === 27) {
    evt.preventDefault();
    if (navMenu.classList.contains("main-navigation--opened")) {
      navMenu.classList.remove("main-navigation--opened");
      navMenu.classList.add("main-navigation--closed");
    }
  }
});

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0 && !navMenu.classList.contains("main-navigation--scroll")) {
    navMenu.classList.add("main-navigation--scroll");
  } else if(window.pageYOffset <= 0){
    navMenu.classList.remove("main-navigation--scroll");
  }
});
