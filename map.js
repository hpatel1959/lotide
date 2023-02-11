let map = function(arr, callback) {
  let newArr = [];
  for (const item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
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

const words = ["ground", "control", "to", "major", "tom"];

const result = map(words, x => x[0]);

// console.log(result);

assertArraysEqual(result, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result, ['g', 'c', 'h', 'n', 't']);
assertArraysEqual(result, [1, 2, 3]);

