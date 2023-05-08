// The reduce() method reduces the array to a single value.
// reduce(accumulator, currentValue) => (return value)

let data = [5, 2, 9, 8, 4];

// minValue
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); // 2

// sum of all elements
let summary = data.reduce((a, b) => a + b);
console.log(summary); // 28
