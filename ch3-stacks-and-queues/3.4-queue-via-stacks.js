class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  print() {
    console.log(this.stack1);
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  peek() {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    const value = this.stack2[this.stack2.length - 1];
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
    return value;
  }

  dequeue() {
    if (this.stack1.length === 1) return this.stack1.pop();
    while (this.stack1.length > 1) {
      this.stack2.push(this.stack1.pop());
    }
    const value = this.stack1.pop();
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
    return value;
  }
}

const stackQ = new MyQueue();
stackQ.enqueue(1);
stackQ.enqueue(2);
stackQ.enqueue(3);
stackQ.print();
console.log(stackQ.peek());
stackQ.enqueue(4);
stackQ.print();
console.log(stackQ.dequeue());
stackQ.print();
