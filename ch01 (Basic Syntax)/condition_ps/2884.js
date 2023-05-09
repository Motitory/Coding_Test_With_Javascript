let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

data = input[0].split(" ");

let h = Number(data[0]);
let m = Number(data[1]);

if (m < 45) {
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
} else minute -= 45;

console.log(hour + " " + minute);
