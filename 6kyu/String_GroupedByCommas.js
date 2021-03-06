// Challenge:
Grouped by commas

Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647
Examples

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"


// My Solution:
function groupByCommas(n) {
    return n.toLocaleString()
}

// Other Solutions:
function groupByCommas(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function groupByCommas(n) {
  return n.toString()
    .split('')
    .reverse()
    .reduce(function(res, c, i, a){ return res + c + (!((i + 1)%3 || i === a.length - 1) ? ',' : '') }, '')
    .split('')
    .reverse()
    .join('')
}

function groupByCommas(n) {
    let arr = n.toString().split('')
    let result = []
    let count = 0
    for(let i = arr.length - 1; i >= 0; i--){
      if(count <= 2){
        result.unshift(arr[i])
        count++
      }else if(count > 2){
        result.unshift(',')
        result.unshift(arr[i])
        count = 1
      }
    }
    return result.join('')
  }