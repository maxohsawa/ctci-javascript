import { Node, List } from './SinglyLinkedList.js';

function sumLists(list1, list2) {
  let cursor1 = list1.head;
  let cursor2 = list2.head;
  const output = new List();
  let carry = 0;
  while (cursor1 || cursor2 || carry) {
    let value1 = cursor1 ? cursor1.value : 0;
    let value2 = cursor2 ? cursor2.value : 0;

    let sum = value1 + value2 + carry;
    carry = sum > 9 ? 1 : 0;
    sum %= 10;
    output.add(sum);
    if (cursor1) cursor1 = cursor1.next;
    if (cursor2) cursor2 = cursor2.next;
  }
  return output;
}

const list1 = new List();
list1.add(8);
list1.add(1);
list1.add(5);
list1.add(2);
list1.print();

const list2 = new List();
list2.add(7);
list2.add(1);
list2.add(9);
list2.add(9);
list2.print();

const sum = sumLists(list1, list2);
sum.print();
