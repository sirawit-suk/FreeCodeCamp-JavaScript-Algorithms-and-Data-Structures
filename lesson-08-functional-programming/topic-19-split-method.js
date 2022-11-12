function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);

  // Only change code above this line
}

splitify("Hello World,I-am code");
console.log(splitify("Hello World,I-am code"));
// TODO: learn regEx
//
/*
  /\W/ Matches any non-word character.
  This includes spaces and punctuation, but not underscores.
  It’s equivalent to /[^A-Za-z0-9_]/.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/
