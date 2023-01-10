function zeroMatrix(matrix) {
  const rowsToZero = new Set();
  const colsToZero = new Set();

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        rowsToZero.add(y);
        colsToZero.add(x);
      }
    }
  }

  for (const y of rowsToZero) {
    for (let x = 0; x < matrix[0].length; x++) {
      matrix[y][x] = 0;
    }
  }
  for (const x of colsToZero) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][x] = 0;
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

const tests = [
  [
    [1, 1, 1],
    [2, 2, 0],
    [3, 3, 3],
  ],
  [
    [1, 1, 1, 5, 0],
    [2, 2, 0, 6, 9],
    [3, 3, 3, 1, 7],
  ],
  [
    [1, 1, 1, 0, 1],
    [2, 2, 0, 1, 1],
    [3, 3, 3, 1, 0],
  ],
  [[1, 0]],
];

for (const test of tests) {
  printMatrix(test);
  const zeroedMatrix = zeroMatrix(test);
  printMatrix(zeroedMatrix);
}
