// Challenge:
Odd or Even?

Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

// My Solution:
function oddOrEven(array){
  let sumArray = array.reduce(function(sum, item){
    return sum + item
  }, 0);
if (sumArray % 2 == 0){
  return 'even'
} else{
  return 'odd'
}
}

// Top Solutions:
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
  {result+=array[i];}
  if (result%2 == 0)
  {return "even";}
  else{return "odd";}
}


#arrays