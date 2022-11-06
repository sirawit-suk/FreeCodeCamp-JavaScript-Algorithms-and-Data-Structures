// Declare the myGlobal variable below this line
const myGlobal = 10;
// let oppsGlobal;
xxx = 5; // BAD PRACTICE

function fun1() {
  // Assign 5 to oopsGlobal Here

  // DON'T USE THIS, THIS IS LOOSE MODE IN JAVASCRIPT
  oopsGlobal = 5;
  // https://stackoverflow.com/questions/6888570/declaring-variables-without-var-keyword
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
console.log(xxx);