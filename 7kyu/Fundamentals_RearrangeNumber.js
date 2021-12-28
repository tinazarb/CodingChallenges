// Challenge
Rearrange Number to Get its Maximum

Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return `nil` if the argument is not valid.

Returm null if the argument is invalid.

maxRedigit(123) --> 321


// My Solution:
var maxRedigit = function(num) {
 if (num < 100 || num > 999){
   return null
 } else {
   return Number(num.toString().split("").sort((a,b) => b-a).join(""))
   }
};


// Other Solutions:
var maxRedigit = function(num) {
  if(num < 100 || num > 999)
    return null
  return +num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
};


var maxRedigit = function(num) {
  return num > 99 && num < 1000 ? +String(num).split('').sort().reverse().join('') : null;
};


var maxRedigit = function(num) {
  if (num < 100 || num > 999) return null
  
  return +[...(`${num}`)].sort().reverse().join``
}




