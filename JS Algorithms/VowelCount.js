// Challenge:

Given a string of words or phrases, count the number of vowels.

No Regex! Unless that is your brute force...

Hint: create a vowels array and check if each letter in the string is "included" in that vowels array. If a match is found increment a count

// My Solution:
function countVowels(str){
  let count = 0;
  const vowels = "aeiou";
  for (let char of str.toLowerCase()){
    if (vowels.includes(char)){
      count++
    }
  }
  return count
}

console.log(countVowels("hello")) // 2 