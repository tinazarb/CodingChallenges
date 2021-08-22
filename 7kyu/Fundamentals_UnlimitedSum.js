// Challenge:
Unlimited Sum

Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

The function should reject any arguments that are not integers, and sum the remaining integers.

sum(1, 2, 3)   // -> 6
sum(1, "2", 3) // -> 4


// My Solution:
function sum(){
  var total = 0;
  for(var i=0; i<arguments.length; i++){
    if(typeof arguments[i] === 'number' && arguments[i] %1 === 0){
      total += arguments[i];
    }
  }
  return total;
}

// Other Solutions:
function sum(){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number' && Math.floor(arguments[i]) === arguments[i]) {
       sum += arguments[i];
    }
  }
  return sum;
};

function sum() {
  return [].slice.apply(arguments).reduce(function(p, c) {return c === ~~c ? p + c : p;}, 0);
}