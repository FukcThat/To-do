# To-do

Odin Project - To-do List

DONE - Render Projects

DONE - Add projects to array

- Make render To-do function

  - expects array of to-dos

- Todo-Form Functionality

  - create drop down with ProjectData Option
  - validate input
  - create todo object from input
  - add todo to correct project
  - reset form & close
  - render new Todo array

- Add onlick to projectDiv's

  - Onclick render To-Do's of that project to To-Do container
    - Create new array
      - loop through projects
      - compare to project name
      - loop through that projects to-do's
      - add project to-do's to array
    - pass array into render to-do function

- Local Storage fun

---

1. RenderProject function

   - takes name of project to render
   - gets todoList of that Project
   - passes that into renderTodo()

2. Current Project functionality

   - switch active project
     --> populate todo-container with correct todoList

3. PrimeRender function
   - takes a project name
     - if its Home its calls HomeRender
     - otherwise projectRender
