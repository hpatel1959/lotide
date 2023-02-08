const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } 
  else {
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let result = "";
  if (array1.length !== array2.length) {
    result = false;
    return result;
  }
  if (array1.length === array2.length) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
        return result;
      }
    } 
  }
  result = true;
  return result;
};

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌❌❌ Assertion Failed: ${array1} != ${array2}`);
  }
  else {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

const middle = function(array) {
  let middleElements = [];
  let middleIndexOdd = Math.floor((array.length - 1) / 2);
  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return middleElements;
    }
    if (array.length % 2 === 0 && i === middleIndexOdd) {
      middleElements.push(array[middleIndexOdd]);
      middleElements.push(array[middleIndexOdd + 1]);
    }
    if (array.length % 2 !== 0 && i === middleIndexOdd) {
      middleElements.push(array[middleIndexOdd]);
    }
  }
  return middleElements;
};


// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [2, 4, 6]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays([1, 2, 3], [1, 2, "3"]));

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

middle([1, 2]);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5, 6]);
middle(['one', 'two', 'three']);
middle(['one', 'two', 'three', 'four', 'five', 'six']);

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]);

