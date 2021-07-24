// Challenge:
Sort by Last Char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

// My Solution:
function last(x){
   return x.split(" ").sort((a,b) => a[a.length -1] > b[b.length -1])   
}


// Other Solutions:
const lastChar = (str) => (str[str.length - 1] || '');
const sorter = (a, b) => lastChar(a).localeCompare(lastChar(b));
const last = (str) => str.split(' ').sort(sorter);

function last (words) {
  return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}

const last = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))
