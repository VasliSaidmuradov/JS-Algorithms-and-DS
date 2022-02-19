// FIFO

// queue with Array

// const queue = []
// queue.push('value')
// queue.shift()


// queue with Linked List

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor (val) {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue (val) {
    const newNode = new Node(val)

    if (!this.size) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size
  }

  dequeue () {
    if (!this.size) return null

    const removed = this.first

    if (this.size === 1) {
      this.last = null
    }

    this.first = removed.next
    this.size--

    return removed.val
  }
}

const queue = new Queue()
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue);

console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue);