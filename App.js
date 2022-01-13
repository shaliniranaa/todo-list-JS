const todoButton = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
// const aTodos = ["test","test1"];

//event listerners

todoButton.addEventListener("click", addToDo);

//Functions

function createRadioBtn() {
  let radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  radioBtn.name = "todoRadioBtn";
  return radioBtn;
}

function createToDoListItem() {
  let newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-listItem");
  return newTodo;
}

function addToDo(event) {
  // prevent form from submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");

  //create checkbox
  var radioBtn = createRadioBtn();
  //  checkbox.value = "1";
  todoDiv.appendChild(radioBtn);

  // create li
  let newTodo = createToDoListItem();
  todoDiv.appendChild(newTodo);

  //event listerner for checkbox

  radioBtn.addEventListener("change", function (e) {
    debugger;
    if (e.currentTarget.value) {
      newTodo.classList.add("todo-completed");
    }
  });

  //append to list
  todoList.appendChild(todoDiv);
}
