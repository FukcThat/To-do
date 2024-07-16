import { projectData } from "./data";

export const renderProjects = (projects) => {
  const projectContainer = document.querySelector(".project-continer");
  projectContainer.innerHTML = "";

  // Create a div for each project and append it to the nav
  projects.forEach((project) => {
    const projectNavBtn = document.createElement("button");

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

  todoList.forEach((todo) => {
    const todoDiv = document.createElement("div");

    //Title
    let todoTitle = document.createElement("h2");
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

  renderTodos(everyTodoArray);
};

export const renderOneProject = (projectName) => {
  if (projectName === "Home") return renderHome();

  projectData.forEach((project) => {
    if (project.projectName === projectName) {
      renderTodos(project.getTodoList());
    }
  });
};
