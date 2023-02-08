const pigLatin = function(array) {
  let convertedText = '';
  for (let i = 2; i < array.length; i++) {
    for (let j = 1; j < array[i].length; j++) {
      convertedText += array[i][j];
    }
    convertedText += array[i][0] + 'ay' + ' ';
  }
  return convertedText;
};

console.log(pigLatin(process.argv));