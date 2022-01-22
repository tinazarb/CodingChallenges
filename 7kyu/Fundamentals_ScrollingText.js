// Challenge:
Scrolling Text

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
Example

scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

// My Solution:
function scrollingText(text){
  text = text.toUpperCase();
  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}

// Other solutions:
function scrollingText(text){
  let result = []
  for( var i = 0; i < text.length; i++){
    result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
  }
  return result
}


function scrollingText(text, result = []){
  let word = text.toUpperCase();
  for (let i = 0; i < text.length; i++){
    result.push(word);
    word = word.slice(1) + word[0];
  }
  return result
}