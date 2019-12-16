function getText(string) {
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
  return newString
}

console.log(getText('tweet'))
