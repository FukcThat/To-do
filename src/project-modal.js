const projectModal = document.querySelector("#projectModalSection");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("open-new-project");
const closeModalBtn = document.querySelector("#closeProjectFormBtn");

const openModal = () => {
  projectModal.classList.remove("hidden");
  projectModal.classList.add("flex");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  projectModal.classList.add("hidden");
  projectModal.classList.remove("flex");
  overlay.classList.add("hidden");
};

export const initProjectModal = () => {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
};
