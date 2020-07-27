/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

let forEach = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */

let map = (array, callback) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i));
  }
  return newArray;
};

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */

let filter = (array, callback) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

let find = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return array[i];
    }
  }
};
/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

let findIndex = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return i;
    }
  }
};

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

let every = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    if (!callback(array[i], i)) {
      return false;
    }
  }
  return true;
};

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

let some = (array, callback) => {
  for (i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return true;
    }
  }
};

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

let reduce = (array, callback, initialValue = 0) => {
  let cumulativeValue = initialValue;
  for (i = 0; i < array.length; i++) {
    cumulativeValue = callback(cumulativeValue, array[i], i);
  }
  return cumulativeValue;
};
