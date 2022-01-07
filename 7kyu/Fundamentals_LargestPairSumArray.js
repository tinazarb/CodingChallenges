// Challenge
Largest pair sum in array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.



// My Solution:
function largestPairSum (numbers) {
  numbers.sort((a,b)=> a-b)
  return numbers[numbers.length-1] + numbers[numbers.length-2]
}

// Other Solutions:
function largestPairSum(numbers){
  numbers.sort(function(a, b){ return b - a });
  return numbers[0] + numbers[1];
}


function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a)
  return a + b
}

const largestPairSum = ($) => $.sort((a, b)=> a > b).slice(-2).reduce((a, b) => a + b, 0)


function largestPairSum(numbers)
{    numbers.sort(function(a,b){
        return b-a;
    });
    return numbers.shift()+numbers.shift();
}