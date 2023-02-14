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

const without = function(source, itemsToRemove) {
  arrayWithRemovedWords = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      arrayWithRemovedWords.push(source[i])
    }
  }
  return arrayWithRemovedWords;
};

module.exports = without;
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [2, 4, 6]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays([1, 2, 3], [1, 2, "3"]));

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [2, 4, 6]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
// assertArraysEqual([3, 6, 9], [2, 4, 6]);

// without(["one", "two", "three"], ["two"]);
// without(["hello", "world", "lighthouse"],["lighthouse"]);
// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(arrayWithRemovedWords, ["hello", "world", "lighthouse"]);