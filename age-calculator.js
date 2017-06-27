function ageCalculator(name, birthYear, currentYear) {
  var age = currentYear - birthYear;
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Isaac", 1990, 2017));
