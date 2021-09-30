// Challenge
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.


// My Solution:
String.prototype.toAlternatingCase = function () {
  this.split("");
  let newArr = []
  for (let i=0; i<this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      newArr.push(this[i].toLowerCase())
    } else (newArr.push(this[i].toUpperCase()))
  } return newArr.join("").toString()
}

// function toAlternatingCase (str) {
//   str.split("");
//   let newArr = []
//   for (let i=0; i<str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newArr.push(str[i].toLowerCase())
//     } else (newArr.push(str[i].toUpperCase()))
//   } return newArr.join("").toString()
// }

// Other Solutions:
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


String.prototype.toAlternatingCase = function () {
  new_str = "";
  for(var i = 0; i < this.length; i++) {
    if(this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    }
    else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
}


const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};


String.prototype.toAlternatingCase = function(){
  return this.split("").map(letter => {
    var newLetter = letter.toUpperCase();
    return letter == newLetter ? letter.toLowerCase() : newLetter;
  }).join("");
}