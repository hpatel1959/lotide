const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
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

module.exports = eqObjects;

// const shirtObject = { color: "red", side: "medium"};
// const anotherShirtObject = { size: "medium", color: "red"};
// const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};

// console.log(eqObjects(shirtObject, anotherShirtObject));
// console.log(eqObjects(shirtObject, shirtObject));
// console.log(eqObjects(shirtObject, longSleeveShirtObject));

// assertEqual(eqObjects(shirtObject, shirtObject), true); // pass
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true); // fail

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject));

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject));

// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);



