"use strict";

const powers = document.querySelector(".powers");
const modal = document.querySelector(".modal-container");
const dispImg = document.querySelector(".dispImg");
const imgArr = document.querySelectorAll(".imgArr");

const active = document.querySelector(".active");
//const sidebar = document.querySelectorAll("li");

powers.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

modal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

const changeImage = function (smallImg) {
  const fullImg = document.getElementById("fullImg");
  fullImg.src = smallImg.src;
};
