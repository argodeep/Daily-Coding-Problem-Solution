/*
DAILY CODING PROBLEM #393[MEDIUM]
This problem was asked by Airbnb.

Given an array of integers, return the largest range, inclusive, of integers that are all included in the array.

For example, given the array [9, 6, 1, 3, 8, 10, 12, 11], return (8, 12) since 8, 9, 10, 11, and 12 are all in the array.

*/

let ar = [9, 6, 1, 2, 4, 3, 8, 10, 12, 11];

function largestRange(arr) {
  let range = [];
  let hash = {};
  arr.map(e => { hash[e] = e });
  for (let i = 0; i < arr.length; i++) {
    let backup = [];
    let p = arr[i];
    let n = arr[i];
    while (hash[p]) {
      if (backup.indexOf(p) === -1) {
        backup.unshift(p);
      }
      p -= 1;
    }
    while (hash[n + 1]) {
      if (backup.indexOf(n + 1) === -1) {
        backup.unshift(n + 1);
      }
      n += 1;
    }
    if (backup.length > range.length) {
      range = backup.sort((a, b) => a > b ? 1 : -1);
    }
  }
  return {start: range[0], end: range[range.length -1], length: range.length}
}

console.log(largestRange(ar))

