const body = document.querySelector("body");

function paintImg(jun) {
  const image = new Image();
  image.src = `images/${jun}.jpg`;
  body.prepend(image);
  image.classList.add("bgimage");
}

function chooseNum() {
  const num = Math.ceil(Math.random() * 3);
  return num;
}

function init() {
  const randomNum = chooseNum();
  paintImg(randomNum);
}

init();
