import { Node, List } from './SinglyLinkedList.js';

const list = new List();
list.add('one');
list.add('two');
list.add('three');
list.add('four');
list.add('five');
list.add('six');
list.print();
const node = list.getNodeByValue('four');
list.deleteMiddle(node);
list.print();
