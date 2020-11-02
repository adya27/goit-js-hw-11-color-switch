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
let started = false;

const interval = function () {
  if (!started) {
    timerId = setInterval(onStartBtnClick, 1000);
  }
  started = true;
  console.log("interval -> started", started);
};

const onStartBtnClick = function () {
  refs.bodyItem.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];

  refs.startBtn.setAttribute("disabled", "true");
};
const onStopBtnClick = function () {
  clearInterval(timerId);
  refs.startBtn.removeAttribute("disabled");
  started = false;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", interval);

refs.stopBtn.addEventListener("click", onStopBtnClick);
