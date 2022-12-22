function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

/*
function chunkArrayInGroups(arr, size) {
  const lists = [];
  let counter = 0;
  let tempList = [];
  for (let i of arr) {
    tempList.push(i);
    counter++;
    if (counter === size) {
      counter = 0;
      lists.push([...tempList]);
      tempList = [];
    }
  }
  if (tempList.length !== 0) {
    lists.push([...tempList]);
  }
  return lists;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

*/
