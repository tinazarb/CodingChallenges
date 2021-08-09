// Challenge
Is it a palindrome

Write function that checks if a given string (case insensitive) is a palindrome.

// My Solution:
function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
}

// Other Solutions:
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();