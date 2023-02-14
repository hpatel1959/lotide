# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hpatel1959/lotide`

**Require it:**

`const _ = require('@hpatel1959/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns the first item in an array
* `tail()`: returns all items after the first item in an array
* `middle()`: returns the middle item of an array, or middle 2 elements if array contains an even amount of items
* `assertEqual()`: checks to see if 2 values are equal, and returns an assertion passed, or assertion failed message
* `eqArrays()`: checks to see if the elements in 2 arrays are equal
* `assertArraysEqual()`: checks to see if the elements in 2 arrays are equal, and returns an assertion passed, or assertion failed message
* `countLetters()`: returns an object with keys named as the letters in a given, with the value of each key representing the number of occurences in that given string
* `countOnly()`: takes in 2 arrays, and returns a new array containing only items that exsist in both arrays
* `eqObjects()`: takes in 2 objects and checks if 2 objects are equal, then returns either true or false
* `findKey()`: takes in an object of objects, and a callback function, and returns the key value for the callback function
* `findKeybyValue()`: takes in an object, and a value, and returns the key whos value that matches 'value'
* `letterPositions()`: returns an object containing keys named each letter that shows up in the string, with the value of the key being an array of all the index positions of that letter in string
* `loopyLighthouse()`: takes in a range of numbers, multples and words, and returns the numbers as well as numbers replaced by words depending on the multiple
* `map()`: takes an array and a callback, and returns an new array containing the elements that pass through the callback
* `pigLatin()`: takes in a string, and returns the string translated to pig latin
* reverse(): takes in an array, and returns a new array with the elements in reverse order
* `takeUntil()`: takes in an array, and a callback, then returns new array with items from array before the callback for item was returned truthy
* `without()`: takes in  2 arrays, one with a list of items, and another with a list you want to remove from array1. returns new array with removed items