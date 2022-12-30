function palindrome(str) {
  // remove all non-alphanumeric
  let newStr = str.replace(/[\W_]/gi, "");

  // turn everything to same case
  newStr = newStr.toLowerCase();

  // check palindrome;
  let result = true;
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) {
      result = false;
      break;
    }
  }
  return result;
}

palindrome("eye");
