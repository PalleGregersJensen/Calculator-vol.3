"use strict"

let firstInput = document.querySelector("#first-input").value;
let secondInput = document.querySelector("#second-input").value;
let result = document.querySelector("#result").value;
let buttonValue = document.querySelector(".number").value;

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    document.querySelector(".number").addEventListener("click", displayNumber);
}

function displayNumber() {
    console.log("button clicked");
}

