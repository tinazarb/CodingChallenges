// Challenge
Exclamation marks series #5: Remove all exclamation marks from the end of words

Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"


// My Solution:
function remove (string) {
  let arr = string.split(" ")
  let newarr = []
  for (let i=0; i < arr.length; i++){
    if (arr[i].endsWith("!")){
      newarr.push(arr[i].replace(/!+$/, ""))
    } else {newarr.push(arr[i])}
  } return newarr.join(" ")
}



// Other Solutions:
function remove(s){
  return s.replace(/\b!+/g, '');  
}

function remove(s) {
  return s.replace(/(\w)!+/g, '$1');
}

const remove = s => s.replace(/\b!+/g, "");