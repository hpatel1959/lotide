const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1, 2, 3, 4 , 5]).length, 4);
assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);