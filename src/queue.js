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
class ListNode {
    constructor(next, value) {
        this.next = next
        this.value = value
    }
}

class Queue {
    constructor() {
        this.queue = null
    }

    enqueue(value) {
        // throw new NotImplementedError('Not implemented');
        let start = this.queue
        let newN = new ListNode(null, value)
        if (!start) {
            this.queue = newN
        } else {
            let travNode = start
            while (travNode.next) {
                travNode = travNode.next
            }
            travNode.next = newN
        }
    }

    dequeue() {
        // throw new NotImplementedError('Not implemented');
        let start = this.queue
        if (!start) return 'empty'
        this.queue = start.next
        return start.value
    }

    getUnderlyingList() {
        // throw new NotImplementedError('Not implemented');
        if (!this.queue) { return 'empty' }
        return ({ "value": this.queue.value, "next": this.queue.next })
    }
}


module.exports = {
    Queue
};