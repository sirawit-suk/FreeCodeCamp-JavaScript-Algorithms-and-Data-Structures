// Formula
// a * b = gcd(a,b) * lcm(a,b);
// lcm(a,b) = (a * b) / gcd(a,b);

// DO NOT DO THIS
// lcm(a,b,c) = (a*b*c) / gcd(a,b,c) WRONG!!!
// need to do only one pair at a time, it is a formula

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // recursive euclidean gcd

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  const start = arr[0];
  const end = arr[1];
  let lcm = end;

  for (let i = end; i > start; i--) {
    lcm = (lcm * (i - 1)) / gcd(lcm, i - 1);
  }

  return lcm;
}

console.log(smallestCommons([1, 3]));
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
