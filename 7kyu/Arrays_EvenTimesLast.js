// Challenge:
Even Times Last

Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.


// My Solution:
function evenLast(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i += 2) {
        total = total + numbers[i]}
        if (total > 0){
            return total * numbers[numbers.length - 1]}
        else {
           return 0
    }
}

// Top Solutions:
function evenLast(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 2) {
    sum += numbers[i];
  }
  return sum * numbers[numbers.length - 1];
}


const evenLast = n => n.reduce((p, c, i) => i % 2 ? p : p + c, 0) * n[n.length - 1] || 0


#arrays