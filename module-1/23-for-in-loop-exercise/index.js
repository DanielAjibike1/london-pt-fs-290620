/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

function logProperties(object) {
  for (const key in object) {
    console.log(`Property name: ${key}`);
  }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object) {
  let allValuesArray = [];

  for (const key in object) {
    allValuesArray.push(object[key]);
  }
  return allValuesArray;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

function getAllValuesAsString(object) {
  let allValues = "";

  for (const key in object) {
    allValues += object[key] + " ";
  }
  return allValues.trim();
}
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */

function propertyValueString(object) {
  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
}
