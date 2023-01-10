function stringCompression(input) {
  let count = 1;
  let current = input[0];
  let i = 0;
  let output = [];

  while (i < input.length) {
    let j = 1;
    while (input[j + i] === current) {
      count++;
      j++;
    }

    output.push(current, count);

    i += j;

    if (i < input.length) {
      count = 1;
      current = input[i];
    }
  }
  return output.join('');
}

console.log('aaabbcdddd', stringCompression('aaabbcdddd'));
