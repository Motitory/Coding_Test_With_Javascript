// If an initialization statement exists, execute it first.
// If True, execute the code inside the block.
// If False, skip the block and finish repeated statement.
// executed the code inside the block, the increment or decrement statement is executed.

for (initialization; condition; increment / decrement) {
  // statements
}

// sum of 1 to 100
let summary = 0;
for (let i = 1; i <= 100; i++) {
  summary += i;
}
console.log(summary);
