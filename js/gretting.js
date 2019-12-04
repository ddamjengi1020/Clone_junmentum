const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

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

function askName() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function changeDisplay(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `${text}`;
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
