// Challenge:
Last Digits of a Number

Your job is to implement a function which returns the last D digits of an integer N as a list.
Special cases:

    If D > (the number of digits of N), return all the digits.
    If D <= 0, return an empty list.

Examples:

N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]



// My Solution:
function lastDigit(n, d) {
  if (d <=0) {return []}
  let length = n.toString().length
  if (d > length){
    return Array.from(n.toString()).map(Number)
  }
  let arr = Array.from(n.toString()).map(Number)
  let newarr = []
  let i = 0
  while (i < d){
    newarr.push(arr.pop())
    i++
  }
  return newarr.reverse()
}



// Other Solutions:
function lastDigit(n, d) {
  const nums = String(n).split('').map(Number);
  const len = nums.length;
  let index = 0;
  return nums.filter(el => index++ >= len - d);
}

function lastDigit(n, d) {
  return (n + '').split('').splice(-d,d).map(Number)
}

function lastDigit(n, d) {
  const arr = [...n+[]].map(Number)
  return arr.slice( d > arr.length ? 0 : arr.length - d, )
}