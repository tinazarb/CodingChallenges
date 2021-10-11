// Challenge:

Given the head of a linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.


Hint:  Remember our nodes have a next property. Loop through all the nodes at two speeds .next and .next.next by the time the second speed reaches the end the first will be at the middle. Just return what node it is currently at


From: https://leetcode.com/problems/middle-of-the-linked-list

// My Solution:
class LinkedList {
  constructor () {
    this.head = this.tail = null
  }
  // add to the end of the list / tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    }
    // if linkedlist has >= one node
    else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail
    }
  }
  middleNode() {
    let fast = this.head
    let slow = this.head

    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  } 
}
class Node {
  constructor (value, prev, next) {
    this.value = value
    this.next = next || null
    this.prev = prev || null
  }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.middleNode()