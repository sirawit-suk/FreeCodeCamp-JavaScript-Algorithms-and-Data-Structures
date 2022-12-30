function steamrollArray(arr) {
  let list = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      list.push(...steamrollArray(i));
    } else {
      list.push(i);
    }
  }
  return list;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
