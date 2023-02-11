const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result = '';
  const arrOfObjectItems = Object.keys(object);
  for (let item of arrOfObjectItems) {
    if (callback(object[item])) {
      result = item;
      break;
    }
  }
  return result;
};

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result1, 'noma');
assertEqual(result1, 'Blue Hill');
