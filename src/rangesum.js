function range(start, end, step = 1) {
  const result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= Math.abs(step)) {
      result.unshift(i);
    }
  }
  return result;
}

function sum(array) {
  let total = 0;
  for (const element of array) {
    total += element;
  }
  return total;
}
console.log("ok");

console.log(range(1, 10));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(5, 2, -1));
// Output: [5, 4, 3, 2]

console.log(sum(range(1, 10)));
// Output: 55
