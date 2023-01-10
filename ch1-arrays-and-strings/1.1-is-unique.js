function isUnique(input) {
  const characterSet = new Set();

  for (const char of input) {
    if (characterSet.has(char)) return false;
    characterSet.add(char);
  }

  return true;
}

console.log('racecar', isUnique('racecar'));
console.log('yogurt', isUnique('yogurt'));
