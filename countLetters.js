const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

assertEqual('Hello', 'Hello');
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, 2);

const countLetters = function(string) {
  let lowercaseStr = string.toLowerCase();
  let numbersObj = {};
  for (let letter of lowercaseStr) {
    if (!numbersObj[letter] && letter !== ' ') {
      numbersObj[letter] = 1;
    }  else {
      if (letter !== ' ') {
        numbersObj[letter]++;
      }
    }
  }
  return numbersObj;
};

console.log(countLetters('Hi my name is Harsh'));