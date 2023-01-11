import { Node, List } from './DoublyLinkedList.js';

const list = new List();
list.add(new Node(1));
list.add(new Node(2));
list.add(new Node(3));
list.add(new Node(2));
list.add(new Node(4));
list.print();
list.removeDupes();
list.print();
