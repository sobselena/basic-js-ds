const { ListNode } = require('../extensions/list-node');
const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let curNode = this.head;
    const createdNode = new ListNode(value);
    if (!this.head) {
      this.head = createdNode;
      this.tail = createdNode;
    } else {
      createdNode.next = this.head;
      this.head = createdNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.tail = null;
    }
    const removedNode = this.head.value;
    this.head = this.head.next;
    this.length--;
    return removedNode;
  }

  peek() {
    return this.head?.value;
  }
}

module.exports = {
  Stack,
};
