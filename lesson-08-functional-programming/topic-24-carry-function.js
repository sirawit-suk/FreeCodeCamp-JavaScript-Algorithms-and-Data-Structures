// function add(x) {
//   // Only change code below this line
//   function add2(y) {
//     function add3(z) {
//       return x + y + z;
//     }
//     return add3;
//   }
//   return add2;

//   // Only change code above this line
// }

// save as above
function add(x) {
  // Only change code below this line

  // y and z is a parameter of new 2 arrow functions
  return (y) => (z) => x + y + z

  // Only change code above this line
}

console.log(add(10)(15)(22));

// NOTE: curry function
// study this if have time
//https://javascript.info/currying-partials

// add(10)(20)(30);
// console.log(add(10)(20)(30));
