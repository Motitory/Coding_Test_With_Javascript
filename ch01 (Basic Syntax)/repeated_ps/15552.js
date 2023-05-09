let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let answer = "";

for (let t = 1; t <= testCase; t++) {
  let [a, b] = input[t].split(" ");
  answer += Number(a) + Number(b) + "\n";
}

console.log(answer);
