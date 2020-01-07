/*
DAILY CODING PROBLEM #393[MEDIUM]
This problem was asked by Airbnb.

Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.

For example, given the array [9, 6, 1, 3, 8, 10, 12, 11], return (8, 12) since 8, 9, 10, 11, and 12 are all in the array.

*/

let ar = [9, 6, 1, 2, 4, 3, 8, 10, 12, 11];

function largestRange(arr) {
  let longestRange = 0;
  let hash = {};
  arr.map(e => { hash[e] = e });
  for (let i = 0; i < arr.length; i++) {
    let currentRange = 0;
    let p = arr[i];
    let n = arr[i] + 1;
    while (hash[p]) {
      currentRange += 1;
      p -= 1;
    }
    while (hash[n]) {
      currentRange += 1;
      n += 1;
    }
    if (currentRange > longestRange) {
      longestRange =  currentRange;
      return [p+1, n-1]
    }
  }
}

console.log(largestRange(ar))

