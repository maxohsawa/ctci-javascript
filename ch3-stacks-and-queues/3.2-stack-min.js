class MinStack {
  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }

  push(value) {
    const min = this.stack.length ? Math.min(this.peek().min, value) : value;
    this.stack.push({
      value,
      min,
    });
  }

  pop() {
    return this.stack.pop().value;
  }

  min() {
    return this.peek().min;
  }
}

const test = new MinStack();

test.push(10);
console.log(test);
test.push(2);
console.log(test);
test.push(8);
console.log(test);
test.push(-1);
console.log(test);

console.log(test.peek());
console.log(test.min());
const value = test.pop();
console.log(value);
console.log(test.peek());
console.log(test.min());
