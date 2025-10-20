const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.convertFunc(this.head);
  }
  convertFunc(curNode) {
    if (!curNode) return null;
    return {
      value: curNode.value,
      next: this.convertFunc(curNode.next),
    };
  }
  enqueue(value) {
    const createdNode = new ListNode(value);
    if (!this.head) {
      this.head = createdNode;
      this.tail = createdNode;
    } else {
      this.tail.next = createdNode;
      this.tail = createdNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.tail = null;
    }
    const removedItem = this.head.value;
    this.head = this.head.next;
    this.length--;
    return removedItem;
  }
}

module.exports = {
  Queue,
};
