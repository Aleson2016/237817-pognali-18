"use strict";

var buttonsMinus = document.querySelectorAll(".new-plans__input-btn--minus");
var buttonsPlus = document.querySelectorAll(".new-plans__input-btn--plus");
var inputsNumber = document.querySelectorAll(".new-plans__input");

var decrease = function(button, input) {
  button.addEventListener("click", function() {
    if(input.value > 1) {
      input.value = input.value - 1;
    }
  })
};

var increase = function(button, input) {
  button.addEventListener("click", function() {
    input.value = parseInt(input.value) + 1;
  })
};

for(var i=0; i<buttonsMinus.length; i++) {
  var buttonMinus = buttonsMinus[i];
  var inputNumber = inputsNumber[i];
  decrease(buttonMinus, inputNumber);
};

for(var i=0; i<buttonsPlus.length; i++) {
  var buttonPlus = buttonsPlus[i];
  var inputNumber = inputsNumber[i];
  increase(buttonPlus, inputNumber);
};
