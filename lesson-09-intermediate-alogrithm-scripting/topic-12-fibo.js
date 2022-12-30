function sumFibs(num) {
  const fibos = [1, 1];
  for (let i = 0; i < num - 2; i++) {
    let result = fibos[i] + fibos[i + 1];
    if (result > num){
      break;
    }
    fibos.push(result);
  }
  return fibos
    .filter((num) => num % 2 !== 0)
    .reduce((prev, cur) => prev + cur, 0);
}

console.log(sumFibs(10));
console.log(sumFibs(1000));