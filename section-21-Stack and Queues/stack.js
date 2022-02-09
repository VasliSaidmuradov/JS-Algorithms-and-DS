// Implement a stack with Array

// const stack = []
// stack.push('val')
// stack.pop()


// Implement s stack with Linked List

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor () {
    this.first = null
    this.last = null
    this.size = 0
  }

  push (val) {
    const newNode = new Node(val)

    if (!this.size) {
      this.first = newNode
      this.last = newNode
    } else {
      const temp = this.first
      newNode.next = temp
      this.first = newNode
    }

    return ++this.size
  }

  pop () {
    // 4 3 2

    if (!this.size) return null

    const removed = this.first

    if (this.size === 1) {
      this.last = null
    }

    this.first = this.first.next

    this.size--

    return removed.val
  }
}

const stack = new Stack()

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));

console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);