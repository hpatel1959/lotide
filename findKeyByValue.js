const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

// ------------ NOT USING Object.keys()-------------
// const findKeybyValue = function(object, value) {
//   for (let key in object) {
//     if (object[key] && object[key] === value) {
//       return key;
//     }
//     if (!object[key]) {
//       return undefined;
//     }
//   }
// };

// ------------- USING Object.keys() -------------
const findKeybyValue = function(object, value) {
  const objectKeysArray = Object.keys(object);
  for (i in objectKeysArray) {
    if (object[objectKeysArray[i]] && object[objectKeysArray[i]] === value) {
      return objectKeysArray[i];
    }
    if (!object[objectKeysArray[i]]) {
      return undefined;
    }
  }
};

module.exports = findKeybyValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(findKeybyValue(bestTVShowsByGenre, "The Expanse"));

// assertEqual(findKeybyValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeybyValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeybyValue(bestTVShowsByGenre, "That 70's Show", "undefined"));
// assertEqual(findKeybyValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci-fi");
