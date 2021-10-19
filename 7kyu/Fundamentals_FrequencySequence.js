// Challenge
Frequency sequence

Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"


// My Solution:
function freqSeq(str, sep) {
  let freq = {};
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]]) ? freq[str[i]] += 1 : 1;
  }
  for (let i = 0; i < str.length; i++) {
    newStr += (i) ? sep + freq[str[i]] : freq[str[i]];
  }
  return newStr
}

// Other Solutions:
function freqSeq(str, sep) {
  return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
}


function freqSeq(str, sep) {
  let letters = str.split("");
  var count = letters.reduce(function(acc, l) {
    acc[l] = acc[l] ? acc[l] + 1 : 1;
    return acc;
  }, {});
  return letters.map(l => count[l]).join(sep);
}


const freqSeq = (s, sep) => s.split("").map(i => s.split(i).length - 1).join(sep)

const freqSeq = (str, sep) =>
  [...str].map(val => --str.split(val).length).join(sep);