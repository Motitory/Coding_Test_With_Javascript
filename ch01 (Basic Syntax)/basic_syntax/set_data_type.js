// "Set" data types can be used effectively to determine if a particular element is present or absent.

let mySet = new Set(); // Create a new set

// Add elements
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`Number of elements: ${mySet.size}`); // 3
console.log(`If 7 is in mySet: ${mySet.has(7)}`); // true

// Delete element
mySet.delete(5);

// Output all elements
for (let item of mySet) console.log(item);
