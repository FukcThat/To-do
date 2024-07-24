// Project Blueprint

class Project {
  constructor(pjctName) {
    this.todoList = [];
    this.projectName = pjctName;
  }

  addTodo(todoItem) {
    this.todoList.push(todoItem);
  }

  removeTodo(index) {
    this.todoList.splice(index, 1);
  }

  getTodoList() {
    return this.todoList;
  }
}

module.exports = Project;
