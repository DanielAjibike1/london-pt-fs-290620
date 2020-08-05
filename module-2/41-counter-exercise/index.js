let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */

const action = (symbol) => {
  if (symbol === "+") {
    counter += step;
  } else if (symbol === "-") {
    counter -= step;
  }
  document.querySelector(".counter_value").innerText = counter;
};

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */

const stepButton = document.querySelector(".step_form button");
const input = document.querySelector("#step");

const form = document.querySelector(".step_form");

form.addEventListener("submit", () => {
  step = Number(input.value);
  input.value = 1;
  document.querySelector(".step_value").innerText = step;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const decButton = document.getElementById("decrement");

decButton.addEventListener("click", () => {
  action("-");
});

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const incButton = document.getElementById("increment");

incButton.addEventListener("click", () => {
  action("+");
});
/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

let decIncInterval;
const autoDec = document.getElementById("auto_decrement");

autoDec.addEventListener("click", () => {
  clearInterval(decIncInterval);
  decIncInterval = setInterval(() => {
    action("-");
  }, 1000);
});

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const autoInc = document.getElementById("auto_increment");

autoInc.addEventListener("click", () => {
  clearInterval(decIncInterval);
  decIncInterval = setInterval(() => {
    action("+");
  }, 1000);
});

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

const autoStop = document.querySelector("#stop_auto");

autoStop.addEventListener("click", () => {
  clearInterval(decIncInterval);
});
