// Challenge
Find the Remainder

Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.

Division by zero should return NaN. (
Example

remainder(17, 5) -> 2
remainder(13, 72) -> remainder(72,13) -> 7 (The larger number should divide the smaller number)
remainder(1, 0) -> NaN (Division by 0)
remainder(0, 0) -> NaN (Divison by 0)

Input

Arguments will both be integers: positive, negative, or neutral (0)

// My Solution:
function remainder(a, b){
  if (a == 0 || b == 0){
    return NaN
  } else if (a > b) {
    return a % b
  } else {return b % a}
}

// Other Solutions:
function remainder(a, b){
  return (a > b) ? a % b : b % a;
}

function remainder(a, b){ return Math.max(a,b) % Math.min(a,b); }

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  var min = Math.min(a,b);
  var max = Math.max(a,b);

  return min ? max % min : NaN;
}