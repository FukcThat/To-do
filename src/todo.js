class Todo {
  constructor(TodoTitle, TodoDesc, TodoDueDate, TodoPriority, TodoProject) {
    this.title = TodoTitle;
    this.description = TodoDesc;
    this.dueDate = TodoDueDate;
    this.priority = TodoPriority;
    this.project = TodoProject;
  }
}

module.exports = Todo;
