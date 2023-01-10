// function stringRotation(input1, input2) {
//   if (input1.length !== input2.length) return false;

//   let cursor2 = 0;

//   for (let i = 0; i < input1.length; i++) {
//     if (input1[i] === input2[cursor2]) {
//       console.log('comparing', input1[i], input2[cursor2]);
//       let matching = 1;
//       let cursor1 = i + 1;
//       cursor2++;
//       while (matching < input1.length && input1[cursor1] === input2[cursor2]) {
//         console.log('comparing', input1[cursor1], input2[cursor2]);
//         cursor1 = getNextIndex(input1, cursor1);
//         cursor2++;
//         matching++;
//       }
//       if (matching === input1.length) return true;
//     }
//   }

//   return false;
// }

// function getNextIndex(input, index) {
//   if (++index >= input.length) return 0;
//   return index;
// }

// "ASSUME YOU HAVE A METHOD ISSUBSTRING"
function stringRotation(input1, input2) {
  if (input1.length !== input2.length) return false;
  const double = input1 + input1;
  return isSubstring(double, input2);
}

function isSubstring(long, short) {
  for (let i = 0; i < short.length; i++) {
    let si = 0;
    if (long[i] === short[si]) {
      console.log('comparing', long[i], short[si]);
      let matching = 1;
      let li = i + 1;
      si++;
      while (matching < short.length && long[li] === short[si]) {
        console.log('comparing', long[li], short[si]);
        li++;
        si++;
        matching++;
      }
      if (matching === short.length) return true;
    }
  }
}

const string1 = 'waterbottle';
const string2 = 'erbottlewat';
console.log(string1, string2, stringRotation(string1, string2));
