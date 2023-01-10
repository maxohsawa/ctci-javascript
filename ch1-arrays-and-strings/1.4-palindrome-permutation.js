function palindromePermutation(input) {
  const oddCharacters = new Set();

  for (const char of input) {
    if (oddCharacters.has(char)) {
      oddCharacters.delete(char);
    } else {
      oddCharacters.add(char);
    }
  }

  return oddCharacters.size === 1;
}

console.log('android', palindromePermutation('android'));
console.log('racecar', palindromePermutation('racecar'));
console.log('rraacceeccaal', palindromePermutation('rraacceeccaal'));
