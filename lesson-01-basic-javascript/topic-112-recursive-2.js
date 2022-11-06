// Only change code below this line
function countdown(n) {

  // base case
  if (n < 1) {
    return [];
  }
  const array = countdown(n-1);
  array.unshift(n);
  return array
  // recursive
}
// Only change code above this line

console.log(countdown(5))