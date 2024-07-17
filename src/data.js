import { checkStorageAvailabily } from "./local-storage";
import Project from "./project";
import Todo from "./todo";

export const projectData = [];

if (checkStorageAvailabily("localStorage")) {
  // Local Storage is available and supported, so we try and get the Project Data from it
  const localStorageProjectData = JSON.parse(localStorage.getItem("Projects"));

  if (!localStorageProjectData) {
    // No project data exists in local storage so we create a home project and store it
    const homeProject = new Project("Home");
    projectData.push(homeProject);
    localStorage.setItem("Projects", JSON.stringify(projectData));
  } else {
    console.log("hello");
    // Local Storage Projects exist, so we set our projectData to that

    localStorageProjectData.forEach((projectItem) => {
      const projectFromItem = new Project(projectItem.projectName);

      projectItem.todoList.forEach((todoItem) => {
        projectFromItem.addTodo(
          new Todo(
            todoItem.title,
            todoItem.description,
            todoItem.dueDate,
            todoItem.priority,
            todoItem.project
          )
        );
      });

      projectData.push(projectFromItem);
    });
  }
} else {
  // If local storage is not supported or full then just start with basic home project
  const homeProject = new Project("Home");
  projectData.push(homeProject);
}
