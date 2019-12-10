/* Daily Coding Problem: Problem #367 [MEDIUM] */

/* PROBLEM DESCRIPTION

 This problem was asked by Two Sigma.

Given two sorted iterators, merge it into one iterator.

For example, given these two iterators:

foo = iter([5, 10, 15])
bar = iter([3, 8, 9])
You should be able to do:

for num in merge_iterators(foo, bar):
    print(num)

# 3
# 5
# 8
# 9
# 10
# 15
Bonus: Make it work without pulling in the contents of the iterators in memory.
 
*/

const arr1 = [5, 10, 15];
const arr2 = [3, 8, 9];


function sortedSingleArray(a, b) {
  let sorted = {};
  a.map(e => {
     sorted[e] = e;
  });
  b.map(e => {
     sorted[e] = e;
  })
  return Object.values(sorted)
}

console.log(sortedSingleArray(arr1, arr2))
