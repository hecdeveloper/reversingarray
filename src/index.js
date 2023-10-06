console.log("3");

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

function reverseArrayInPlace(arr) {
  let len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[len - 1 - i];
  }
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]
