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

const tail = function(array) {
  let tailArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= 1) {
      tailArray.push(array[i]);

    }
  }
  return tailArray;
};

console.log(tail([1, 2, 3, 4 , 5]));
console.log(tail([1]));
console.log(tail([]));


