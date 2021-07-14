// Challenge
Remove consecutive duplicate words

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

// My Solution:
function removeConsecutiveDuplicates (s) {
  return s.split(" ").filter((e,i,arr) => e != arr[i-1] ).join(" ")
}


// Other Solutions:
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

// double words out
const removeConsecutiveDuplicates = s =>{
  const out = [];
  s = s.split(' ');
  for (let i = 1; i <= s.length; i++){
    if (s[i] !== s[i-1]){
      out.push(s[i-1])
    }
  }
  return out.join(' ')
}


const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')

#Fundamentals