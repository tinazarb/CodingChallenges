// Challenge:
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]


// My Solution:
function digitize(n){
  let toArray = (""+n).split('').map(Number)
  let reverseArray = toArray.reverse()
  return reverseArray
}


// Top Solutions:
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}


#arrays