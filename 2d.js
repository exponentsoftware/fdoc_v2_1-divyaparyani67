// 2.d. Write a function called `findMaximumSubarray` that takes an array of integers as input and returns the maximum sum of any contiguous subarray within the input array.
// ```js

function findMaximumSubarray(arr) {
  let max = arr[0];
  let current = Math.max(max, 0);

  for (let i = 1; i < arr.length; i += 1) {
    current += arr[i];
    max = Math.max(max, current);
    current = Math.max(current, 0);
  }

  return max;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaximumSubarray(arr));
// the maximum sum subarray is [4, -1, 2, 1] 6
