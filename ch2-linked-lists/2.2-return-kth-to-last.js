import { Node, List } from './SinglyLinkedList.js';

const list = new List();
list.add('one');
list.add('two');
list.add('three');
list.add('four');
list.add('five');
list.add('six');
list.print();
console.log(list.getKthToLast(3));
