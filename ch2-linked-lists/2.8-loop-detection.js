import { Node, List } from './SinglyLinkedList.js';

function detectLoop(list) {
  let slow = list.head;

  let fast = list.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = list.head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return {
        loop: true,
        beginning: fast,
      };
    }
  }

  return {
    loop: false,
  };
}

const list = new List();
list.add('A');
list.add('B');

const loopStart = new Node('C');
list.add(loopStart);

list.add('D');

const loopEnd = new Node('E');
list.add(loopEnd);

loopEnd.next = loopStart;

console.log('A B C D E C');
// test to see if hangs
// list.print();

console.log('test loop size 3', detectLoop(list));

const list2 = new List();
list2.add(1);
list2.add(2);
list2.add(3);
list2.add(4);
list2.add(5);
list2.print();
console.log(detectLoop(list2));

// test loop size 2
const list3 = new List();
list3.add('A');
list3.add('B');

const loopStart3 = new Node('C');
list3.add(loopStart3);

const loopEnd3 = new Node('D');
list3.add(loopEnd3);

loopEnd3.next = loopStart3;

console.log('A B C D C');
console.log('test loop size 2', detectLoop(list3));
