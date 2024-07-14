import { format } from "date-fns";
import Project from "./project";
import Todo from "./todo";
import { projectData } from "./data";
import { initTodoModal } from "./todo-modal";
import { initProjectModal } from "./project-modal";
import { renderProjects, renderTodos } from "./render";

initTodoModal();
initProjectModal();
renderProjects(projectData);

projectData.forEach((project) => {
  renderTodos(project.getTodoList());
});
