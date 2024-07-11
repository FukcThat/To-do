// Project Blueprint

class Project {
  constructor(pjctName) {
    this.todoList = [];

    this.projectName = pjctName;
  }

  addTodo(todoItem) {
    this.todoList.push(todoItem);
  }

  getTodoList() {
    return this.todoList;
  }
}

module.exports = Project;
