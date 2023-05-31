// A queue is a data structure where the data inserted first is extracted first.
// Use linked list to implement queue, we use enqueue() and dequeue() methods, time complexity is O(1).
// Use linked list to implement queue, we need two pointers.(head, tail)
// head : The pointer that points to the first element of the queue.
// tail : The pointer that points to the last element of the queue.

// It is more efficient in terms of execution time when using a linked list than when simply using an array data type.
// In JavaScript, it's simple to implement a queue using the Dictionary data type.

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

while (queue.getLength() != 0) {
  console.log(queue.dequeue());
}
