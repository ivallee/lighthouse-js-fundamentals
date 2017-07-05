function range(start, end, step) {
  var myRange = [];
  if ( start === undefined || end === undefined || step === undefined || end < start || step < 0 ) {
    myRange = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      myRange.push(i);
    }
  }
  return myRange;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
