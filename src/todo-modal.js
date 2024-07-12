const todoModal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".open-btn");
const closeModalBtn = document.querySelector(".close-btn");

const openModal = () => {
  todoModal.classList.remove("hidden");
  todoModal.classList.add("flex");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  todoModal.classList.add("hidden");
  todoModal.classList.remove("flex");
  overlay.classList.add("hidden");
};

export const initTodoModal = () => {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
};
