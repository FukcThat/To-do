import { projectData } from "./data";
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
  console.log("Tada!");

  // Validate input (perhaps later)
  if (projectNameInput.value === "") {
    window.alert("Cheers");
  } else {
    // Create a new Project Object with data from Form
    const newProject = new Project(projectNameInput.value);

    // Add new project to projects array
    projectData.push(newProject);

    closeModal();
    renderProjects(projectData);
  }

  // Rerender Projects Array
};

export const initProjectModal = () => {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  projectSubBtn.addEventListener("click", submitProjectForm);
};
