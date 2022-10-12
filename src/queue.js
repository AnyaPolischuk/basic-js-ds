const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue { 
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
      return this.head;
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.head) { //если первый элемент существует
      this.tail.next = node; //вставить узел после хвоста
      this.tail = node; //теперь вставленный узел это хвост
    } else {
      this.head = node; //созданный узел-голова
      this.tail = node; //а также хвост
    }
    this.length++;
  }

  dequeue() {
    //сохраним ссылку на голову, которую нужно удалить
    let curHead = this.head;
    this.head = this.head.next; //перемещаем ссылку на след элемент
    this.length--;

    return curHead.value;
  }
}

module.exports = {
  Queue
};
