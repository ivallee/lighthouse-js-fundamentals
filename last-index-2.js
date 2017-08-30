//Define a function lastIndexOf, which, given an array and a value,
//returns the index of the last time the value occurs in the array.
//If the value never occurs, the function should return -1.

function lastIndexOf(arr, num) {
  var isMatch = false;
  var matches = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      matches = i;
      isMatch = true;
    }
  }
  if (isMatch) {
    return matches;
  } else {
    return -1;
  }
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);