import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const schedule = require('node-schedule');

var start = document.getElementById('start');
var d = document.getElementById('days');
var h = document.getElementById('hours');
var m = document.getElementById('minutes');
var s = document.getElementById('seconds');

let runing = false;
const job = schedule.scheduleJob('*/1 * * * * *', function () {
  if (runing) {
    let timeSelected = new Date(date.value);
    let currentTime = new Date();
    let dif = timeSelected.getTime() - currentTime.getTime();
    let dataTime = convertMs(dif);
    d.innerHTML = addLeadingZero(dataTime.days);
    h.innerHTML = addLeadingZero(dataTime.hours);
    m.innerHTML = addLeadingZero(dataTime.minutes);
    s.innerHTML = addLeadingZero(dataTime.seconds);
  }
});

const elemento = document.getElementById("alert");
elemento.style.display = "none";
start.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      updateValue();
    },
  };

const date = document.getElementById("datetime-picker");
flatpickr(date, options);

start.addEventListener(
    'click',
    function () {
        runing = true;
    },
    false
  );

function updateValue() {
    let timeSelected = new Date(date.value);
    let currentTime = new Date();
    let dif = timeSelected.getTime() - currentTime.getTime();
    if (dif < 0) {
        start.disabled = true;
        elemento.style.display = "";
    } else {
        start.disabled = false;
        elemento.style.display = "none";
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value){
    return value < 10 ? "0"+ value: value;
  }