// Challenge:
Merge two arrays

Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

Points:

    The arrays may be of different lengths, with at least one character/digit.
    One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).



// My Solution:
function mergeArrays(a, b) {
  let maxLength = Math.max(a.length, b.length);
  let result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }
  return result.filter((value) => value !== undefined);
}

// Other solutions:
function mergeArrays(a, b) {
  // your code here
  var returnArray = [];
  var counter = 0;
  while (a[counter] || b[counter] ){
    if(a[counter]){
      returnArray.push(a[counter]);
    }
    if(b[counter]){
      returnArray.push(b[counter]);
    }
    counter++;
    
   }
   return returnArray;
}


function mergeArrays(a, b) {
  let j = [],
      longest = a.length > b.length ? a:b;
  for (var i=0; i<longest.length; i++){
    if (a[i]) j.push(a[i])
    if (b[i]) j.push(b[i])
  }
  return j
}


function mergeArrays(a, b) {
  var answer = [];
  for (i = 0; i < Math.max(a.length, b.length); i++){
    if (i < a.length) {answer.push(a[i]);}
    if (i < b.length) {answer.push(b[i]);}
  }
  return answer; 
}