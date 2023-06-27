"use strict";

let firstInput = [];
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
let commaButton = document.querySelector("#comma");
let allClearValue = document.querySelector("#all-clear");

let commaValue = false;

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
  commaButton.addEventListener("click", displayNumber);
  allClearValue.addEventListener("click", displayAllClearInFirstInput);
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
  } else if (this === commaButton) {
    displayCommaInFirstInput();
  } else if (this === allClearValue) {
    displayAllClearInFirstInput();
  }
}

function diplayOneInFirstInput() {
  const oneHtml = /*html*/ `1`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", oneHtml);
  firstInput.push(oneHtml);
  console.log(firstInput);
}

function diplayTwoInFirstInput() {
  const twoHtml = /*html*/ `2`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", twoHtml);
  firstInput.push(twoHtml);
  console.log(firstInput);
}

function diplayThreeInFirstInput() {
  const threeHtml = /*html*/ `3`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", threeHtml);
  firstInput.push(threeHtml);
  console.log(firstInput);
}

function diplayFourInFirstInput() {
  const fourHtml = /*html*/ `4`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", fourHtml);
  firstInput.push(fourHtml);
  console.log(firstInput);
}

function diplayFiveInFirstInput() {
  const fiveHtml = /*html*/ `5`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", fiveHtml);
  firstInput.push(fiveHtml);
  console.log(firstInput);
}

function diplaySixInFirstInput() {
  const sixHtml = /*html*/ `6`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", sixHtml);
  firstInput.push(sixHtml);
  console.log(firstInput);
}

function diplaySevenInFirstInput() {
  const sevenHtml = /*html*/ `7`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", sevenHtml);
  firstInput.push(sevenHtml);
  console.log(firstInput);
}

function diplayEightInFirstInput() {
  const eightHtml = /*html*/ `8`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", eightHtml);
  firstInput.push(eightHtml);
  console.log(firstInput);
}

function diplayNineInFirstInput() {
  const nineHtml = /*html*/ `9`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", nineHtml);
  firstInput.push(nineHtml);
  console.log(firstInput);
}

function diplayZeroInFirstInput() {
  const zeroHtml = /*html*/ `0`;
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", zeroHtml);
  firstInput.push(zeroHtml);
  console.log(firstInput);
}

function displayCommaInFirstInput() {
  if (commaValue === false) {
    const commaHtml = /*html*/ `.`;
    document.querySelector("#first-input").insertAdjacentHTML("beforeend", commaHtml);
    firstInput.push(commaHtml);
    console.log(firstInput);
    commaValue = true;
  } else if (commaValue) {
    console.log("Kun et komma i tal");
  }
}

function displayAllClearInFirstInput() {
  document.querySelector("#first-input").innerHTML = " ";
  console.log("all clear");
    firstInput = [" "];
    commaValue = false; 
  console.log(firstInput);
}
