const letterPositions = function(string) {
  lowerCaseStr = string.toLowerCase();
  result = {};
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (!result[lowerCaseStr[i]] && lowerCaseStr[i] !== ' ') {
      result[lowerCaseStr[i]] = [i];
    } else {
      if (lowerCaseStr[i] !== ' ') {
        result[lowerCaseStr[i]].push(i);
      }
    }
  }
  return result;
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

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("Harsh Patel is happy").h, [0, 4, 15]);
// assertArraysEqual(letterPositions("testing a fail").t, [1, 4]);

