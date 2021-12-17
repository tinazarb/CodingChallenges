// Challenge
Vowel remover

Create a function called shortcut to remove all the lowercase vowels in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

Don't worry about uppercase vowels.


// My Solution:
function shortcut(string){
    let newStr = "",
    i;
    for (i = 0; i < string.length; i++) {
        if ("aeiou".includes(string[i])) continue;
        newStr += string[i];
    }
    return newStr;
}

// Other Solutions:
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

function shortcut(string){
  return string.replace(/[aeiou]/gi, '');
}

function shortcut(str) {
  return str.split('').filter(function(e) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
  }).join('')
}

function shortcut(string){
  var vowels = "aeiou";
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (!(vowels.indexOf(string[i]) > -1)) {
      output += string[i];
    }
  }
  return output;
}


function shortcut(string){
let vowels = 'aeiou';

let result = [];

  for( let i = 0; i < string.length; i++){
  if(!vowels.includes(string[i])){
    result.push(string[i]);
  }
}
  return result.join('');
};