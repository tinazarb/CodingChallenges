// Challenge
Sum without highest and lowest number

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6


If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)

-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.


// My Solution:
function sumArray(array){
  if (array == undefined || array == null || array == 0){
    return 0
  } else {
  array = array.sort((a,b) => a-b)
  array.pop()
  array.shift()
  array.push(0)
  array.unshift(0)
  return array.reduce( (a,c)=> a+c )}
}

// Top Solutions:
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}


sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
    : 0
}

function sumArray(array) {
  
  if (array == null || array.length <= 2) {
    return 0
  }
  
  var max = Math.max.apply(Math, array);
  var min = Math.min.apply(Math, array);
  var sum = 0
  
  for (i = 0; i < array.length; i++) {
    sum += array[i];
   }

  return sum - max - min
}

#Fundamentals