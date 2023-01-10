class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  toString() {
    return this.value;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
  }

  removeValue(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let next = current.next;
        this.removeNode(current);
        current = next;
      } else {
        current = current.next;
      }
    }
  }

  removeNode(node) {
    node.prev ? (node.prev.next = node.next) : (this.head = node.next);
    node.next ? (node.next.prev = node.prev) : (this.tail = node.prev);
    node.value = null;
    node.next = null;
    node.prev = null;
  }

  removeDupes() {
    const seen = new Set();
    let current = this.head;
    while (current) {
      if (!seen.has(current.value)) {
        seen.add(current.value);
        current = current.next;
      } else {
        const next = current.next;
        this.removeNode(current);
        current = next;
      }
    }
  }

  print() {
    const output = [];
    let current = this.head;
    while (current) {
      output.push(current.value);
      current = current.next;
    }
    console.log(output.join(' <-> '));
  }
}

const list = new List();
list.add(new Node(1));
list.add(new Node(2));
list.add(new Node(3));
list.add(new Node(2));
list.add(new Node(4));
list.print();
list.removeDupes();
list.print();
list.add(new Node(5));
list.print();
list.removeValue(4);
list.print();
