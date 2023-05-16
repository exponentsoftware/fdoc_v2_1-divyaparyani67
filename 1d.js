//Write a function called `longestIncreasingSubsequence` that takes an array of numbers as input and returns the length of the longest increasing subsequence in the array. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

function longestIncreasingSubsequence(arr) {
  const n = arr.length;
  const sub_arr = [arr[0]];
  let max = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
      sub_arr.push(max);
    }
  }
  return sub_arr;
}

const arr = [1, 4, 2, 5, 3];
console.log(longestIncreasingSubsequence(arr));
