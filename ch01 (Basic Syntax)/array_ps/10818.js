let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let max = -1000001;
let min = 1000001;

// O(N)
for (let i = 0; i < n; i++) {
  if (min > arr[i]) min = arr[i];
  if (max < arr[i]) max = arr[i];
}

console.log(min + " " + max);
