function alphabeticalOrder(arr) {
  // Only change code below this line

  // if -1 then a sort before b
  // jf +1 then b sort before a
  // jf 0 then nothing happen

  return arr.sort((a, b) => {
    console.log("first: ", a, "second: ", b);
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

test = ["p", "q", "r", "s"];

console.log(alphabeticalOrder(test));
numList = [10, 12, 14, 16];
console.log(alphabeticalOrder(numList));


// NOTE: sort() will mutate original array
numList.sort((second, first) => {
  console.log("second: ", second, "first: ", first, "result second-first: ", second-first);
  return second - first;
});
console.log(numList)





/*
 conclusion
 a is a second
 b is a first

 example : [1,2,3,4]
 loop#1 = (2, 1) from [(b=1,a=2),3,4]
 loop#2 = (3, 2) from [1,(b=2,a=3),4]
 loop#3 = (4, 3) from [1,2,(b=3, a=4)] //NO , IT DEPEND!, SEE AT THE END

 result if 1 (mean already sorted, a will be behind b already)
 result if -1 (mean not sorted yet, b will come first and a is a second (swap))
 result if 0 (mean equal num, continue and preserve);

*/


numList = [1,1,5,2,2,3,0]
count = 0

/*
 loop#01 = (1, 1) from [(1,1),5,2,2,3,0] //equal
 loop#02 = (5, 1) from [1,(1,5),2,2,3,0] //sorted
 loop#03 = (2, 5) from [1,1,(5,2),2,3,0] //  swap
 loop#04 = (2, 1) from [1,(1,2),5,2,3,0] //sorted
 loop#05 = (2, 5) from [1,1,2,(5,2),3,0] //  swap
 loop#06 = (2, 2) from [1,1,(2,2),5,3,0] //equal

 loop#07 = (2, 5) from [1,1,2,2,5,3,0] // wtf xxx
 loop#08 = (3, 2) from [1,1,2,2,5,3,0] // wtf xxx

 loop#09 = (3, 5) from [1,1,2,2,(5,3),0] //  swap
 loop#10 = (3, 2) from [1,1,2,(2,3),5,0] //sorted
 loop#11 = (0, 2) from [1,1,2,-2,3,5,0-] // wtf xxx
 loop#12 = (0, 1) from [1,-1,2,2,3,5,0-]
 loop#13 = (0, 1) from [-1,1,2,2,3,5,0-]
*/

numList.sort((a,b) => {
  count++;
  if(a > b) {
    console.log("loop:",count.toString().padStart(2, '0'),"a:b ",a,b,"second is more than first -> true, sorted")
    return 1;
  }else if( a < b) {
    console.log("loop:",count.toString().padStart(2, '0'),"a:b ",a,b,"second is less than first -> false,    swap please")
    return -1;
  }else if (a === b) {
    console.log("loop:",count.toString().padStart(2, '0'),"a:b ",a,b,"equal")
    return 0;
  }
})
console.log(numList)


//  NOTE: Array.sort() algorithim inside
/*
  Final conclusion!

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  "The time and space complexity of the sort cannot be guaranteed as it depends on the implementation." -mdn web docs

  https://stackoverflow.com/questions/234683/javascript-array-sort-implementation
  "I've just had a look at the WebKit (Chrome, Safari …) source. Depending on the type of array, different sort methods are used:"

  https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity
  "Firefox uses merge sort. Chrome, as of version 70, uses a hybrid of merge sort and insertion sort called Timsort."

  https://www.quora.com/What-is-the-time-complexity-of-JavaScripts-sort-function
  "Note: personally I prefer HeapSort. I tested a recursive HeapSort implementation against Array.prototype.sort() on a 10M array. While HeapSort took 10 seconds, sort() took almost 3 minutes."

  my note: We can't tell, it's depend, just to know how this Array.sort() work in high level and return.
  if want to optimize to be better for time and space complexity, may write own sort function.

*/