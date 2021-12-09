// Challenge:
getNames()

The following code is not giving the expected results. Can you figure out what the issue is?

The following is an example of data that would be passed in to the function.

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

getNames(data) // should return ['Joe', 'Bill', 'Kate']

// My Solution:
function getNames(data){
  return data.map(function(item){return item.name});
}

// Other Solutions:
function getNames(data){
  return data.map(item => item.name);
}


function getNames(data){
  return data.map(i => i.name);
}
