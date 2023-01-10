function zeroMatrix(matrix) {
  const coordsToZero = new Set();

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === 0) {
        zeroCardinal(y, x, matrix, coordsToZero);
      }
    }
  }

  for (const [y, x] of coordsToZero) {
    matrix[y][x] = 0;
  }

  return matrix;
}

function zeroCardinal(yEpicenter, xEpicenter, matrix, coordsToZero) {
  let y = yEpicenter;
  let x = xEpicenter;
  // north
  while (--y >= 0) {
    coordsToZero.add([y, x]);
  }
  y = yEpicenter;

  // east
  while (++x < matrix[0].length) {
    coordsToZero.add([y, x]);
  }
  x = xEpicenter;

  // south
  while (++y < matrix.length) {
    coordsToZero.add([y, x]);
  }
  y = yEpicenter;

  // west
  while (--x >= 0) {
    coordsToZero.add([y, x]);
  }
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
