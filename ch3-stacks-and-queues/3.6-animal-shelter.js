class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  dequeue() {
    const value = this.head.value;
    this.head.value = null;
    const next = this.head.next;
    this.head.next = null;
    this.head = next;
    return value;
  }

  print() {
    let current = this.head;
    const output = [];
    while (current) {
      if (typeof current.value === 'object') {
        output.push(`${current.value.stamp}${current.value.name}`);
      } else {
        output.push(current.value);
      }
      current = current.next;
    }
    console.log(output.join('->'));
  }
}

// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.print();
// console.log(q.dequeue());
// q.print();

class ShelterQueue {
  constructor() {
    this.stamp = 1;
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue({ type, name }) {
    const animal = { stamp: this.stamp++, name };
    if (type === 'dog') {
      this.dogQueue.enqueue(animal);
    } else if (type === 'cat') {
      this.catQueue.enqueue(animal);
    }
  }

  dequeueAny() {
    const dogStamp = this.dogQueue.head.value.stamp;
    const catStamp = this.catQueue.head.value.stamp;
    if (dogStamp < catStamp) {
      return this.dogQueue.dequeue().name;
    } else {
      return this.catQueue.dequeue().name;
    }
  }

  dequeueType(type) {
    if (type === 'dog') {
      return this.dogQueue.dequeue().name;
    } else if (type === 'cat') {
      return this.catQueue.dequeue().name;
    }
  }

  print() {
    console.log('dogs:');
    this.dogQueue.print();
    console.log('--------------');
    console.log('cats:');
    this.catQueue.print();
    console.log('--------------');
  }
}

const shelterQueue = new ShelterQueue();
shelterQueue.enqueue({ type: 'dog', name: 'nico' });
shelterQueue.enqueue({ type: 'dog', name: 'spock' });
shelterQueue.enqueue({ type: 'cat', name: 'terra' });
shelterQueue.enqueue({ type: 'dog', name: 'spot' });
shelterQueue.enqueue({ type: 'cat', name: 'chaco' });
shelterQueue.print();
console.log('* dequeueAny:', shelterQueue.dequeueAny());
shelterQueue.print();
console.log('* dequeueDog:', shelterQueue.dequeueType('dog'));
shelterQueue.print();
console.log('* dequeueDog:', shelterQueue.dequeueType('dog'));
shelterQueue.print();
console.log('* dequeueCat:', shelterQueue.dequeueType('cat'));
shelterQueue.print();
