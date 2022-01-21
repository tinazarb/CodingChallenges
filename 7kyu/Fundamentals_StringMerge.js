// Challenge:
String Merge!

Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
Examples

("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"




// My Solution:
function stringMerge(string1, string2, letter){
  let word1 = ""
  let arr = string2.split("")
  let newarr = []
 for (let i =0; i < string1.length; i++){
   if (string1[i] != letter){
     word1 += string1[i]
   } else {break}
 } for (let i = 0; i < arr.length; i++){
   if (arr[i] === letter){
     newarr = arr.slice(i, arr.length)
    break
   } else {continue}
 }
return word1 + newarr.join("")
}


// Other Solutions:
const stringMerge = (s1, s2, l) => s1.slice(0, s1.indexOf(l))+ s2.slice(s2.indexOf(l));

stringMerge = (a, b, l) => a.slice(0, a.indexOf(l)) + b.slice(b.indexOf(l));

const stringMerge = (str1, str2, l) => str1.split(l, 1) + str2.substr(str2.indexOf(l));