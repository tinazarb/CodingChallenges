// Challenge
Return the closest number multiple of 10

Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37

Expected output:

20
30
40


// My Solution:
const closestMultiple10 = num => {
  return Math.round(num/10) * 10
};


// Other Solutions:
const closestMultiple10 = num => Math.round(num / 10) * 10;

const closestMultiple10 = num => {
  return Math.round(num/10)*10;
};

