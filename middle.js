const middle = function(array) {
  let middleElements = [];
  let middleIndexOdd = Math.floor((array.length - 1) / 2);
  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return middleElements;
    }
    if (array.length % 2 === 0 && i === middleIndexOdd) {
      middleElements.push(array[middleIndexOdd]);
      middleElements.push(array[middleIndexOdd + 1]);
    }
    if (array.length % 2 !== 0 && i === middleIndexOdd) {
      middleElements.push(array[middleIndexOdd]);
    }
  }
  return middleElements;
};

module.exports = middle;