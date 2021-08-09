// Challenge:

Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// My Solution:
function fizzBuzz(num){
  const output = []
  for(let i = 1; i <= num; i++){
    if(i % 6 === 0){
      output.push('Fizz Buzz')
    }else if(i % 2 === 0){
      output.push('Fizz')
    }else if(i % 3 === 0){
      output.push('Buzz')
    }else{
      output.push(i)
    }
  }
  return output
}

console.log(fizzBuzz(60))
//[
  1,      'Fizz',      'Buzz', 'Fizz',
  5,      'Fizz Buzz', 7,      'Fizz',
  'Buzz', 'Fizz',      11,     'Fizz Buzz',
  13,     'Fizz',      'Buzz', 'Fizz',
  17,     'Fizz Buzz', 19,     'Fizz',
  'Buzz', 'Fizz',      23,     'Fizz Buzz',
  25,     'Fizz',      'Buzz', 'Fizz',
  29,     'Fizz Buzz', 31,     'Fizz',
  'Buzz', 'Fizz',      35,     'Fizz Buzz',
  37,     'Fizz',      'Buzz', 'Fizz',
  41,     'Fizz Buzz', 43,     'Fizz',
  'Buzz', 'Fizz',      47,     'Fizz Buzz',
  49,     'Fizz',      'Buzz', 'Fizz',
  53,     'Fizz Buzz', 55,     'Fizz',
  'Buzz', 'Fizz',      59,     'Fizz Buzz'
]