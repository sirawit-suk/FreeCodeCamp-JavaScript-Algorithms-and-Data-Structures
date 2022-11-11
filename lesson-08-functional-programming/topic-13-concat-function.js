function nonMutatingConcat(original, attach) {
  // Only change code below this line

  // pure function - not modify original array
  return original.concat(attach);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

console.log(nonMutatingConcat(first, second));
