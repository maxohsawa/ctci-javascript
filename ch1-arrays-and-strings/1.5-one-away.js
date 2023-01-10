function oneAway(input1, input2) {
  if (input1 === input2) return true;
  if (Math.abs(input1.length - input2.length) > 1) return false;

  // check for replacement
  if (input1.length === input2.length) {
    let diffCount = 0;
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== input2[i] && ++diffCount > 1) {
        return false;
      }
    }
    return true;
  }

  // check insertion / removal
  let short;
  let long;
  if (input1.length - input2.length > 0) {
    long = input1;
    short = input2;
  } else {
    long = input2;
    short = input1;
  }

  let diffCount = 0;
  let k = 0;
  for (let i = 0; i < short.length; i++) {
    if (short[i] !== long[i]) {
      if (++diffCount > 1) return false;
      k++;
    }
    k++;
  }
  return true;
}

[
  ['abcd', 'abcd'],
  ['abb', 'addc'],
  ['abc', 'abbcd'],
].forEach(([string1, string2]) =>
  console.log(string1, string2, oneAway(string1, string2))
);
