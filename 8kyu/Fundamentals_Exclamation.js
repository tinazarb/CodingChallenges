// Challenge:
Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// My Solution:
function removeExclamationMarks(s) {
  return s.replace(/!/g,'');
}

// Top Solutions:
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

#Fundamentals