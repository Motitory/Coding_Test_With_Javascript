const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  // Calling enter every time, you type in the console.
  input.push(line);
}).on("close", function () {
  // End of input(Ctrl + C or Ctrl + D).
  console.log(input);
  process.exit();
});
