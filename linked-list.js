// Define a class for a node in the (single linked) linked list
class Node {
  constructor(data) {
    this.data = data; // the data stored in the node
    this.next = null; // a reference to the next node in the list
  }
}

// Define a class for the linked list itself
class LinkedList {
  constructor() {
    this.head = null; // a reference to the first node in the list
    this.size = 0; // the number of nodes in the list
  }

  // Add a node to the end of the list
  add(data) {
    const node = new Node(data);

    if (!this.head) { // if the list is empty
      this.head = node; // set the new node as the head
    } else {
      let current = this.head;

      while (current.next) { // loop through the list until the end
        current = current.next;
      }

      current.next = node; // add the new node to the end
    }

    this.size++; // increment the size of the list
  }

  // Remove a node from the list by its index
  remove(index) {
    if (index < 0 || index >= this.size) { // check if index is out of bounds
      return null;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    if (index === 0) { // if removing the head node
      this.head = current.next;
    } else {
      while (currentIndex < index) { // loop through the list to find the node
        previous = current;
        current = current.next;
        currentIndex++;
      }

      previous.next = current.next; // remove the node by updating references
    }

    this.size--; // decrement the size of the list
    return current.data; // return the removed node's data
  }

  // Get the data of a node at a specific index
  get(index) {
    if (index < 0 || index >= this.size) { // check if index is out of bounds
      return null;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) { // loop through the list to find the node
      current = current.next;
      currentIndex++;
    }

    return current.data; // return the node's data
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }
}

// Example usage:
const list = new LinkedList();

list.add("apple");
list.add("banana");
list.add("cherry");
console.log(list.get(1)); // Output: "banana"

list.remove(2);
console.log(list.getSize()); // Output: 2
