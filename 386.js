// DAILY CODING PROBLEM #386 [EASY]

/*

This problem was asked by Twitter.

Given a string, sort it in decreasing order based on the frequency of characters. If there are multiple possible solutions, return any of them.

For example, given the string tweet, return tteew. eettw would also be acceptable.
*/

function getText1(string) {
  console.time("First");
  let hash = {};
  let pointer = 0;
  let newString = '';
  for (index in string) {
    let char = string.substr(index, 1);
    if (hash[char]) {
      hash[char] = hash[char] + char;
    } else {
      hash[char] = char;
    }
  }

  for (char in hash) {
    if (hash[char].length >= pointer) {
      pointer = hash[char].length;
      newString = hash[char] + newString;
    } else if (hash[char].length < pointer) {
      newString = newString + hash[char];
    }
  }
  console.timeEnd("First");
  return newString
}


function getText2(string) {
  console.time("Second");
  let hash = {};
  let pointer = 0;
  let newString = '';
  for (index in string) {
    let char = string.substr(index, 1);
    if (hash[char]) {
      hash[char] = hash[char] + char;
      if (hash[char].length >= pointer) {
        pointer = hash[char].length;
        newString = newString.split(char).join('');
        newString = hash[char] + newString;
      } else {
        newString = newString.replace(hash[char].slice(0, hash[char].length - 1), hash[char]);
      }
    } else {
      hash[char] = char;
      newString = newString + hash[char];
    }
  }
  console.timeEnd("Second");
  return newString
}

console.log(getText1('tweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxc'));
console.log(getText2('tweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxctweetsasfdgnhfsedqewwqrxszxxzvc\asazxcxc'));
