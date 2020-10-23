const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyItem: document.querySelector("body"),
};

const onStartBtnClick = function () {
  refs.bodyItem.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];

  refs.startBtn.setAttribute("disabled", "true");
};
const onStopBtnClick = function () {
  clearInterval(timerId);
  refs.startBtn.removeAttribute("disabled");
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener(
  "click",
  () => (timerId = setInterval(onStartBtnClick, 1000))
);
refs.stopBtn.addEventListener("click", onStopBtnClick);
