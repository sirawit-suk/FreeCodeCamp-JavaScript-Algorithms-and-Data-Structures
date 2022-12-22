function factorialize(num) {
  let sum = 1;
  for (let i=2; i<=num; i++) {
    sum *= i;
  }
  return sum;
}

factorialize(5);

/*
  recursive
  1. good for trees/graphs
  2. good for understand and more simple
  3. bad for space complexity

  iterative
  1. good for space complexity
  2. good for knowing amount of looping
  3. bad for don't know amount of looping
*/

/*
// recursive way:

function factorialize(num) {
  if(num === 0){
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

*/