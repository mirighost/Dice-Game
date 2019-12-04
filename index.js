"use strict"

// random numbers
let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
let randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

// random images
let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

// changing of images
let firstPerson = document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
let secondPerson = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// If statements
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Won";
}
else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Won";
}