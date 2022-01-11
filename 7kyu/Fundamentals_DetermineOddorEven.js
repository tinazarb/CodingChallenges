// Challenge:
Odd or Even? Determine that!

Given a number N, determine if the sum of N consecutive numbers is odd or even.

    If the sum is definitely an odd number, return Odd.
    If the sum is definitely an even number, return Even.
    If the sum can be either odd or even ( depending on which first number you choose ), return Either.

Examples

    Odd_or_Even(1) should return Either, because the sum can be odd or even.
    Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
    Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.

Note

const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";


console.log( oddOrEven(1), "EITHER" );
console.log( oddOrEven(8), "EVEN" );
console.log( oddOrEven(6), "ODD" );


// My Solution:
function oddOrEven(n) {
let number = n / 2
  if (n / 2 !== Math.round(n / 2)){
    return "Either"
    } else if (number % 2 === 0){
  return "Even"
} else if (number % 2 === 1) {
  return "Odd"
}
}

// Other Solutions:
function oddOrEven(n) {
  return n % 2 ? EITHER : n / 2 % 2 ? ODD : EVEN
}


const oddOrEven = $ => $ % 2 ? EITHER : $ / 2 % 2 ? ODD : EVEN