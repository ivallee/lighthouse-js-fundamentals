function ageCalculator(name, yearOfBirth, currentYear) {
  var result = currentYear - yearOfBirth;
  return name + " is " + result + " years old.";
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));