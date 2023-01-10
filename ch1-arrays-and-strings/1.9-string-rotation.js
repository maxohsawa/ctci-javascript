function stringRotation(input1, input2) {
  if (input1.length !== input2.length) return false;

  let cursor2 = 0;

  for (let i = 0; i < input1.length; i++) {
    if (input1[i] === input2[cursor2]) {
      console.log('comparing', input1[i], input2[cursor2]);
      let matching = 1;
      let cursor1 = i + 1;
      cursor2++;
      while (matching < input1.length && input1[cursor1] === input2[cursor2]) {
        console.log('comparing', input1[cursor1], input2[cursor2]);
        cursor1 = getNextIndex(input1, cursor1);
        cursor2++;
        matching++;
      }
      if (matching === input1.length) return true;
    }
  }

  return false;
}

function getNextIndex(input, index) {
  if (++index >= input.length) return 0;
  return index;
}

const string1 = 'waterbottle';
const string2 = 'erbottlewat';
console.log(string1, string2, stringRotation(string1, string2));
