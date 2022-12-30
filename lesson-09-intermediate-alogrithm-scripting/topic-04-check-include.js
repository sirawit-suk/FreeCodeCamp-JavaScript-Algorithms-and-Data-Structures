function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    let result = 0;
    for (let key in obj) {
      for (let key2 in source) {
        if (key === key2 && obj[key] === source[key2]) {
          result++;
        }
      }
    }
    return result === Object.keys(source).length;
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
