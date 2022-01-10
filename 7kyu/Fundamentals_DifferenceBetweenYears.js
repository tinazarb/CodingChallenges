// Challenge
Difference between years. (Level 1)

Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.
Examples:

'1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
'2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18

At this level, you don't need validate months and days to calculate the difference.

// My Solution:
var howManyYears = function(date1, date2){
  let arr1 = date1.split("/")
  let arr2 = date2.split("/")
  return Math.abs(arr1[0] - arr2[0])
}

// Other Solutions:
var howManyYears = function(date1, date2){
  return Math.abs(date1.split('/')[0] - date2.split('/')[0]);
}

var howManyYears = function(date1, date2) {
  const year = s => +s.split('/')[0];
  return Math.abs(year(date1) - year(date2));
}

var howManyYears = ($1, $2) => Math.abs( $1.split('/')[0] - $2.split('/')[0] )

