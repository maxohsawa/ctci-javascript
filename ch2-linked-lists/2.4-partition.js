import { Node, List } from './SinglyLinkedList.js';

const list = new List();
list.add('one');
list.add('two');
list.add('three');
list.add('four');
list.add('five');
list.add('six');
list.print();
const partitionedList = list.partition('o');
partitionedList.print();
