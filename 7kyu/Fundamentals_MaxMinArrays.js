// Challenge
Max-min arrays

In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on. 

solve([91,75,86,14,82]),[91,14,86,75,82]);
solve([84,79,76,61,78]),[84,61,79,76,78]);


// My Solution:
function solve(arr){
  return arr.sort((a, b) => b - a).slice().map((value, index) => index % 2 ? arr.pop() : arr[index / 2])
}

// Other Solutions:
function solve(arr){
  var minMax = [];
  arr.sort((a,b)=>a-b);
  for(var i = 0, j = arr.length-1; i <= j; i++,j--){
    if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
    else minMax.push(arr[i]);
  }
  return minMax;
}