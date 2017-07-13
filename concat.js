function concat(arrayOne, arrayTwo) {
  var finalArray = [];
  if (arrayOne.length > 0) {
    for (var i = 0; i < arrayOne.length; i++) {
      finalArray.push(arrayOne[i]);
    }
  }
  if (arrayTwo.length > 0) {
    for (var i2 = 0; i2 < arrayTwo.length; i2++) {
      finalArray.push(arrayTwo[i2]);
    }
  }
  return finalArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);