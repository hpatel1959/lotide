const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// middle([1, 2]);
// middle([1, 2, 3]);
// middle([1, 2, 3, 4, 5, 6]);
// middle(['one', 'two', 'three']);
// middle(['one', 'two', 'three', 'four', 'five', 'six']);

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]);