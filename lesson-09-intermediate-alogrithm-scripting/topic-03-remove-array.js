function destroyer(arr, ...valRemoves) {
  return arr.filter((num) => !valRemoves.includes(num));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
