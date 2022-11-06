function rangeOfNumbers(startNum, endNum) {
  // base case
  if (startNum > endNum) {
    return [];
  }

  const array = rangeOfNumbers(startNum, endNum - 1);
  array.push(endNum);
  return array;

  // recursive acse
}
