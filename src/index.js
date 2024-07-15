import { projectData } from "./data";
import { initTodoModal } from "./todo-modal";
import { initProjectModal } from "./project-modal";
import { renderHome, renderProjects, renderTodos } from "./render";

initTodoModal();
initProjectModal();
renderProjects(projectData);
renderHome();
