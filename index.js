const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeybyValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const loopyLighthouse = require('./loopyLighthouseRefactoring');
const map = require('./map');
const pigLatin = require('./pigLatin');
const reverse = require('./reverse');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeybyValue,
  letterPositions,
  loopyLighthouse,
  map,
  pigLatin,
  reverse,
  takeUntil,
  without
};

console.log(module.exports);