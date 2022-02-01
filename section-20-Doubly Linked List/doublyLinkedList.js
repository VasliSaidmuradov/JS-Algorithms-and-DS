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
    if (idx < 0 || idx >= this.length) return null
    
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

  set (idx, val) {
    // set new value [val] to node with index [idx]
    const node = this.get(idx)

    if (node) {
      node.val = val
      return true
    }

    return false
  }

  insert (idx, val) {
    if (idx < 0 || idx > this.length) return false

    if (idx === 0) return !!this.unshift(val)
    if (idx === this.length) return !!this.push(val)

    const newNode = new Node(val)
    const prev = this.get(idx - 1)
    const next = prev.next

    prev.next = newNode
    newNode.prev = prev
    newNode.next = next
    next.prev = newNode

    this.length++

    return true
  }

  remove (idx) {
    if (idx < 0 || idx >= this.length) return null
   
    if (idx === 0) return this.shift()
    if (idx === this.length - 1) return this.pop()

    const cur = this.get(idx)
    const prev = cur.prev
    const next = cur.next

    prev.next = next
    next.prev = prev
    cur.prev = null
    cur.next = null
    
    this.length--

    return cur
  }
}

const dl = new DoublyLinkedList()

dl.push(10)
dl.push(20)
dl.push(30)
// dl.push(40)
// dl.push(50)
// dl.push(60)

console.log(dl)