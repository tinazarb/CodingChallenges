// Challenge
Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


// My Solution:
function count (string) {  
let charCount = {}
string.split('')
.forEach(c => charCount[c] ? charCount[c]++ : charCount[c]=1)
return charCount;
}


// Other Solutions:
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}

function count (string) {
  var result = {};
  
  for(let i = 0; i < string.length; i++) {
    if(result.hasOwnProperty(string[i])){
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }
  
  return result;
}