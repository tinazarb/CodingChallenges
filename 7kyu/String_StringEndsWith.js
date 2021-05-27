// Challenge:
String ends with

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


// My Solution:
function solution(str, ending){
  if (str.endsWith(ending)){
    return true
  } else {
    return false
  }
}

// Top Solutions:
function solution(str, ending){
  return str.endsWith(ending);
}

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}

#strings
