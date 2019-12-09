import "./css/common.css";

const body = document.querySelector("body");
const styled = body.style;

function init() {
  const randomNum = Math.ceil(Math.random() * 6);
  styled.backgroundImage = `url("images/${randomNum}.jpg")`;
  styled.backgroundPosition = "center";
  styled.backgroundSize = "cover";
  styled.backgroundAttachment = "fixed";
  styled.animation = `fadeIn 2s linear forwards`;
  styled.zIndex = "-1";
}

init();
