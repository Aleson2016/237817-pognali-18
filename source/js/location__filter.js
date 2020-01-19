"use strict";

var locationBtn = document.querySelector(".location__popup-btn");
var locationPopup = document.querySelector(".location__wrapper");
var locationClose = document.querySelector(".location__popup-close");

locationBtn.addEventListener("click", function() {
  if(locationPopup.classList.contains("location__wrapper--closed-popup")) {
    locationPopup.classList.remove("location__wrapper--closed-popup");
    locationPopup.classList.add("location__wrapper--opened-popup");
  } else {
    locationPopup.classList.remove("location__wrapper--opened-popup");
    locationPopup.classList.add("location__wrapper--closed-popup");
  }
});

locationClose.addEventListener("click", function() {
  locationPopup.classList.remove("location__wrapper--opened-popup");
  locationPopup.classList.add("location__wrapper--closed-popup");
});
