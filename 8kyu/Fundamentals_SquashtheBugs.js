// Challenge
Squash the bugs

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

console.log(findLongest("Take me to tinseltown with you"), 10)

// My Solution:
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest
}

// Other Solutions:
function findLongest(str) {
  var spl = str.split(" "),
      longest = 0;
  
  for (var i in spl) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }

  return longest;
}


function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
    }
    return longest;
}