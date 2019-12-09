import "./css/common.css";

const body = document.querySelector("body");
const styled = body.style;

function paintImg(jun) {
  styled.backgroundImage = `url("images/${jun}.jpg")`;
  styled.backgroundPosition = "center";
  styled.backgroundSize = "cover";
  styled.backgroundAttachment = "fixed";
  styled.animation = `fadeIn 2s linear forwards`;
  styled.zIndex = "-1";
  // const image = new Image();
  // image.src = `images/${jun}.jpg`;
  // body.prepend(image);
  // image.classList.add("bgimage");
}

function init() {
  const randomNum = Math.ceil(Math.random() * 6);
  paintImg(randomNum);
}

init();
