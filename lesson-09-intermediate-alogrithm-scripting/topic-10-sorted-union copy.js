function uniteUnique(...arrs) {
  return [...new Set(arrs.flatMap((arr) => arr))];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
