function zeroMatrix(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        // up
        for (let upY = y - 1; upY >= 0; y--) {
          matrix[upY][x] = 0;
        }
        // right
        for (let rightX = x + 1; rightX < matrix[0].length; x++) {
          matrix[y][rightX] = 0;
        }
        // down
        for (let downY = y + 1; downY < matrix.length; y++) {
          matrix[(downY, x)] = 0;
        }
        // left
        for (let leftX = x - 1; x >= 0; x--) {
          matrix[(y, leftX)] = 0;
        }
      }
    }
  }

  return matrix;
}

function printMatrix(input) {
  for (const row of input) {
    let line = '';
    for (const cell of row) {
      line += cell + ' ';
    }
    console.log(line);
  }
  console.log('-------------------');
}

const test = [
  [1, 1, 1],
  [2, 2, 0],
  [3, 3, 3],
];

printMatrix(test);
const zeroedMatrix = zeroMatrix(test);
printMatrix(zeroedMatrix);
