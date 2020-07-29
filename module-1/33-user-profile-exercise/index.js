// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require("readline-sync");
const chalk = require("chalk");

const user = {};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */

let firstName = readlineSync.question("What's your first name? ");
user.firstName = firstName;
console.log(`Hello ${user.firstName}`);

/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */
let lastName = readlineSync.question("What's your last name? ");
user.lastName = lastName;
console.log(`Hello ${user.firstName} ${user.lastName}!`);

/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */

let age = readlineSync.questionInt("What's your age? ");
user.age = age;
console.log(`Didn't know you were ${user.age}!`);

/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */

let email = readlineSync.questionEMail("What's your email address? ");
user.email = email;
console.log(`Email Address: ${user.email}`);

/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */

console.log(
  `Here what we have, your full name is ${chalk.bgRed.yellow(
    user.firstName
  )} ${chalk.blue(user.lastName)}. 
    You are ${chalk.greenBright(
      user.age
    )} and if we need to contact with you we can send 
    a letter to ${chalk.bgMagentaBright.cyan(user.email)} `
);
