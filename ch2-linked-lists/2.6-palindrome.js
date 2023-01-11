import { Node, List } from './SinglyLinkedList.js';

function isPalindrome(list) {
  const stack = [];
  let slow = list.head;
  let fast = list.head;
  while (fast && fast.next) {
    stack.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }
  let current = fast ? slow.next : slow;

  console.log(current);
  console.log(stack);
  const listSize = stack.length;

  for (let i = 0; i < listSize; i++) {
    if (current.value !== stack.pop()) return false;
    current = current.next;
  }
  return true;
}

const list = new List();
list.add('r');
list.add('a');
list.add('c');
// list.add('e');
list.add('e');
list.add('c');
list.add('a');
list.add('r');
list.print();
console.log(isPalindrome(list));
list.add('WOW');
list.print();
console.log(isPalindrome(list));
