"use strict";

var buttonsFilter = document.querySelectorAll(".filters__item-header");
var filters = document.querySelectorAll(".filters__item-wrapper");

var openFilter = function(button, filter) {
  button.addEventListener("click", function() {
    if(filter.classList.contains("filters__item-wrapper--closed")) {
      filter.classList.remove("filters__item-wrapper--closed");
      filter.classList.add("filters__item-wrapper--opened");
    } else {
      filter.classList.remove("filters__item-wrapper--opened");
      filter.classList.add("filters__item-wrapper--closed");
    }
  })
};

for(var i=0; i<buttonsFilter.length; i++) {
  var button = buttonsFilter[i];
  var filter = filters[i];
  openFilter(button, filter);
};
