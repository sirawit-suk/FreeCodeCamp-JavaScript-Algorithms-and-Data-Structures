function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([40, 60], 50);
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));

/*
  function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    const targetNumber = arr.find((n) => n >= num);
    const index = arr.indexOf(targetNumber);
    return index !== -1 ? index : arr.length;
  }
*/
