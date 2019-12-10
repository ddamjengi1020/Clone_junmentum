const body = document.querySelector("body");
const randomNum = Math.ceil(Math.random() * 6);

function loadimg() {
  const image = new Image();
  image.src = `images/${randomNum}.jpg`;
  body.prepend(image);
  image.classList.add("bgimage");
}

function init() {
  loadimg();
}

init();
