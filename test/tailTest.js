const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe('---- Test cases for tail.js----', () => {

  it ('should return [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it ('should return [] for [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it ('should return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});
