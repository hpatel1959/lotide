const reverse = function(array) {
  let reversedString = '';
  for (let i = 2; i < array.length; i++) {
    for (let j = array[i].length - 1; j >= 0; j--) {
      reversedString += array[i][j];
    }
    reversedString += "/n";
  }
  return reversedString;
};

console.log(reverse(process.argv));