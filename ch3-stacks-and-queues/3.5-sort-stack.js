class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    return this.stack.pop();
  }

  print() {
    console.log(this.stack);
  }

  sort() {
    const sortedStack = new Stack();
    while (this.stack.length) {
      const element = this.stack.pop();
      if (sortedStack.stack.length) {
        let moveCount = 0;
        while (sortedStack.peek() < element) {
          this.stack.push(sortedStack.pop());
          moveCount++;
        }
        sortedStack.push(element);
        for (let i = moveCount; i >= 0; i--) {
          sortedStack.push(stack.pop());
        }
      } else {
        sortedStack.push(element);
      }
    }
    this.stack = sortedStack;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(15);
stack.push(7);
stack.print();
stack.sort();
stack.print();
