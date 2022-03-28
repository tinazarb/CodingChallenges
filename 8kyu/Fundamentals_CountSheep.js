// Challenge
If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


// My Solution:
var countSheep = function (num){
  let str = ""
  for (let i=1; i <= num; i++){
    str += `${i} sheep...`
  } return str
}

// Other Solutions:
var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}

var countSheep = function (num){
  var ret = "";
  for (var i = 1; i <= num; i++) {
    ret += i + " sheep..."
  }
  
  return ret;
}

countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``