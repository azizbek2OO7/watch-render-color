const timerElm = document.querySelector(".timer");
const startElm = document.querySelector(".start");
const stopElm = document.querySelector(".stop");
const durationElm = document.querySelector(".duration span");

let symbols = "123456789abcdef";
let started = false;
let counter = "#ffffff";
let interval;
timerElm.textContent = counter;
durationElm.classList.add("color");
durationElm.textContent = counter;

// LOGIC FUNCTIONS

function randomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randIdx = Math.floor(Math.random() * symbols.length);
    color += symbols[randIdx];
  }

  return color;
}

function startTime() {
  if (!started) {
    interval = setInterval(() => {
      timerElm.textContent = randomColor();
    }, 1000);
    started = true;
  } else if (started) {
    alert("Already Started");
    clearInterval(interval);
    timerElm.textContent = counter;
    started = false;
  }
}

function stopTime() {
  if (started) {
    clearInterval(interval);
    started = false;
    durationElm.textContent = timerElm.textContent;
    durationElm.classList.add("color");

    durationElm.addEventListener("click", () => {
      document.body.style.background = durationElm.textContent;
    });
  } else if (!started) {
    alert("Already Stopped");
    clearInterval(interval);
  }
}

// HANDLER FUNCTIONS

startElm.addEventListener("click", startTime);
stopElm.addEventListener("click", stopTime);
