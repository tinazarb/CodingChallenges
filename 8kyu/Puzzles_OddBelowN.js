// Challenge:
Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n

// My Solution:
function oddCount(n){
  return Math.floor(n/2)
}


// Other Solutions:
const oddCount = n => Math.floor(n/2) ;

function oddCount(n) {
  return Math.trunc(n / 2);
}