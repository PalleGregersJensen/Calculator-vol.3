"use strict";

//======== Global variables=======//
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
let deleteButton = document.querySelector("#delete");

let commaValue = false;

window.addEventListener("load", start);

//======== Add eventlisteners at start function =======//
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
  deleteButton.addEventListener("click", deleteClicked);
}

//======== Display numbers at the display =======//
function displayNumber() {
  console.log("button clicked");
  if (this === buttonValueOne) {
    diplayOneInFirstInput();
  } else if (this === buttonValueTwo) {
    diplayTwoInFirstInput();
  } else if (this === buttonValueThree) {
    diplayThreeInFirstInput();
  } else if (this === buttonValueFour) {
    diplayFourInFirstInput();
  } else if (this === buttonValueFive) {
    diplayFiveInFirstInput();
  } else if (this === buttonValueSix) {
    diplaySixInFirstInput();
  } else if (this === buttonValueSeven) {
    diplaySevenInFirstInput();
  } else if (this === buttonValueEight) {
    diplayEightInFirstInput();
  } else if (this === buttonValueNine) {
    diplayNineInFirstInput();
  } else if (this === buttonValueZero) {
    diplayZeroInFirstInput();
  } else if (this === commaButton) {
    displayCommaInFirstInput();
  } else if (this === allClearValue) {
    displayAllClearInFirstInput();
  }
}

function diplayOneInFirstInput() {
  const one = 1;
  firstInput.push(one);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplayTwoInFirstInput() {
  const two = 2;
  firstInput.push(two);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplayThreeInFirstInput() {
  const three = 3;
  firstInput.push(three);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplayFourInFirstInput() {
  const four = 4;
  firstInput.push(four);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplayFiveInFirstInput() {
  const five = 5;
  firstInput.push(five);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplaySixInFirstInput() {
  const six = 6;
  firstInput.push(six);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplaySevenInFirstInput() {
  const seven = 7;
  firstInput.push(seven);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplayEightInFirstInput() {
  const eight = 8;
  firstInput.push(eight);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplayNineInFirstInput() {
  const nine = 9;
  firstInput.push(nine);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function diplayZeroInFirstInput() {
  const zero = 0;
  firstInput.push(zero);
  console.log(firstInput);
  let newFirstInput = firstInput.join("");
  document.querySelector("#first-input").innerHTML = "";
  document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
}

function displayCommaInFirstInput() {
  if (commaValue === false) {
    const comma = ".";
    firstInput.push(comma);
    let newFirstInput = firstInput.join("");
    document.querySelector("#first-input").innerHTML = "";
    document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
    console.log(firstInput);
    commaValue = true;
  } else if (commaValue) {
    console.log("Kun et komma i tal");
    console.log(commaValue);
  }
}

function displayAllClearInFirstInput() {
  document.querySelector("#first-input").innerHTML = " ";
  console.log("all clear");
  firstInput = [];
  commaValue = false;
  console.log(firstInput);
}

function deleteClicked() {
  if (firstInput.includes(".")) {
    firstInput.pop();
    commaValue = firstInput.includes(".")
    console.log(commaValue);
    let newFirstInput = firstInput.join("");
    console.log(firstInput);
    console.log(newFirstInput);
    document.querySelector("#first-input").innerHTML = "";
    document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
  } else {
    firstInput.pop();
    commaValue = false;
    console.log(commaValue);
    let newFirstInput = firstInput.join("");
    console.log(firstInput);
    console.log(newFirstInput);
    document.querySelector("#first-input").innerHTML = "";
    document.querySelector("#first-input").insertAdjacentHTML("beforeend", newFirstInput);
  }
}
