//Write a function called `findMissingNumber` that takes an array of integers from 1 to n with one number missing and returns the missing number.

function findMissingNumber(arr) {
  
    for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) return i;
  }
}

const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(findMissingNumber(arr));
