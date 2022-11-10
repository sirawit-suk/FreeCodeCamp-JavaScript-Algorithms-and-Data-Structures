// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// NOTE: array and object is pass by reference.

// Change code below this line
function add(bookList, bookName) {
  const list = [...bookList];
  list.push(bookName);
  return list;

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const list = [...bookList];
  const book_index = list.indexOf(bookName);
  if (book_index >= 0) {
    list.splice(book_index, 1);
    return list;

    // Change code above this line
  }
}

console.log("1 add: ", add(bookList, "wtf"));
console.log("2 bookList: ", bookList);
console.log(
  "3 remove: ",
  remove(bookList, "On The Electrodynamics of Moving Bodies")
);
console.log("4 bookList: ", bookList);
