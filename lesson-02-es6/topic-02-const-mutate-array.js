// Some developers prefer to assign all their variables using const by default,
// unless they know they will need to reassign the value. Only in that case, they use let.
// NOTE: objects, arrays, functions) can mutable with "const"
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  s.sort((a, b) => a - b);

  // Only change code above this line
}
editInPlace();
