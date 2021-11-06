// Challenge
Elevator Distance

Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0

Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

console.log(elevatorDistance([5,2,8]), 9)
console.log(elevatorDistance([7,1,7,1]), 18)
console.log(elevatorDistance([14,29,29]),15)

// My Solution:
function elevatorDistance(array) {
  return Math.abs(array.map((e,i, a) => a[i] - a[i + 1]).filter(x => Number(x)).reduce((a,b) => Math.abs(a) + Math.abs(b)))
}

// Other Solutions:
function elevatorDistance(array) {
  var distance = 0;
  for (var i = 0; i < array.length - 1; i++) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}


function elevatorDistance(array) {
  return array.slice(1).reduce((s,n,i)=>s+Math.abs(n-array[i]),0)
}

const elevatorDistance = ($) => $.slice(1).map((el, i)=> Math.abs($[i] - el)).reduce((a, b)=> a + b, 0)