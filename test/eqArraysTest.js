const assertEqual = require('../index').assertEqual;
const eqArrays = require('../index').eqArrays;

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [2, 4, 6]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays([1, 2, 3], [1, 2, "3"]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL