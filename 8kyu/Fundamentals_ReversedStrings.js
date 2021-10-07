// Challenge
Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'


// My Solution:
function solution(str){
  return str.split('').reverse().join('')
}

// Other Solutions:
const solution = str => str.split('').reverse().join('');

const solution = s => [...s].reverse().join('')

