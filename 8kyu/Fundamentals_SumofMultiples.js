// Challenge
Sum of Multiples

 Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"



// My Solution:
function sumMul(n,m){
if (m < 0 || m ===0){
  return "INVALID"}
  let sum = 0
for (let i = 0; i<m; i++){
  if (i*n < m){
    sum += i * n
  }
} return sum
}

// Other Solutions:
function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}


const sumMul = (n, m) => ~~(m/n) * (m+n - m%n) / 2 || 'INVALID';

function sumMul(n,m){
  return m<=n ? "INVALID" : Math.floor(m/n)*(Math.floor(m/n)+1)*(n/2);
}