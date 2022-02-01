class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // add node to the tail
  push (val) {
    const newNode = new Node(val)

    if (!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++

    return this
  }

  // remove node from the tail
  pop () {
    if (!this.length) return null

    const oldTail = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      const prev = oldTail.prev
      this.tail = prev
      prev.next = null
      oldTail.prev = null
    }
    
    this.length--

    return oldTail
  }

  // remove node from the head
  shift () {
    if (!this.length) return null

    const oldHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      const next = oldHead.next
      this.head = next
      next.prev = null
      oldHead.next = null
    }

    this.length--

    return oldHead
  }

  // add node to the head
  unshift (val) {
    const newNode = new Node(val)

    if (!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.length++
    return this
  }

}

const dl = new DoublyLinkedList()

console.log(dl.unshift(10))
console.log(dl.unshift(20))
// dl.unshift(30)

// console.log(dl.shift())
// console.log(dl.shift())
// console.log(dl.shift())
// console.log(dl.shift())
// console.log(dl.shift())


console.log(dl);