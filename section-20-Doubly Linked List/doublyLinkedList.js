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

  pop () {
    if (!this.length) return null

    const last = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      const prev = last.prev
      prev.next = null
      last.prev = null
      this.tail = prev
    }
    
    this.length--

    return last
  }
}

const dl = new DoublyLinkedList()

dl.push(10)
dl.push(20)
// dl.push(30)

console.log(dl.pop())
console.log(dl.pop())


console.log(dl);