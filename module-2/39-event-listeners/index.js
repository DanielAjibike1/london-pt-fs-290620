// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

const clickTheButton = () => {
  const button = document.querySelector("div");

  button.addEventListener("click", () => {
    console.log("Button was clicked");
  });
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */

const hoverOver = () => {
  const tag = document.querySelector("a");

  tag.addEventListener("mouseover", () => {
    console.log("Mouse hover");
  });
};

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */

const handleLeave = () => {
  const tag = document.querySelector("a");

  tag.addEventListener("mouseout", () => {
    console.log("Mouse left");
  });
};
/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const focusOnMe = () => {
  const input = document.querySelector("input");

  input.addEventListener("focus", () => {
    console.log("Focused");
  });
};

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

const clickElsewhere = () => {
  const firstFocus = document.querySelector("input");

  firstFocus.addEventListener("blur", () => {
    console.log("Message");
  });
};

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

const pressAKey = () => {
  const keyPress = document.querySelector("input");

  keyPress.addEventListener("keydown", () => {
    console.log("Message");
  });
};

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const releaseAKey = () => {
  const keyRelease = document.querySelector("input");

  keyRelease.addEventListener("keyup", () => {
    console.log("Message");
  });
};

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const inputToUpperCase = () => {
  const input = document.querySelector("input");

  input.addEventListener("keyup", () => {
    input.value = input.value.toUpperCase();
  });
};

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */

const handleSelectChange = () => {
  const handleInput = document.querySelector("#items");

  handleInput.addEventListener("change", () => {
    console.log(handleInput.value);
  });
};

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */

const result = {
  firstName: "",
  lastName: "",
};

const submitFormHandler = () => {
  const form = document.querySelector("form");
  const formInputs = document.querySelectorAll("input");

  form.addEventListener("submit", () => {
    result.firstName = formInputs[1].value;
    result.lastName = formInputs[2].value;
  });
  console.log(result);
};

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

const handleScroll = () => {
  window.addEventListener("scroll", () => {
    console.log("Scroll");
  });
};
