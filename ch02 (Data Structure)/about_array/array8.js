// In JavaScript, Arrays are dynamic arrays. This means that you can change the size of an array arbitrarily, even after it's created.
// Use the push() method to add an element to the end of an array.

let arr = [5, 6, 7, 8, 9];
arr.length = 8;
arr[7] = 3;
arr.push(1);

for (let x of arr) {
  console.log(x);
}
