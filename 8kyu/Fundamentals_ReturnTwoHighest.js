// Challenge
Return Two Highest Values in List

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

console.log(twoHighest([15]), [15])
console.log(twoHighest([15, 20, 20, 17]), [20, 17])
console.log(twoHighest([]), [])
console.log(twoHighest([17298,27643,1494,28651,82500]), [82500, 28651])
console.log(twoHighest([25201,16451,94981,6223,72426,46526,44935,9944,69837,5598,43432,56649,10420,56969,66995,4416,82831,4221,59498,8301,81156,53745,32613,39552,42036,94126,29130,83677,30874,53664,83514,20244,39016,16376,97916,18668,47684,9736,99298,65888,16739,56681,98772,81928,93760,90844,62155,72033,47271,41403]),[ 99298, 98772])


// My Solution:
function twoHighest(arr) {
  return arr.sort((a,b)=> (a-b)).filter((value,index) => arr.indexOf(value) === index).slice(-2).reverse()
}


// Other Solutions:
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}

