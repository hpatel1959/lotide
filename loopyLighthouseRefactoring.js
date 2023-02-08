// const loopyLighthouse = function(range, multiples, words) {
//   let x = 100

//   for (let x = 100; x <= 200; x++) {
//     if (x % 3 === 0 && x % 4 === 0) {
//       console.log("LoopyLighthouse");
//     } else if (x % 3 === 0) {
//       console.log("Loopy");
//     } else if (x % 4 === 0) {
//       console.log("Lighthouse");
//     }
//     else {
//       console.log(x);
//     }
//   };

// };

const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    }
    if (i % multiples[0] === 0) {
      console.log(words[0]);
    }
    if (i % multiples[1] === 0) {
      console.log(words[1]);
    }
    else {
      console.log(i);
    }
  }
};

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));