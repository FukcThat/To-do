# To-do

Odin Project - To-do List

DONE - Render Projects

DONE - Add projects to array

DONE - Make render To-do function

DONE - expects array of to-dos

DONE - Todo-Form Functionality

- create drop down with ProjectData Option
- validate input
- create todo object from input
- add todo to correct project
- reset form & close
- render new Todo array

DONE - RenderProject function

- Create new array for project's own todo-list
- loop through projects
- takes name of project to render
- compare to project name
- gets todoList of that Project
- add project to-do's to array
- pass array into render to-do function

DONE - Add onlick to projectNavBtn's

- Onclick render To-Do's of that project to To-Do container

DONE - PrimeRender function

- takes a project name
  - if its Home its calls HomeRender
  - otherwise projectRender

DONE - Current Project functionality

- switch active project
- populate todo-container with correct todoList

---

- Local Storage fun

  - On Page Load

    - Load Projects
    - Load To-Do's

  - Add Project
    - Check if LS is available
    - Check if Project already exists in LS ?
    - Save to local storage
  - Edit Project -> overwrite LS?
  - Delete Proejct

  - Add Todo
    - Check if LS is available
    - Check if To-Do already exists in LS ?
    - Save to local storage
  - Edit To-Do -> overwrite LS?
  - Delete to-Do
