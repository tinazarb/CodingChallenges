// Challenge
Greatest common divisor

Use recursion.

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.


Test.assertEquals(mygcd(30,12),6)
Test.assertEquals(mygcd(8,9),1)
Test.assertEquals(mygcd(1,1),1)

Hint:  return y == 0 ? x : mygcd(y, x % y)

// My Solution:
function mygcd(x,y){
  return y === 0 ? x : mygcd(y, x % y)
}

// Other Solutions:
const mygcd = (a, b) => b ? mygcd(b, a % b) : a;

function mygcd(x, y){
  for ( let j = Math.max(x, y); j > 0; j-- ){
    if ( x % j === 0 && y % j === 0){
      return j
    }
  }
}