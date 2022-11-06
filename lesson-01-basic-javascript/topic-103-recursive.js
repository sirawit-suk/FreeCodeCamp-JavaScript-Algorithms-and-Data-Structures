function sum(arr, n) {
  // Only change code below this line

  // base case
  if (n <= 0) {
    return 0;
  }

  // recursive function itself
  return sum(arr, n - 1) + arr[n - 1];

  // Only change code above this line
}
