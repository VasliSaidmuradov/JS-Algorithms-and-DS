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

  get (idx) {
    // get 
    if (idx < 0 || idx > this.length) return null
    
    const fromTail = this.length - 1 - idx
    const fromHead = idx
    let node = null
    let cur = null

    let count = 0
    if (fromTail < fromHead) {
      cur = this.tail
      while (count < fromTail) {
        count++
        cur = cur.prev
      }

      node = cur
    } else {
      cur = this.head

      while (count < fromHead) {
        count++
        cur = cur.next
      }

      node = cur
    }

    return node
  }

}

const dl = new DoublyLinkedList()

dl.push(10)
dl.push(20)
dl.push(30)
dl.push(40)
dl.push(50)
dl.push(60)



console.log(dl.get(2))
// console.log(dl.shift())
// console.log(dl.shift())
// console.log(dl.shift())
// console.log(dl.shift())


console.log(dl)