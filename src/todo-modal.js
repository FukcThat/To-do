import Todo from "./todo";
import { projectData } from "./data";
import { renderHome } from "./render";

const todoModal = document.querySelector(".modal");
const todoForm = document.querySelector("#TodoForm");
const tdTitleInput = document.querySelector("#TodoFormTitle");
const tdDescInput = document.querySelector("#TodoFormDesc");
const tdDateInput = document.querySelector("#TodoFormDate");
const projectDropdown = document.querySelector("#projectDropDown");

const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".open-btn");
const closeModalBtn = document.querySelector(".close-btn");
const tdSubBtn = document.querySelector("#todoSubBtn");

const openModal = () => {
  todoModal.classList.remove("hidden");
  todoModal.classList.add("flex");
  overlay.classList.remove("hidden");

  projectDropdown.innerHTML = "";

  projectData.forEach((project) => {
    const projectOption = document.createElement("option");
    projectOption.setAttribute("value", project.projectName);
    projectOption.textContent = project.projectName;
    projectDropdown.appendChild(projectOption);
  });
};

const closeModal = () => {
  todoForm.reset();
  todoModal.classList.add("hidden");
  todoModal.classList.remove("flex");
  overlay.classList.add("hidden");
};

const submitTodoForm = () => {
  // Validate inputs: Title, Desc, DueDate, Priority, Project Choice (default Home)
  const tdPrioInput = document.querySelector("input[name=priority]:checked");

  if (
    tdTitleInput.value === "" ||
    tdDescInput.value === "" ||
    tdDateInput.value === "" ||
    !tdPrioInput
    //projectoption.value === ""
  ) {
    window.alert("You missed something.");
  } else {
    // Create a new Todo Object with data from Form
    const newTodo = new Todo(
      tdTitleInput.value,
      tdDescInput.value,
      tdDateInput.value,
      tdPrioInput.value,
      projectDropdown.value
    );

    // Push todo to project relevant array -->
    projectData.forEach((project) => {
      if (newTodo.project === project.projectName) {
        project.addTodo(newTodo);
      }
    });

    // Re-render To-Dos & close Modal
    closeModal();
    renderHome();
  }
};

export const initTodoModal = () => {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  tdSubBtn.addEventListener("click", submitTodoForm);
};
