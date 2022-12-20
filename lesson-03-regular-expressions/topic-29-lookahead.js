let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=.*\d\d.*)/; // Change this line
let result = pwRegex.test(sampleWord);

//NOTE: confuse, get back to review