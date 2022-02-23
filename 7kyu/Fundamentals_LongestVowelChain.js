// Challenge:
Longest vowel chain

The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

Test.assertEquals(solve("codewarriors"),2);
Test.assertEquals(solve("suoidea"),3);
Test.assertEquals(solve("ultrarevolutionariees"),3);
Test.assertEquals(solve("strengthlessnesses"),1);
Test.assertEquals(solve("cuboideonavicuare"),2);
Test.assertEquals(solve("chrononhotonthuooaos"),5);
Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);

// My Solution:
function solve(s){
    let count = 0, res = 0;
    let str = s.split("");
    for(let i = 0; i < s.length; i++){
      if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
            count++}
        else { 
          res = Math.max(res, count);
            count = 0;
        }
    }
    return Math.max(res, count);
}

// Other solutions:
function solve(s) {
  let cur = 0
  let max = 0
  for (let i = 0; i < s.length; ++i) {
    if ("aeiou".includes(s[i])) {
      cur++
      if (cur > max) {
        max = cur
      }
    } else {
      cur = 0
    }
  }
  return max
}


function solve(s){
 return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
}