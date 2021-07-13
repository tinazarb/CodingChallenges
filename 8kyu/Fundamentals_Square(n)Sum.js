// Challenge
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// My Solution:
function squareSum(numbers){
  return numbers.reduce((a, c) => a + c*c, 0)
}

// Top Solutions:
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

#Fundamentals