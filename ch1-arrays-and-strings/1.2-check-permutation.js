function checkPermutation(input1, input2) {
  const seen = {};

  for (const char of input1) {
    if (!seen[char]) {
      seen[char] = 0;
    }
    seen[char]++;
  }

  for (const char of input2) {
    if (!seen[char]) return false;
    if (seen[char] < 1) return false;
    seen[char]--;
  }

  return true;
}

console.log('zebra', 'braze', checkPermutation('zebra', 'braze'));
console.log('lego', 'book', checkPermutation('lego', 'book'));
