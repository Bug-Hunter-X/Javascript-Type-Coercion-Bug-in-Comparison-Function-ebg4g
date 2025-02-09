function myFunc(a, b) {
  //Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Both arguments must be numbers";
  }
  if (a > b) {
    return a; 
  } else { 
    return b; 
  }
}

console.log(myFunc(5, 10)); //10
console.log(myFunc("5", 10)); //Invalid input: Both arguments must be numbers
console.log(myFunc(5, "10")); //Invalid input: Both arguments must be numbers