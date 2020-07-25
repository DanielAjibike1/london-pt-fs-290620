// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */

const convertToPositive = (numberArray) => {
  return numberArray.map((number) => {
    if (number < 0) {
      number *= -1;
    }
    return number;
  });
};

/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */

const getAllNames = (users) => {
  return users.map((user) => {
    return user.name;
  });
};

/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */

const greetAll = (names) => {
  return names.map((name) => {
    return `Hi, ${name}!`;
  });
};

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

const multiplyAllNumbers = (multipliedNumsArray) => {
  return multipliedNumsArray.map((nums) => {
    if (Number.isInteger(nums)) {
      nums *= 5;
    }
    return nums;
  });
};
