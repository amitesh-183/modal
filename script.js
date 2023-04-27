"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpensModal = document.querySelectorAll(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModel = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnOpensModal.forEach((items) => {
  items.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModel);

overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModel();
  }
});
