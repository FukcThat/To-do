import { projectData, removeTodoItem } from "./data";
import { checkStorageAvailabily } from "./local-storage";

export const renderProjects = (projects) => {
  const projectContainer = document.querySelector(".project-continer");
  projectContainer.innerHTML = "";

  // Create a div for each project and append it to the nav
  projects.forEach((project) => {
    const projectNavBtn = document.createElement("button");
    projectNavBtn.classList.add("project-nav-btns");

    projectNavBtn.addEventListener("click", () => {
      renderOneProject(project.projectName);
    });
    projectNavBtn.textContent = project.projectName;
    projectContainer.appendChild(projectNavBtn);
  });
};

export const renderTodos = (todoList) => {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.innerHTML = "";

  todoList.forEach((todo, index) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    // Delete Btn
    let deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "x";
    deleteTaskBtn.classList.add("delete-todo-btn");

    deleteTaskBtn.addEventListener("click", () => {
      // if the project name is the same as the todo's project property value, update Local Storage
      projectData.forEach((project) => {
        if (project.projectName === todo.project) {
          project.removeTodo(index);
          if (checkStorageAvailabily("localStorage")) {
            localStorage.setItem("Projects", JSON.stringify(projectData));
          }
          renderOneProject(project.projectName);
        }
      });
    });

    todoDiv.appendChild(deleteTaskBtn);

    //Title
    let todoTitle = document.createElement("h3");
    todoTitle.textContent = todo.title;
    todoDiv.appendChild(todoTitle);

    // Description
    let todoDesc = document.createElement("p");
    todoDesc.textContent = `Description: ${todo.description}`;
    todoDiv.appendChild(todoDesc);

    // Due Date
    let todoDueDate = document.createElement("p");
    todoDueDate.textContent = `Due on: ${todo.dueDate}`;
    todoDiv.appendChild(todoDueDate);

    // Priority
    let todoPrio = document.createElement("p");
    todoPrio.textContent = `Priority: ${todo.priority}`;
    todoDiv.appendChild(todoPrio);

    todoContainer.appendChild(todoDiv);
  });
};

export const renderHome = () => {
  const everyTodoArray = [];
  projectData.forEach((project) => {
    project.getTodoList().forEach((todoItem) => {
      everyTodoArray.push(todoItem);
    });
  });
  renderTodos(everyTodoArray, "home");
};

export const renderOneProject = (projectName) => {
  updateHeader(projectName);

  if (projectName === "Home") return renderHome();

  projectData.forEach((project) => {
    if (project.projectName === projectName) {
      renderTodos(project.getTodoList());
    }
  });
};

const updateHeader = (projectName) => {
  let todoContainerHeader = document.querySelector("#taskHeader");
  todoContainerHeader.textContent = projectName;
};
