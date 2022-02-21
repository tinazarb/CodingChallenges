// Challenge
Convert a Number to a String!

We need a function that can transform a number into a string.

What ways of achieving this do you know?
Examples:

123 --> "123"
999 --> "999"

// My Solution:
function numberToString(num) {
  return num.toString()
}

// Other Solutions:
function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

function numberToString(num) {
  return ''+num;
}

const numberToString = num => `${num}`;