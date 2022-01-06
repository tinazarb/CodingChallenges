// Challenge
Simple remove duplicates

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:

For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3

Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!



// My Solution:
function solve(arr) {
let result = [];
  for (let i = arr.length-1; i >= 0; i--) {
    let exists = false;
    for (let j = result.length-1; j >= 0; j--) {
      if (arr[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.unshift(arr[i]);
    }
  }
  return result;
}

// Other Solutions:
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}


const solve = arr => [...new Set(arr.reverse())].reverse()


function solve(arr){
  var a=[];
  var ar=arr.reverse();
  for (var i=0; i<ar.length; ++i)
    if (a.indexOf(ar[i])==-1)
      a.push(ar[i]);
  return a.reverse();
}