const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
];

function findRoute(matrix, a, b) {
  const queue = [];
  queue.push(a);
  const visited = new Set();
  while (queue.length) {
    const node = queue.shift();
    visited.add(node);
    if (node === b) return true;
    const edges = matrix[node]
      .map((item, index) => (item === 1 ? index : -1))
      .filter((item) => item >= 0 && !visited.has(item));
    queue.push(...edges);
  }
  return false;
}

console.log('are 0 and 0 connected', findRoute(matrix, 0, 0));
console.log('are 0 and 1 connected', findRoute(matrix, 0, 1));
console.log('are 0 and 2 connected', findRoute(matrix, 0, 2));
console.log('are 0 and 3 connected', findRoute(matrix, 0, 3));
console.log('are 0 and 4 connected', findRoute(matrix, 0, 4));
console.log('are 1 and 3 connected', findRoute(matrix, 1, 3));
console.log('are 2 and 0 connected', findRoute(matrix, 2, 0));
