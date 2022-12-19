let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);
// result = [Twinkle, twinkle]

// flag can swap between gi and ig (same thing)