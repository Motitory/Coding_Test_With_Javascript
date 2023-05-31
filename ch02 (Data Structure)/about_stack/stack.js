// Typically, when implementing a stack, we use arrays in JavaScript.
let stack = [];

stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();

let reversed = stack.slice().reverse();
console.log(reversed); // print from the top element
console.log(stack);

// [ 1, 3, 2, 5 ]
// [ 5, 2, 3, 1 ]

// In stack, we use the push() and pop() methods. Both methods have a time complexity of O(1).
// Use linked list to implement stack, just one pointer is enough.(head)
// head : The pointer that points to the top element(last) of the stack.
