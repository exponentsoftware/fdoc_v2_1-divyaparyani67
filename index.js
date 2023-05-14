// Write a function called `countOccurrences` that takes an array of numbers and a number as input and returns the number of times the input number occurs in the array.
// ```js

// function countOccurrences(arr, num) {
//   let occurenceCount = 0;

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == num) occurenceCount++;
//   }
//   return occurenceCount;
// }

// const arr = [4, 2, 6, 8, 4, 1, 4];
// console.log(countOccurrences(arr, 4));

//Write a function called `filterByLength` that takes an array of strings and a number as input and returns an array of all the strings in the input array whose length is greater than or equal to the input number.

// function filterByLength(arr, target) {
//   return arr.filter((arr) => arr.length >= target);
// }

// const arr = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(filterByLength(arr, 6));
// //["banana", "cherry", "elderberry"]

//Write a function called `sumOfPrimes` that takes a number as input and returns the sum of all prime numbers less than or equal to the input number.

// function sumOfPrimes(num) {
//   let sum = 0;

//   function checkPrime(num) {
//     for (let i = 2; num > i; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   for (let i = 2; i <= num; i++) {
//     if (checkPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sumOfPrimes(10));

//Write a function called `findMaximumSubarray` that takes an array of integers as input and returns the maximum sum of any contiguous subarray within the input array.

var findMaximumSubarray = function (arr) {
  var len = arr.length;
  var max = Number.MIN_SAFE_INTEGER;
  var before = 0;
  var now = 0;

  if (!len) return 0;

  for (var i = 0; i < len; i++) {
    now = Math.max(before + arr[i], arr[i]);
    max = Math.max(now, max);
    before = now;
  }

  return max;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaximumSubarray(arr));
