function mutation(arr) {
  const checkerList = arr[1].toLowerCase().split("");
  const originalList = arr[0].toLowerCase().split("");
  return checkerList.every((alp) => {
    return originalList.includes(alp);
  });
}

// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));
console.log(mutation(["Mary", "Army"]));
