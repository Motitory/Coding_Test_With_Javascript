let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a * (b % 10));
console.log(a * Math.floor((b % 100) / 10));
console.log(a * Math.floor(b / 100));
console.log(a * b);

// let a = input[0];
// let b = input[1];

// x_1 = b[2];
// x_2 = b[1];
// x_3 = b[0];

// console.log(Number(a) * Number(x_1));
// console.log(Number(a) * Number(x_2));
// console.log(Number(a) * Number(x_3));
// console.log(Number(a) * Number(b));