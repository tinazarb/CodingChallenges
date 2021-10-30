// Challenge
Even numbers in an array

Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]



// My Solution:
function evenNumbers(array, number) {
  let result = [];
  array.map (x => {
    if (x % 2 === 0)
    result.push(x)})
  return result.splice(-number)
}

// Other Solutions:
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);


const evenNumbers = (a, n) => a.filter(x => !(x % 2)).splice(-n);


function evenNumbers(array, number) {
 var EvenNumbers= [];
 
 for(var i=0; i<=array.length; i++)
  {
      if(array[i] % 2 ==0)
        EvenNumbers.push(array[i]);
  }
 
   return EvenNumbers.splice(EvenNumbers.length-number,number);
   
}