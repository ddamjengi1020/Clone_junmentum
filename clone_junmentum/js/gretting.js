const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  btn = document.querySelector(".js-button");

const KEY = "user",
  SHOWING_CN = "showing";

function saveValue(text) {
  localStorage.setItem(KEY, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  changeDisplay(currentValue);
  saveValue(currentValue);
}

function handleClick(event) {
  localStorage.removeItem(KEY);
  location.reload();
  askName();
}

function askName() {
  form.classList.add(SHOWING_CN);
  btn.classList.remove(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function changeDisplay(text) {
  btn.classList.add(SHOWING_CN);
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `${text}`;
  btn.addEventListener("click", handleClick);
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
