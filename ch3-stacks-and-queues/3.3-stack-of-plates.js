class SetOfStacks {
  constructor(limit) {
    this.limit = limit;
    this.set = [];
    this.set.push([]);
  }

  peekTopStack() {
    return this.set[this.set.length - 1];
  }

  peekValue() {
    const topStack = this.peekTopStack();
    return topStack[topStack.length - 1];
  }

  preparePush() {
    const topStack = this.peekTopStack();
    if (topStack.length >= this.limit) {
      this.set.push([]);
    }
  }

  push(value) {
    this.preparePush();
    this.peekTopStack().push(value);
  }

  popCleanUp() {
    if (this.peekTopStack().length === 0) {
      this.set.pop();
    }
  }

  pop() {
    if (this.set.length && this.peekTopStack().length) {
      const value = this.peekTopStack().pop();
      this.popCleanUp();
      return value;
    }
  }

  print() {
    if (!this.set.length) {
      console.log('no stacks to print');
    } else {
      for (let i = this.set.length - 1; i >= 0; i--) {
        console.log(this.set[i]);
      }
      console.log('-------------------');
    }
  }
}

const plates = new SetOfStacks(3);
plates.push(1);
plates.push(1);
plates.push(1);
plates.print();
plates.push(1);
plates.push(1);
plates.push(1);
plates.print();
plates.push(2);
plates.push(2);
plates.print();
console.log(plates.pop());
plates.print();
console.log(plates.pop());
plates.print();
console.log(plates.pop());
plates.print();
