// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require("readline-sync");

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */

let name = readlineSync.question("What's your name? ");

//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */

let userSign = ["+", "-", "*", "/"];
let selectedSymbol = "";

while (!selectedSymbol) {
  const answer = readlineSync.question(
    `Please choose an operator ${userSign}: `
  );

  if (userSign.includes(answer)) {
    selectedSymbol = answer;
  } else {
    console.log("This is not a valid sign!");
  }
}
console.log("You chose " + selectedSymbol);
/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

let number1 = parseInt(
  readlineSync.questionInt("Please enter your first value: ")
);

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

let number2 = parseInt(
  readlineSync.questionInt("Please enter your second value: ")
);

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */

const calculation = (selectedSymbol, number1, number2) => {
  if (selectedSymbol === "+") {
    return number1 + number2;
  } else if (selectedSymbol === "-") {
    return number1 - number2;
  } else if (selectedSymbol === "*") {
    return parseInt(number1 * number2);
  } else {
    return parseInt(number1 / number2);
  }
};

let result = calculation(selectedSymbol, number1, number2);

console.log("=====================");
console.log(`Here you go, the result is ${result}`);
