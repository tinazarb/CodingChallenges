// Challenge:
String array duplicates

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"]
    dup(["kelless","keenness"]) = ["keles","kenes"]
    dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);

Strings will be lowercase only, no spaces. See test cases for more examples.

// My Solution:
function dup(s) {
  return s.map((str)=>
  str.split('').filter((e,i)=>e !== str[i-1]).join('')
)
};


// Other Solutions:
function dup(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};

function dup(s) {
  return s.map(w => {
    return w.split('').filter((c, i, arr) => {
      return c !== arr[i - 1];
    }).join('');
  });
};