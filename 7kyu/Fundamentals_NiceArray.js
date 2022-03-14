// Challenge
Nice Array

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.

example:

[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

// My Solution:
function isNice(arr){ 
  if (arr.length < 1) {return false}
let newarr = arr.filter(x => arr.indexOf(x + 1) >= 0 || arr.indexOf(x - 1) >=0)
if ((newarr.length === arr.length)){
  return true
} else {return false}
}

// Other Solutions:
function isNice(arr){
  return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}

function isNice(arr){
    var counter = 0
    for(var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter ++
    }
    if (counter == arr.length && arr.length != 0) return true
    return false
}

const isNice = arr => Boolean(arr.length) && arr.every(e=> arr.includes(e-1) || arr.includes(e+1));

function isNice(arr){
let niceCount = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] === arr[j]-1 || arr[i] === arr[j]+1){
        niceCount++;
        break;
      }
    }
  }
  return (niceCount === arr.length && arr.length !== 0)
}