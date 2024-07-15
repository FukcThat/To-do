import { format } from "date-fns";
import Project from "./project";
import Todo from "./todo";

export const projectData = [];

const homeProject = new Project("Home");
const anotherProject = new Project("Another");

homeProject.addTodo(
  new Todo(
    "Feed Gitty",
    "Just put the format",
    format(new Date(), "do.MMM.yyyy"),
    "low",
    "Home"
  )
);

anotherProject.addTodo(
  new Todo(
    "Feed Gitty",
    "Just put the format",
    format(new Date(), "do.MMM.yyyy"),
    "low",
    "Another"
  )
);

projectData.push(homeProject);
projectData.push(anotherProject);
