const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min = 0, max = colors.length - 1) => {
  return Math.floor(Math.random() * colors.length);
};

let startId;

refs.start.addEventListener("click", (e) => {
  refs.start.disabled = true;
  refs.stop.disabled = false;

  startId = setInterval(() => {
    refs.body.bgColor = colors[randomIntegerFromInterval()];
    refs.body.style.transition = ".7s ease-in-out";
  }, 400);
});

refs.stop.addEventListener("click", () => {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(startId);
});
