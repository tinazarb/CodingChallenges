// Challenge
Reverse a Number

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1


// My Solution:
function reverseNumber(n) {
  let reversed = n.toString().split('').reverse()
  if (reversed.slice(-1) == "-"){
    return -Number(reversed.slice(0,-1).join(''))
  } else {
    return Number(reversed.join(''))
  }
}

// Other Solutions:
reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')


function reverseNumber(n) {
  let isNegative = n < 0;  
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);
  return isNegative ? -result : result;
}

function reverseNumber(n) {
  return Math.sign(n) * Math.abs(n)
    .toString()
    .split``
    .reverse()
    .join``;
}