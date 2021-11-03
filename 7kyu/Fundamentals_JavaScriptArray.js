// Challenge
JavaScript Array Filter

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]


// My Solution:
function getEvenNumbers(numbersArray){
  return numbersArray.filter(x => x % 2 == 0)
}

// Other Solutions:
function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(n){
    return n % 2 == 0;
  });
}

const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}