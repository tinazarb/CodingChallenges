// Challenge:
Alternate case

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


// My Solution:
function alternateCase(s) {
  let newStr = ""
  for (let i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      newStr += s[i].toLowerCase()
    } else if (s[i] === s[i].toLowerCase()){
      newStr += s[i].toUpperCase()
  } else {newStr += s[i]}
} return newStr
}

// Other Solutions:
function alternateCase(s) {
  return s.split('').map(function(el) {
    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
  }).join('');
}

alternateCase = (s) => s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');

function alternateCase(s) {
  return s.replace(/([a-z])|[A-Z]/g,(a,b)=>b?a.toUpperCase():a.toLowerCase());
}