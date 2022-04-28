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
        this.length = 0;
    }

    enqueue(value) {
        if (this.length === 0) {
            this.head = new Node(value);
        } else {
            let current = this.head;

            // move to the last node
            while (current.next) {
                current = current.next;
            }

            current.next = new Node(value);
        }

        this.length++;
    }


    dequeue() {
        // throw new NotImplementedError('Not implemented');
        let start = this.head
        if (!start) return 'empty'
        this.head = start.next
        return start.value
    }

    getUnderlyingList() {
        // throw new NotImplementedError('Not implemented');
        if (!this.head) { return 'empty' }
        return ({ "value": this.head.value, "next": this.head.next })
    }
}


module.exports = {
    Queue
};