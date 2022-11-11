// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line

  const newArray = [];

  this.forEach((element) => {
    if (callback(element) === true) {
      newArray.push(element);
    }
  });

  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

console.log(new_s);
