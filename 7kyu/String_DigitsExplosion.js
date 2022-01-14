// Challenge:
Digits explosion

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

explode("312"); // => "333122"
explode("102269"); // => "12222666666999999999"



// My Solution:
function explode(s) {
  let arr = s.split("")
  let newArr = []
  for (let i =0; i < arr.length; i++){
    newArr.push(arr[i].repeat(arr[i]))
  } return newArr.join("")
}

// Other Solutions:
const explode = s => s.replace(/\d/g, d => d.repeat(d));


function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}

const explode = s =>
  s.replace(/\d/g, val => val.repeat(val));