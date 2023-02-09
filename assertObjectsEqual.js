const eqObjects = function(object1, object2) {
  let object1KeysArray = Object.keys(object1);
  let object2KeysArray = Object.keys(object2);
  if (object1KeysArray.length === object2KeysArray.length) {
    for (let key in object1) {
      if (typeof object1[key] === 'object') {
        if (eqArrays(object1[key], object2[key]) === 'true') {
          return true;
        }
      } else {
        if (object1[key] === object2[key]) {
          return true;
        }
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  if (object1KeysArray.length !== object2KeysArray.length) {
    return false;
  }
};

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  if (!eqObjects(object1, object2)) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} != ${inspect(object2)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};

const shirtObject = { color: "red", side: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};
const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};

// console.log(eqObjects(shirtObject, anotherShirtObject));
// console.log(eqObjects(shirtObject, shirtObject));
// console.log(eqObjects(shirtObject, longSleeveShirtObject));

// assertEqual(eqObjects(shirtObject, shirtObject), true); // pass
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // fail

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(shirtObject, longSleeveShirtObject);