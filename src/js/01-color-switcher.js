const schedule = require('node-schedule');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
stop.disabled = true;

let runing = false;
const job = schedule.scheduleJob('*/1 * * * * *', function () {
  if (runing) {
    document.body.style.backgroundColor = getRandomHexColor();
  }
});

start.addEventListener(
  'click',
  function () {
    runing = true;
    start.disabled = true;
    stop.disabled = false;
  },
  false
);

stop.addEventListener(
  'click',
  function () {
    start.disabled = false;
    stop.disabled = true;
    runing = false;
  },
  false
);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
