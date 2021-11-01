// Challenge
Fix string case

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


// My Solution:
function solve(s){
  let lowerNum = 0;
  let upperNum = 0;
    for(let i = 0; i <= s.length-1; i += 1){ 
      if(s[i] === s[i].toLowerCase()) {
        lowerNum += 1;
      } else {
        upperNum += 1;
      }
   } 
  return lowerNum >= upperNum ? s.toLowerCase() : s.toUpperCase();
}

// Other Solutions:
function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}


const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

function solve(s){
  return s.replace(/[a-z]/g,'').length>s.length/2 ? s.toUpperCase() : s.toLowerCase()
}

function solve(s){
   let c = 0;
   for (let i = 0; i < s.length; i++) {
     if (s[i] === s[i].toUpperCase()) c++;
   }
   return (c > s.length/2) ? s.toUpperCase() : s.toLowerCase()
}