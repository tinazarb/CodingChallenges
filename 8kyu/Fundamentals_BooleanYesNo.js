// Challenge
Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My Solution:
const boolToWord = bool => bool ? 'Yes' : 'No'

// Top Solutions:
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}


function boolToWord( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

function boolToWord( bool ){
  if( bool ){
    return "Yes";
  }
  return "No";
}