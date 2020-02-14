const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  todoFrom = document.querySelector(".js-toDoForm"),
  todoList = document.querySelector(".js-toDoList");

const KEY = "user",
  SHOWING_CN = "showing",
  TODOS = "toDos",
  TODOSHOW = "todoform";

function saveValue(text) {
  localStorage.setItem(KEY, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  changeDisplay(currentValue);
  saveValue(currentValue);
}

function askName() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function deleteKey() {
  const li = todoList.querySelectorAll("li");
  todoFrom.classList.add(TODOSHOW);
  localStorage.removeItem(KEY);
  localStorage.removeItem(TODOS);
  for (i = 0; i < li.length; i++) {
    li[i].remove();
  }
  input.value = "";
  loadName();
}

function changeDisplay(text) {
  todoFrom.classList.remove(TODOSHOW);
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  greeting.appendChild(delBtn);
  delBtn.innerText = "DEL";
  delBtn.addEventListener("click", deleteKey);
}

function loadName() {
  const currentUser = localStorage.getItem(KEY);
  if (currentUser === null) {
    askName();
  } else {
    changeDisplay(currentUser);
  }
}

function init() {
  loadName();
}

init();
