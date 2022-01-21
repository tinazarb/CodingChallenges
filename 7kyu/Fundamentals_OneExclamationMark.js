// Challenge
Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark 

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
Examples

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

// My Solution:
function remove (string) {
  let arr = string.split(' ')
  let newarr = []
  for (let i=0; i< arr.length; i++){
    if (arr[i].includes("!")){
      let count = 0
      let word = arr[i]
      for (let i=0; i< word.length; i++){
        if (word[i] === "!"){
          count++
        } 
      } if (count === 0 || count > 1){
        newarr.push(arr[i])
      } 
    } else {newarr.push(arr[i])}
} if (newarr.length === 0) {return ""}
 else {return newarr.join(" ")}
}


// Other Solutions:
function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}

const remove = $ => $.split(/\s+/).filter(el => !/^(!\w+|\w+!)$/.test(el)).join(" ")

function remove(s) {
  return s.split(/\s+/).filter(w => !/^(!\w+|\w+!)$/.test(w)).join(" ")
}

