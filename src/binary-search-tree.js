const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.root = null;
    }

    root() {
        return this.root;
    }
    add(data) {}
    insert(data) {
        let newNode = new BinarySearchTree(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }


    has(data) {
        if (data === null) { return false }
        return true;
    }

    find(data) {
        if (node === null) { return null; } else if (data < node.data) { return this.search(node.left, data) } else if (data > node.data) { return this.search(node.right, data) } else { return node }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {
        if (node === null) { return null } else if (key < node.data) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }
        let aux = this.findMinNode(node.right);
        node.data = aux.data;
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }

    min() {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    max() {
        if (node.right === null)
            return node;
        else
            return this.findMaxNode(node.right);
    }


}

module.exports = {
    BinarySearchTree
};