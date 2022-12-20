let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result)

// greedy (default)
// "<h1>Winter is coming</h1>"

// lazy
// "<h1>"