// 2.c. Write a function called `findNthLargest` that takes an array of numbers and a number n as input and returns the nth largest number in the array.
// ```js

function findNthLargest(arr, target) {
  if (target > arr.length || target <= 0) {
    return undefined;
  }

  const sortedArr = arr.sort((a, b) => b - a);

  return sortedArr[target - 1];
}

const arr = [3, 1, 7, 4, 5];
console.log(findNthLargest(arr, 3));

//4
