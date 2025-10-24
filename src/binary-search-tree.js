const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  #root = null;
  root() {
    return this.#root;
  }

  add(data) {
    let curNode = this.#root;
    const createdNode = new Node(data);
    if (!this.#root) return (this.#root = createdNode);
    else {
      while (true) {
        if (curNode.data === data) return undefined;
        if (curNode.data < data) {
          if (!curNode.right) {
            curNode.right = createdNode;
            return this;
          }
          curNode = curNode.right;
        } else if (curNode.data > data) {
          if (!curNode.left) {
            curNode.left = createdNode;
            return this;
          }
          curNode = curNode.left;
        }
      }
    }
  }

  find(data) {
    let curNode = this.#root;
    if (!this.#root) return null;
    while (true) {
      if (curNode.data === data) return curNode;
      if (curNode.data < data) {
        if (!curNode.right) {
          return null;
        }
        curNode = curNode.right;
      } else if (curNode.data > data) {
        if (!curNode.left) {
          return null;
        }
        curNode = curNode.left;
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    if (!this.has(data)) return null;
    let curNode = this.#root;
    let previous;
    while (true) {
      if (curNode.data === data) {
        break;
      }
      if (curNode.data < data) {
        previous = curNode;
        curNode = curNode.right;
      } else if (curNode.data > data) {
        previous = curNode;
        curNode = curNode.left;
      }
    }
    const leftPart = curNode.left;
    curNode = curNode.right;
    if (curNode.data > previous.data) {
      previous.right = curNode;
    } else {
      previous.left = curNode;
    }
    while (curNode.left) {
      curNode = curNode.left;
    }
    curNode.left = leftPart;
    return this;
  }

  min() {
    if (!this.#root) return null;
    let curNode = this.#root;

    while (true) {
      if (!curNode.left) return curNode.data;
      curNode = curNode.left;
    }
  }

  max() {
    if (!this.#root) return null;
    let curNode = this.#root;
    while (true) {
      if (!curNode.right) return curNode.data;
      curNode = curNode.right;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
