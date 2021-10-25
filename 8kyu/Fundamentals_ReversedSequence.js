// Challenge
Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

// My Solution:
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i>0; i--) {
    arr.push(i)
  }
  return arr;
};

// Other Solutions:
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};


const reverseSeq = n => {
  return Array.from({length:n},(_,i)=>n-i);
};

const reverseSeq = n => [...Array(n)].map((_, i) => n - i);