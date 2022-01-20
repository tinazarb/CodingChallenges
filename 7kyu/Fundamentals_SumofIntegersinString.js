// Challenge:
Sum of integers in string

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.


console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635))

// My Solution:
function sumOfIntegersInString(s){
 return s.split(/(\d+)/).map(x => Number(x)).filter(Boolean).reduce((a,b)=> a+b,0)
}


// Other Solutions:
function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}


function sumOfIntegersInString(s){
return s.replace(/\D/gi,' ')
        .split(" ")
        .map(value=>Number(value))
        .reduce((a,b)=>a+b); 
}

const sumOfIntegersInString = (s) => (s.match(/[0-9]+/g) || []).reduce((a,b) => a+b*1,0);