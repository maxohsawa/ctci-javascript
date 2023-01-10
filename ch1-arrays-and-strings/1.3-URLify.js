// function URLify(input) {
//   let output = '';
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === ' ') {
//       input = input.slice(0, i) + '%20' + input.slice(i + 1);
//     }
//   }

//   return input;
// }

function URLify(input) {
  return input.split(' ').join('%20');
}

console.log('taco bell', URLify('taco bell'));
