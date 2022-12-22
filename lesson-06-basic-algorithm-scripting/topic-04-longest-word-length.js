function findLongestWordLength(str) {
  const list = str.match(/\w+/g);
  const lengthList = list.map((word) => word.length);
  const maxLength = Math.max(...lengthList);
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
