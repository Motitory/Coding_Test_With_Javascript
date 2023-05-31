// You can use a loop to initialize a two-dimensional array.
let arr2 = new Array(3);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = Array.from({ length: 4 }, (undefined, j) => i * 4 + j);
}

console.log(arr2);
