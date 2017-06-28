function whichSchool(age) {
  if (age < 13) {
    return elementary;
  } else if (age <= 18) {
    return secondary;
  } else {
    return lighthouse;
  }
}
var elementary = "Elementary School";
var secondary = "Secondary School";
var lighthouse = "Lighthouse Labs"

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));