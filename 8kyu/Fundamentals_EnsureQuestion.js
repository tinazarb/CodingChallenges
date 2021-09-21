// Challenge
Ensure question

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"

console.log(ensureQuestion(""),"?","Expected: '?'");
console.log(ensureQuestion("Yes"),"Yes?","Expected: '?'");
console.log(ensureQuestion("No?"),"No?","Expected: '?'");

// My Solution:
function ensureQuestion(s) {
  if (s.endsWith("?")){
    return s
  } else {
      return s + "?"
  }
}

// Other Solutions:
const ensureQuestion = s => s.endsWith('?') ? s : s+'?'

function ensureQuestion(s) {
    // Code here
    return s[s.length-1] === '?' ? s : `${s}?`
}


function ensureQuestion(s) {
  // Code here
  return s.includes('?') ? s : `${s}?`;
}