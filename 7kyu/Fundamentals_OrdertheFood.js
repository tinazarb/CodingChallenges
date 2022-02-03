// Challenge
Coding Meetup #14 - Higher-Order Functions Series - Order the food

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }


// My Solution:
function orderFood(list) {
  let count = {}
  list.forEach(x => count[x.meal] = (count[x.meal] || 0) + 1);
  return count;
}

// Other Solutions:
function orderFood(list) {
  var orders = {};
  list.forEach(d=>{
    if(orders[d.meal]) orders[d.meal]++;
    else orders[d.meal] = 1;
  });
  return orders;
}

const orderFood = a => a.reduce( (acc,v) => ( acc[v.meal] = ( acc[v.meal] || 0 ) + 1, acc ), {} ) ;

function orderFood(list) {
  return list.reduce((acc, x) => {
    acc[x.meal] = (acc[x.meal] || 0) + 1
    return acc
  }, {})
}