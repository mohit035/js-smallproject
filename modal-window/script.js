"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// only the first one will be selected querySelector
// querySelectorall  will return the nodelist of the the generic class
// it works like array but its not arraay we can loop through this nodelist
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}

// handling the keypress event close modal by esc key
// keyboards events are so called global events because they donot happen in one specific element and global events like key events we usually list on the whole document
// no matter where they happen we are litening to the key press event in our document
// when ever the event happen we can have the information about that event in the event handler

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
