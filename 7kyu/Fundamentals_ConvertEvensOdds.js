// Challenge:
Evens and Odds

This kata is about converting numbers to their binary or hexadecimal representation:

    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.

Numbers will be positive. The hexadecimal string should be lowercased.

  Test.assertEquals(evensAndOdds(2),'10')
  Test.assertEquals(evensAndOdds(13),'d')

// My Solution:
function evensAndOdds(num){
	if (num % 2 === 0){
    return num.toString(2)
  } else {
    return num.toString(16)
  }
}

// Other solutions:
const evensAndOdds = n => n.toString(n%2 ? 16 : 2);

function evensAndOdds(num){
  return (num&1) ? num.toString(16) : num.toString(2);
}