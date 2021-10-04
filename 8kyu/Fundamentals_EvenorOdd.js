// Challenge
Even or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Solution:
function even_or_odd(number) {
  if (number % 2 == 0){
    return "Even"
  } else {
    return "Odd"
  }
}


// Other Solutions:
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

function even_or_odd(number) {
   return number % 2 === 0 ? 'Even' : 'Odd';
}

const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';