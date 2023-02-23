// Define a class for the queue
class Queue {
  constructor() {
    this.items = []; // the array used to store the queue's elements
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove the front element from the queue and return it
  dequeue() {
    if (this.items.length === 0) { // check if the queue is empty
      return null;
    }
    return this.items.shift();
  }

  // Get the front element of the queue without removing it
  front() {
    if (this.items.length === 0) { // check if the queue is empty
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the number of elements in the queue
  size() {
    return this.items.length;
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("cherry");
console.log(queue.front()); // Output: "apple"

queue.dequeue();
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
