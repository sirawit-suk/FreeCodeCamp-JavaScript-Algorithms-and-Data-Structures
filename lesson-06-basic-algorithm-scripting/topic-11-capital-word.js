function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  let newWords = [];
  for (let word of words) {
    newWords.push(word[0].toUpperCase() + word.slice(1));
  }
  return newWords.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
