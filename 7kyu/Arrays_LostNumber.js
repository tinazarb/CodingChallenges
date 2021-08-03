// Challenge:
Lost number in number sequence

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).


// My Solution:
function findDeletedNumber(arr, mixArr) {
  let tot1 = arr.reduce((a,b) => a+b,0);
  let tot2 = mixArr.reduce((a,b) => a+b,0);
  return tot1 - tot2
}

// Other Solutions:
function findDeletedNumber(arr, mixArr) {
  return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
}

function findDeletedNumber(arr, mixArr) {
  if(arr.length === mixArr.length) return 0;
  for(var k in arr)
    if(mixArr.indexOf(arr[k]) === -1)
      return arr[k];
  return 0;
}

function findDeletedNumber(arr, mixArr) {
  for(let i = 0; i < arr.length; i++) {
    if(mixArr.indexOf(arr[i]) < 0) {
      return arr[i];
    }
  }
  return 0;
}