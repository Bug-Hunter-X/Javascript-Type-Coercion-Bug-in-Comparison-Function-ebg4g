function myFunc(a, b) { 
  if (a > b) { 
    return a; 
  } else { 
    return b; 
  }
}

// The issue is that if either 'a' or 'b' is not a number, Javascript will perform type coercion resulting in unexpected behavior.

console.log(myFunc(5, 10)); //10
console.log(myFunc("5", 10)); //"510"
console.log(myFunc(5, "10")); //5