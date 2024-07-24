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

// export const removeTodoItem = (todo, Project) => {
//   console.log("removeTodo called with todo:", todo);
//   console.log("removetodo called with project:", Project);

//   if (!Project || !Project.todoList) {
//     console.error("Project or todoList is undefined");
//     return;
//   }

//   const todoIndex = Project.todoList.findIndex(
//     (item) =>
//       item.title === todo.title &&
//       item.description === todo.description &&
//       item.dueDate === todo.dueDate &&
//       item.priority === todo.priority
//   );

//   console.log("Index of todo to be removed:", todoIndex);

//   if (todoIndex !== -1) {
//     Project.todoList.splice(todoIndex, 1);

//     localStorage.setItem("Projects", JSON.stringify(projectData));

//     renderTodos(Project.getTodoList(), Project);
//   } else {
//     console.error("To-do item not found in project.todoList");
//   }
// };
