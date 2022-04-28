const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }

    toString() {
        return JSON.stringify(this);
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }



    root() {
        return this.root;
    }
    add(data) {
        if (this.root === null) {
            this.root = new Node(data);
        } else {
            let current = this.root;
            while (true) {
                if (data > current.data) {
                    if (current.right === null) {
                        current.right = new Node(data);
                        break;
                    } else {
                        current = current.right;
                    }
                } else if (data < current.data) {
                    if (current.left === null) {
                        current.left = new Node(data);
                        break;
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }

    has(data) {
        return !!this.find(data);
    }

    find(data) {
        let traverse = (node) => {
            if (node == null || node.data === data) {
                return node;
            } else if (data < node.data) {
                traverse(node.left);
            } else {
                traverse(node.right);
            }
        };
        return traverse(this.root);
    }

    remove(data, node = this.root) {
        if (!node) {
            return null;
        }

        if (data < node.data) {
            node.left = this.remove(data, node.left);
        } else if (data > node.data) {
            node.right = this.remove(data, node.right);
        } else {
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            } else {
                node.data = this.min(node.right);
                node.right = this.remove(node.data, node.right);
            }
        }
        return node;
    }

    min(node = this.root) {
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max(node = this.root) {
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }

}

module.exports = {
    BinarySearchTree
};