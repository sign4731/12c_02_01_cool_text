"use strict";

const string = document.querySelector("#cooltext").textContent;
const letters = string.split("");

window.addEventListener("DOMContentLoaded", start);

function start() {
  clearText();
}

function clearText() {
  document.querySelector(".cooltext").textContent = null;
  createSpans();
  addAnimationDelay();
}

function createSpans() {
  letters.forEach((letter) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = letter;
    if (letter === " ") {
      newSpan.classList.add("space");
    } else {
      newSpan.classList.add("letter");
    }

    const currentH1 = document.querySelector(".text");
    currentH1.appendChild(newSpan);
  });
}

function addAnimationDelay() {
  //   console.log(string.length);
  for (let i = 0; i < string.length; i++) {
    let letter = document.querySelectorAll(".letter");
    letter[i].style.setProperty("--delay", i);
    console.log(letter[i]);
  }
}
