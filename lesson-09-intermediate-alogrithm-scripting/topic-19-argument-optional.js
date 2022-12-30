// only accept 2 parameters

function addTogether(...args) {
  const [first, second] = args;
  if (typeof first === "number" && typeof second === "number") {
    return first + second;
  } else if (typeof first === "number" && args.length === 1) {
    return (num) => addTogether(first, num);
  }
}
const anonymousFunction = addTogether(2);
console.log(anonymousFunction);
const result1 = anonymousFunction(3);
console.log(result1);

const result2 = addTogether(2)(3);
console.log(result2);

const result3 = addTogether(2,3);
console.log(result3);