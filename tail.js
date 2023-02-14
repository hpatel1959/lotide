const tail = function(array) {
  let tailArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= 1) {
      tailArray.push(array[i]);

    }
  }
  return tailArray;
};

module.exports = tail;




