let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// If you need to convert string to int, it's better to use Number() than parseInt().
// Because Number() is faster than parseInt().
let n = Number(input[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
