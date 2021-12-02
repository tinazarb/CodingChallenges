// Challenge
Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.


// My Solution:
const booleanToString = b => b.toString()

// Top Solutions:
function booleanToString(b){
  return b ? 'true' : 'false';
}

function booleanToString(b){
  return `${b}`
}

const booleanToString = b => b ? 'true' : 'false';

function booleanToString(b){
  return b+'';
}