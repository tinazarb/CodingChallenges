// Challenge
Coding Meetup #11 - Higher-Order Functions Series - Find the average age

You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
];

write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:

    The input array will always be valid and formatted as in the example above.
    Age is represented by a number which can be any positive integer.


// My Solution:
function getAverageAge(list) {
  return Math.round((list.map(x => x.age).reduce((a,b)=> a+b))/(list.map(x => x.age).length))
}


// Other Solutions:
function getAverageAge(list) {
  return Math.round(list.reduce((sum,obj) => sum + obj.age, 0) / list.length);
}


function getAverageAge(list) {
  return Math.round(list.reduce((a,c)=>a+c.age,0)/list.length)
}

function getAverageAge(list) {
  let count = 0;
  let sum = 0;
  for (let dev of list) {
    count++;
    sum += dev.age;
  }
  return Math.round( sum / count );
}