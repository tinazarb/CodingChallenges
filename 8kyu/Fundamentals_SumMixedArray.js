// Challenge
Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 


// My Solution:
function sumMix(x){
  return x.map(y => Number(y)).reduce((a,c)=> a+c )
}

// Top Solutions:
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

const sumMix=x=>x.reduce((a,b)=>+b+a,0)

function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}


#Fundamentals