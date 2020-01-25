"use strict";

var navMenu = document.querySelector(".main-navigation");
var navToggle = navMenu.querySelector(".main-navigation__toggle");
var header = document.querySelector(".header__container");

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
  if (window.pageYOffset > 0 && !header.classList.contains("header__container--scroll")) {
    header.classList.add("header__container--scroll");
  } else if(window.pageYOffset <= 0){
    header.classList.remove("header__container--scroll");
  }
});
