"use strict";

var priceBtn = document.querySelector(".price-list__btn--open");
var pricePopup = document.querySelector(".price-list__popup");
var popupBtn = document.querySelector(".price-list__btn--popup");

priceBtn.addEventListener("click", function(evt) {
  if (pricePopup.classList.contains("price-list__popup--closed")) {
    pricePopup.classList.remove("price-list__popup--closed");
    pricePopup.classList.add("price-list__popup--opened");
  }
});

popupBtn.addEventListener("click", function(evt) {
  if (pricePopup.classList.contains("price-list__popup--opened")) {
    pricePopup.classList.remove("price-list__popup--opened");
    pricePopup.classList.add("price-list__popup--closed");
  }
});
