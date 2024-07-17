import { projectData } from "./data";
import { checkStorageAvailabily } from "./local-storage";
import Project from "./project";
import { renderProjects } from "./render";

const projectModal = document.querySelector("#projectModalSection");
const projectForm = document.querySelector("#projectForm");
const projectSubBtn = document.querySelector("#projectSubBtn");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("open-new-project");
const closeModalBtn = document.querySelector("#closeProjectFormBtn");
const projectNameInput = document.querySelector("#ProjectFormTitle");

const openModal = () => {
  projectModal.classList.remove("hidden");
  projectModal.classList.add("flex");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  // Reset form input text
  projectForm.reset();
  projectModal.classList.add("hidden");
  projectModal.classList.remove("flex");
  overlay.classList.add("hidden");
};

const submitProjectForm = () => {
  // Validate input
  if (projectNameInput.value === "") {
    window.alert("Be so kind and actually give it name, ok?");
  } else {
    // Create a new Project Object with data from Form
    const newProject = new Project(projectNameInput.value);

    // Add new project to projects array
    projectData.push(newProject);

    // Re-render Projects Array and close Modal
    closeModal();
    renderProjects(projectData);

    // Save projectData in local storage
    if (checkStorageAvailabily("localStorage")) {
      localStorage.setItem("Projects", JSON.stringify(projectData));
    }
  }
};

export const initProjectModal = () => {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  projectSubBtn.addEventListener("click", submitProjectForm);
};
