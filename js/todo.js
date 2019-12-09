const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target,
    li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  const toDosLength = toDos.length;
  if (toDosLength <= 4) {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  }
}

function handleCheck(event) {
  const target = event.target.parentNode.firstChild.checked;
  // const checkbox = toDoList.querySelector("li input[type='checkbox']");
  const span = event.target.parentNode.childNodes[1];

  if (target === true) {
    span.classList.add("textcheck");
  }
  if (target === false) {
    span.classList.remove("textcheck");
  }
}

function paintToDo(text) {
  if (toDos.length < 4) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("input");
    const span = document.createElement("span");
    const newId = Math.ceil(Math.random() * 200);
    delBtn.addEventListener("click", deleteToDo);
    delBtn.classList.add("del-btn");
    checkBtn.type = "checkbox";
    checkBtn.addEventListener("click", handleCheck);
    delBtn.innerText = "DEL";
    span.innerText = text;
    toDoList.appendChild(li);
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    const toDosObj = {
      text: text,
      id: newId
    };
    toDos.push(toDosObj);
    saveToDos();
  }
}

function submitToDoForm(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parseToDos = JSON.parse(loadedToDos);
    parseToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
  toDoForm.addEventListener("submit", submitToDoForm);
}

function init() {
  loadToDos();
}
init();
