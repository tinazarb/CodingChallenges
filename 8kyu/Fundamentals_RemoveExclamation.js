// Challenge
Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples

remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"

// My Solution:
function remove (string) {
  return string.split('!').join('') + '!'
}


// Other Solutions:
const remove = s => s.replace(/!+/g, "")+"!";

function remove(s){
  return s.replace(/!/g, '') + "!"
}

function remove(s){
  return s.replace(/!/g, '').concat('!');
}