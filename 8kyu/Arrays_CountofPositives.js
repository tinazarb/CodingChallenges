// Challenge:
Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input array is empty or null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My Solution:
function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  if (!input || input.length < 1) {return []}
  for (let i=0; i<input.length; i++){
    if (input[i] > 0){
      count++
    } else if (input[i]<0){
      sum += input[i]
    }}
  if ([count, sum].reduce((a,b)=> a+b) === 0){
      return []
  } else {return [count, sum]}
}


// Other Solutions:
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    var positive = 0;
    var negative = 0;
    for (var i=0, l=input.length; i<l; ++i)
    {if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];}  
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}