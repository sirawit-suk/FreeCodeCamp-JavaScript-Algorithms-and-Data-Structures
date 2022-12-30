function isPrime(num) {
  if (num === 1) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count === 1;
}

function sumPrimes(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
