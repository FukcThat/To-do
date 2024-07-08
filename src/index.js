class Todo {
  constructor(TodoTitle, TodoDesc, TodoDueDate) {
    this.title = TodoTitle;
    this.description = TodoDesc;
    this.dueDate = TodoDueDate;
  }
}

class Project {
  constructor() {
    this.TodoList = [];
  }

  addToDo(todoItem) {
    this.TodoList.push(todoItem);
  }

  getTodoList() {
    return this.TodoList;
  }
}

const HomeProject = new Project();

const todoFormElement = document.getElementById("TodoForm");
const todoFormTitle = document.getElementById("TodoFormTitle");
const todoFormDesc = document.getElementById("TodoFormDesc");
const todoFormDate = document.getElementById("TodoFormDate");
const homeContainer = document.getElementById("homeContainer");

const HandleTodoSubmit = (event) => {
  event.preventDefault();

  console.log(HomeProject.getTodoList());
  HomeProject.addToDo(
    new Todo(todoFormTitle.value, todoFormDesc.value, todoFormDate.value)
  );
  renderTodos();
};

todoFormElement.addEventListener("submit", HandleTodoSubmit);

const renderTodos = () => {
  homeContainer.innerHTML = "";
  HomeProject.getTodoList().map((todoItem) => {
    const TodoContainer = document.createElement("div");
    const TodoTitle = document.createElement("p");
    TodoTitle.textContent = todoItem.title;

    const TodoDesc = document.createElement("p");
    TodoDesc.textContent = todoItem.description;

    const TodoDate = document.createElement("div");
    TodoDate.textContent = todoItem.dueDate;

    TodoContainer.appendChild(TodoTitle);
    TodoContainer.appendChild(TodoDesc);
    TodoContainer.appendChild(TodoDate);

    homeContainer.appendChild(TodoContainer);
  });
};
