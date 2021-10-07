// Challenge:
Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
("Sea","urn","pms"), "Supermans"

Note: You can expect all of the inputs to be the same length.

Hint: Remember how we grabbed individual letters from the string in yesterday's problem when not using the methods. Loop through a string and grab the letters from all to add to a new string. 

// My Solution:
function tripleTrouble(one, two, three){
  let combinedStr = ''
  for(let i = 0; i < one.length; i++){
    combinedStr += one[i] + two[i] + three[i]
  }
  return combinedStr
 }


// Other Solutions:
function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}

const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");