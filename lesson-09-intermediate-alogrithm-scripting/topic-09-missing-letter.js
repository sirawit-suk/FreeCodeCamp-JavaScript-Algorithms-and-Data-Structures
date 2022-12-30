function fearNotLetter(str) {
  for (let index in str.split("")) {
    if (index === "0") {
      continue;
    } else {
      if (str[index].charCodeAt(0) - str[index - 1].charCodeAt(0) > 1) {
        return String.fromCharCode(str[index].charCodeAt(0) - 1);
      }
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
