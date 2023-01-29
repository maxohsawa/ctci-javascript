const array = [0, 3, 7, 11, 20, 23, 47, 99];

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  print() {
    console.log(this.value);
  }
}

class MinimalTree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    function recurse(array, leftMargin, rightMargin) {
      if (leftMargin > rightMargin) return null;
      const midIndex = Math.floor(
        Math.abs(leftMargin - rightMargin) / 2 + leftMargin
      );
      const node = new Node(array[midIndex]);
      node.left = recurse(array, leftMargin, midIndex - 1);
      node.right = recurse(array, midIndex + 1, rightMargin);
      return node;
    }

    const root = recurse(array, 0, array.length - 1);
    return root;
  }

  print() {
    let current = this.root;
    const queue = [current];
    while (queue.length) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      node.print();
    }
  }
}

const minimalTree = new MinimalTree(array);
minimalTree.print();
