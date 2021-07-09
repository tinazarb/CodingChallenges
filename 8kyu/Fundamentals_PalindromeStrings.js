// Challenge
Palindrome strings

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.
Examples

isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false


// My Solution:
function isPalindrome(line) {
  if (line.toString() === line.toString().split("").reverse().join("")) {
    return true
  }
  else {
    return false
  }
}

// Top Solutions:
function isPalindrome(line) {
  return (String(line) == String(line).split('').reverse().join('') )
  
}

function isPalindrome(line) {
  return (line.toString() == line.toString().split('').reverse().join(''));
}

function isPalindrome(line) {
  line = '' + line;
  return line === (line.split('').reverse().join(''));
}

#Fundamentals