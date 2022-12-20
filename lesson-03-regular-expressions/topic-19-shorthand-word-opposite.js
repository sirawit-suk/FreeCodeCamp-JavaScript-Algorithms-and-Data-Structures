let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(quoteSample.match(nonAlphabetRegex));

// the opposite of the \w with \W.
// Note, the opposite pattern uses a capital letter.