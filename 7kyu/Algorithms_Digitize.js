// Challenge
Digitize

Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]


// My Solution:
function digitize(n) {
 return n.toString().split("").map(x => Number(x))
}


// Other Solutions:
function digitize(n) {
  return String(n).split('').map(Number);
}

function digitize(n) {
  return n.toString().split('').map(Number);
}

const digitize = n => n.toString().split('').map(Number);