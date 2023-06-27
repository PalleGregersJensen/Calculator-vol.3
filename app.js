"use strict";

let firstInput = document.querySelector("#first-input");
let secondInput = document.querySelector("#second-input").value;
let result = document.querySelector("#result");
let buttonValueOne = document.querySelector("#one");
let buttonValueTwo = document.querySelector("#two");
let buttonValueThree = document.querySelector("#three");
let buttonValueFour = document.querySelector("#four");
let buttonValueFive = document.querySelector("#five");
let buttonValueSix = document.querySelector("#six");
let buttonValueSeven = document.querySelector("#seven");
let buttonValueEight = document.querySelector("#eight");
let buttonValueNine = document.querySelector("#nine");
let buttonValueZero = document.querySelector("#zero");
let commaValue = document.querySelector("#comma");

window.addEventListener("load", start);

function start() {
  console.log("JS kører");
  buttonValueOne.addEventListener("click", displayNumber);
  buttonValueTwo.addEventListener("click", displayNumber);
  buttonValueThree.addEventListener("click", displayNumber);
  buttonValueFour.addEventListener("click", displayNumber);
  buttonValueFive.addEventListener("click", displayNumber);
  buttonValueSix.addEventListener("click", displayNumber);
  buttonValueSeven.addEventListener("click", displayNumber);
  buttonValueEight.addEventListener("click", displayNumber);
  buttonValueNine.addEventListener("click", displayNumber);
    buttonValueZero.addEventListener("click", displayNumber);
    commaValue.addEventListener("click", displayNumber);
}

function displayNumber() {
  console.log("button clicked");
  if (this === buttonValueOne) {
    //   firstInput += 1;
    //   document.querySelector("#first-input").textContent = `${firstInput}1`;
    //   console.log(firstInput);
    diplayOneInFirstInput();
  } else if (this === buttonValueTwo) {
    //   firstInput += 2;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplayTwoInFirstInput();
  } else if (this === buttonValueThree) {
    //   firstInput += 3;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplayThreeInFirstInput();
  } else if (this === buttonValueFour) {
    //   firstInput += 4;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplayFourInFirstInput();
  } else if (this === buttonValueFive) {
    //   firstInput += 5;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplayFiveInFirstInput();
  } else if (this === buttonValueSix) {
    //   firstInput += 6;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplaySixInFirstInput();
  } else if (this === buttonValueSeven) {
    //   firstInput += 7;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplaySevenInFirstInput();
  } else if (this === buttonValueEight) {
    //   firstInput += 8;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplayEightInFirstInput();
  } else if (this === buttonValueNine) {
    //   firstInput += 9;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplayNineInFirstInput();
  } else if (this === buttonValueZero) {
    //   firstInput += 0;
    // document.querySelector("#first-input").textContent = firstInput;
    // console.log(firstInput);
      diplayZeroInFirstInput();
  } else if (this === commaValue) {
      displayCommaInFirstInput(); 
    }
    
}

function diplayOneInFirstInput() {
  const oneHtml = /*html*/ `1`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", oneHtml);
}

function diplayTwoInFirstInput() {
  const twoHtml = /*html*/ `2`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", twoHtml);
}

function diplayThreeInFirstInput() {
  const threeHtml = /*html*/ `3`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", threeHtml);
}

function diplayFourInFirstInput() {
  const fourHtml = /*html*/ `4`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", fourHtml);
}

function diplayFiveInFirstInput() {
  const fiveHtml = /*html*/ `5`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", fiveHtml);
}

function diplaySixInFirstInput() {
  const sixHtml = /*html*/ `6`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", sixHtml);
}

function diplaySevenInFirstInput() {
  const sevenHtml = /*html*/ `7`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", sevenHtml);
}

function diplayEightInFirstInput() {
  const eightHtml = /*html*/ `8`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", eightHtml);
}

function diplayNineInFirstInput() {
  const nineHtml = /*html*/ `9`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", nineHtml);
}

function diplayZeroInFirstInput() {
  const zeroHtml = /*html*/ `0`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", zeroHtml);
}

function displayCommaInFirstInput() {
  const commaHtml = /*html*/ `.`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", commaHtml);
}
