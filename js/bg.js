const body = document.querySelector("body");
const randomNum = Math.ceil(Math.random() * 4);

function loadimg() {
  const image = new Image();
  image.src = `images/${randomNum}.jpg`;
  body.append(image);
  image.classList.add("bgimage");
}

function init() {
  loadimg();
}

init();
