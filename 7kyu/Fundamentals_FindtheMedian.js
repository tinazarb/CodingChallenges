// Challenge:
All Star Code Challenge #14 - Find the median

Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

Write a function that takes an array of integers as an argument and returns the median of those integers.

Notes:

    The sorting step is vital.
    Input arrays are non-empty.

Examples

Median of [33,99,100,30,29,50] is 41.5.
Median of [3,2,1] is 2.

// My Solution:
function median(array) {
  let newArr = array.sort((a,b) => a-b)
  if (newArr.length % 2 == 0){
    for (let i = Math.floor((newArr.length -1) / 2); i < array.length ; i++){
      return (newArr[i] + newArr[i+1]) /2
    }
  } else {
    return newArr[Math.floor((newArr.length -1) / 2)]
  }
}


// Other solutions:
var median = (arr) => {
  const start = arr.length/2 + 0.9|0
  const end = arr.length % 2 ? 1 : 2
  return arr.sort((i,j) =>i-j).slice(start-1, start+end-1).reduce((a,b)=> a+b)/end
}

function median(array) {
  const m = Math.floor(array.length / 2);
  array = array.sort((a, b) => a - b);
  if (array.length % 2 === 0)
    return (array[m-1] + array[m]) / 2;
  return array[m];
}

function median(array) {
  var marray = array.slice();
  marray.sort((a,b) => a-b);
  if(marray.length % 2 == 0)
  {
    return (marray[marray.length/2 - 1] + marray[marray.length/2]) / 2;
  }
  else
  {
    return marray[Math.floor(marray.length/2)];
  }
}