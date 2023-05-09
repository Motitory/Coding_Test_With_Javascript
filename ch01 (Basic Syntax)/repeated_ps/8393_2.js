let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

// Formula for the sum of 1 to n: n * (n + 1) / 2 {arithmetic progression}
console.log((n * (n + 1)) / 2);
