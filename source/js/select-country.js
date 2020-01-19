"use strict";

var plansBtn = document.querySelector(".new-plans__btn--popup");
var plansPopup = document.querySelector(".new-plans__popup");

plansBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (plansPopup.classList.contains("new-plans__popup--closed")) {
    plansPopup.classList.remove("new-plans__popup--closed");
    plansPopup.classList.add("new-plans__popup--opened");
  } else {
    plansPopup.classList.remove("new-plans__popup--opened");
    plansPopup.classList.add("new-plans__popup--closed");
  }
});
