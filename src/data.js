import { format } from "date-fns";
import Project from "./project";
import Todo from "./todo";

export const projectData = [];

const homeProject = new Project("Home");

homeProject.addTodo(
  new Todo(
    "Feed Gitty",
    "Just put the format",
    format(new Date(), "do.MMM.yyyy")
  )
);

projectData.push(homeProject);
