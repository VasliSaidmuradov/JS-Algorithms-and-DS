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
    this.size = 0
  }

  push (val) {
    const newNode = new Node(val)

    newNode.next = this.first
    this.first = newNode

    return ++this.size
  }

  pop () {
    if (!this.size) return null

    const removed = this.first

    this.first = this.first.next

    this.size--

    return removed.val
  }
}

const stack = new Stack()

console.log(stack.push(10));
console.log(stack.push(20));
console.log(stack.push(30));
console.log(stack.push(40));

console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);