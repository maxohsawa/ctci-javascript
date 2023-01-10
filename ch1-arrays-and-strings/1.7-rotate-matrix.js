function rotateMatrix(matrix) {
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    const xStart = layer;
    const yStart = layer;
    const xEnd = matrix[0].length - 1 - layer;
    const yEnd = matrix.length - 1 - layer;

    for (let i = 0; i < matrix.length - layer * 2 - 1; i++) {
      const topValue = matrix[yStart][xStart + i];
      const rightValue = matrix[yStart + i][xEnd];
      const bottomValue = matrix[yEnd][xEnd - i];
      const leftValue = matrix[yEnd - i][xStart];

      // top <- left
      matrix[yStart][xStart + i] = leftValue;
      // right <- top
      matrix[yStart + i][xEnd] = topValue;
      // bottom <- right
      matrix[yEnd][xEnd - i] = rightValue;
      // left <- bottom
      matrix[yEnd - i][xStart] = bottomValue;
    }
  }
  return matrix;
}

function print(obj) {
  const [name, value] = Object.entries(obj)[0];
  console.log(name, value);
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
    [2, 2, 2],
    [3, 3, 3],
  ],
  [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
  ],
];

for (const test of tests) {
  printMatrix(test);

  const rotatedMatrix = rotateMatrix(test);

  printMatrix(rotatedMatrix);
}
