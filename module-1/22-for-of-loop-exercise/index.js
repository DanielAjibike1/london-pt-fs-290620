/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

function getIntegersOnly(intArray) {
  let integerOnlyArray = [];
  for (const integers of intArray) {
    if (Number.isInteger(integers)) {
      integerOnlyArray.push(integers);
    }
  }
  return integerOnlyArray;
}

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */

function getEvenNumbers(evenArray) {
  let evenOnlyArray = [];
  for (const evenNumbers of evenArray) {
    if (evenNumbers % 2 === 0) {
      evenOnlyArray.push(evenNumbers);
    }
  }
  return evenOnlyArray;
}

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */

function getEvenNumbersFromMixedArray(mixedValues) {
  let justEven = [];
  for (const value of mixedValues) {
    if (Number.isInteger(value) && value % 2 === 0) {
      justEven.push(value);
    }
  }
  return justEven;
}

/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */

function getOddNumbers(oddNumbers) {
  let oddNumbersArray = [];
  for (const oddNums of oddNumbers) {
    if (oddNums % 2 === 1) {
      oddNumbersArray.push(oddNums);
    }
  }
  return oddNumbersArray;
}

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */

function evenOddTransform(evenToOddTransform) {
  let transformedArray = [];
  for (let transformVal of evenToOddTransform) {
    if (transformVal % 2 === 0) {
      transformVal -= 1;
      transformedArray.push(transformVal);
    } else {
      transformVal += 1;
      transformedArray.push(transformVal);
    }
  }
  return transformedArray;
}
