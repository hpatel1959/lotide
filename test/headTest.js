const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

describe('---- Tests cases for head.js', () => {

  it ('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it ("should return Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it ('should return undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });

  it ('should return 1 for [1]', () => {
    assert.strictEqual(head([1]), 1);
  });

  it ('should return 1 for [1] causing assertion will fail because 1 !== 3', () => {
    assert.notEqual(head([1]), 3);
  });

});