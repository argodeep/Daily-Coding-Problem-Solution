/* Daily Coding Problem: Problem #373 [HARD] */

/* PROBLEM DESCRIPTION
This problem was asked by Facebook.

Given a list of integers L, find the maximum length of a sequence of consecutive numbers that can be formed using elements from L.

For example, given L = [5, 2, 99, 3, 4, 1, 100], return 5 as we can build a sequence [1, 2, 3, 4, 5] which has length 5.
 
*/

function getMaxlength(arr) {
  let hash = {};
  let count;
  arr.map(e => {hash[e] = e});
  for (let i = 0; i < arr.length; i++) {
    if (arr.findIndex(e => e === (arr[i] - 1)) === -1) {
        let j = arr[i];
        while(arr.findIndex(e => e === j) !== -1) {
          j += 1;
        }
        count = count > (j - arr[i]) ? count : (j - arr[i]);
    }
  }
  return count
}

console.log(getMaxlength([5, 2, 99, 98, 3, 4, 1, 100]))
