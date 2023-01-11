import { Node, List } from './SinglyLinkedList.js';

function detectIntersection(list1, list2) {
  const length1 = list1.getLength();
  const length2 = list2.getLength();
  let cursor1 = list1.head;
  let cursor2 = list2.head;
  if (length1 === length2) {
    while (cursor1) {
      if (cursor1 === cursor2) return true;
      cursor1 = cursor1.next;
      cursor2 = cursor2.next;
    }
    return false;
  } else {
    while (cursor1) cursor1 = cursor1.next;
    while (cursor2) cursor2 = cursor2.next;
    return cursor1 === cursor2;
  }
}

const list1 = new List();
list1.add(3);
list1.add(1);
list1.add(5);
list1.add(9);
const tail = new Node(7);
list1.add(tail);
list1.add(2);
list1.add(1);

const list2 = new List();
list2.add(5);
list2.add(9);
list2.add(tail);

const list3 = new List();
list3.add(1);
list3.add(2);
list3.add(5);
list3.add(9);
list3.add(tail);

// test that nodes are evaluated by reference not by value
const list4 = new List();
list4.add(1);
list4.add(2);
list4.add(5);
list4.add(9);
list4.add(7);
list4.add(2);
list4.add(1);

list1.print();
list2.print();
console.log(detectIntersection(list1, list2));

list1.print();
list3.print();
console.log(detectIntersection(list1, list3));

list1.print();
list4.print();
console.log(detectIntersection(list1, list4));
