const takeUntil = function(arr, callback) {
  let newArr = []; 
  for (const item of arr) {
    if (!callback(item)) {
      newArr.push(item);
    }
    if (callback(item)) {
      break;
    }
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

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results1, [1, 2, 5, -1, 7, 2]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
// assertArraysEqual(results2, ["to", "Hollywood", ",", "I've", "been"]);