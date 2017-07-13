function loopyLighthouse(range, multiples, words) {
  var rangeStart = range[0];
  var rangeEnd = range[1];
  var multipleOne = multiples[0];
  var multipleTwo = multiples[1];
  var wordOne = words[0];
  var wordTwo = words[1];
  for (var i = rangeStart; i < rangeEnd + 1; i++) {
    if (i % multipleOne === 0 && i % multipleTwo === 0) {
      console.log(wordOne + wordTwo);
    } else if (i % multipleOne === 0) {
      console.log(wordOne);
    } else if (i % multipleTwo === 0) {
      console.log(wordTwo);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);