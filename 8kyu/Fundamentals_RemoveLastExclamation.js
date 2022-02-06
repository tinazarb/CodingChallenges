// Challenge
Exclamation marks series #1: Remove an exclamation mark from the end of string

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"


// My Solution:
function remove (string) {
  if (string.endsWith("!")){
    return string.split("").slice(0,-1).join("")
  } else {return string}
}

// Other Solutions:
const remove = s => s.replace(/!$/, '');

function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}

function remove(s){
  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}