const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

addCounterEl.addEventListener("click", () => {
  if (timersCount < 5) {
    const newTimer = createTimerEl(timersCount++);
    timersContainerEl.appendChild(newTimer);
  }
});

const createTimerEl = (number) => {
  const timer = document.createElement("div");
  timer.className = `timer timer_${number}`;
  timer.innerHTML = `
  <div class="remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>
`;

  let time = 0;
  const intervalId = setInterval(() => {
    time += 1;
    // get time / 100 = 230 = 2s
    let sec = Math.floor(time / 100);
    // get remainder 230 % 100 = 30ms
    let millisec = time % 100;
    const h3 = timer.querySelector("h3");
    h3.innerHTML = `${sec} <span>${millisec}</span>`;
  }, 100);

  const removeDiv = timer.querySelector(".remove");
  const resetButton = timer.querySelector(".reset");
  const stopButton = timer.querySelector(".stop");

  resetButton.addEventListener("click", () => {
    time = 0;
  });

  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
  });

  removeDiv.addEventListener("click", () => {
    timer.remove();
    timersCount--;
  });

  return timer;
};
