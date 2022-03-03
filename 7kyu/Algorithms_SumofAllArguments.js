// Challenge
Sum of all arguments

Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15


// My Solution:
function sum() {
  return Array.from(arguments).reduce((a,b)=> a+b)
}


// Other Solutions:
function sum() {
  var sum = 0;
  for(var i=0; i<arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function sum() {
  var total = 0;
  for(var i in arguments){
    total += arguments[i];
  }
  return total;
}

function sum(...args) {
  return args.reduce((a,b) => a + b)
}

function sum() { return [].reduce.call(arguments, function(s,v){ return s+v },0 ) }
