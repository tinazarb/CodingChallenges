// Challenge:
Factorial

Your task is to write function factorial.

Test.assertEquals(factorial(0), 1);
Test.assertEquals(factorial(1), 1);
Test.assertEquals(factorial(4), 24);
Test.assertEquals(factorial(7), 5040);
Test.assertEquals(factorial(17), 355687428096000);


// My Solution:
function factorial(n){
  if (n === 0 || n === 1)
    return 1
  for (let i = n - 1; i >= 1; i--) {
    n = n * i
} return n
}

// Other solutions:
function factorial(n){
  return n ? n * factorial(n-1) : 1;
}

function factorial(n){
  return n > 1 ? n * factorial(n-1) : 1;  
}


const factorial=n=>n?n*factorial(n-1):1;