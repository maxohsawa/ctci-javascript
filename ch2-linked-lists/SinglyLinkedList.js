export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = isNaN(value) ? value : new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      return current.next;
    }
  }

  getLength() {
    let current = this.head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }

  getKthToLast(k) {
    let lead = 0;
    let left;
    let right = this.head;
    while (right) {
      if (lead === k) {
        left = this.head;
        break;
      }
      lead++;
      right = right.next;
    }
    if (lead !== k) return;
    while (right.next) {
      left = left.next;
      right = right.next;
    }
    return left.value;
  }

  deleteMiddle(node) {
    const next = node.next;
    node.value = next.value;
    node.next = next.next;
    next.value = null;
    next.next = null;
  }

  getNodeByValue(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current;
  }

  partition(value) {
    const ltList = new List();
    const gteList = new List();
    let current = this.head;
    let ltListTail;
    // separate into
    while (current) {
      if (current.value < value) {
        ltListTail = ltList.add(current.value);
      } else {
        gteList.add(current.value);
      }
      current = current.next;
    }
    // anneal lists
    ltListTail.next = gteList.head;
    gteList.head = null;
    return ltList;
  }

  print() {
    const output = [];
    let current = this.head;
    while (current) {
      output.push(current.value);
      current = current.next;
    }
    console.log(output.join(' -> '));
  }
}
