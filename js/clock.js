const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".time");
const em = clockContainer.querySelector(".em");

function getTime() {
  const date = new Date();
  let hours = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  em.innerText = `${hours < 12 ? `AM` : `PM`}`;
  clockTitle.innerText = `${
    hours < 10
      ? `0${hours}`
      : `${
          hours - 12 < 10 && hours - 12 > 0
            ? `0${hours - 12}`
            : `${hours - 12 < 0 ? `${hours}` : `${hours - 12}`}`
        }`
  } : ${minute < 10 ? `0${minute}` : `${minute}`} : ${
    second < 10 ? `0${second}` : `${second}`
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
