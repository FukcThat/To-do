class Todo {
  constructor(TodoTitle, TodoDesc, TodoDueDate, TodoPriority) {
    this.title = TodoTitle;
    this.description = TodoDesc;
    this.dueDate = TodoDueDate;
    this.priority = TodoPriority;
  }
}

module.exports = Todo;
