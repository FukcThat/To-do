import { projectData } from "./data";
import { initTodoModal } from "./todo-modal";
import { initProjectModal } from "./project-modal";
import { renderHome, renderOneProject, renderProjects } from "./render";

initTodoModal();
initProjectModal();
renderProjects(projectData);
renderHome();
renderOneProject();
