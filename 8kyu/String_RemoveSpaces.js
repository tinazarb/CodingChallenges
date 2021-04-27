// Challenge:
Simple, remove the spaces from the string, then return the resultant string.

// My Solution:
function noSpace(x){
  return x.split(' ').join('')
}

// Top Solutions:
function noSpace(x){
  return x.replace(/\s/g, '');
}

function noSpace(x){return x.split(' ').join('')}

#strings