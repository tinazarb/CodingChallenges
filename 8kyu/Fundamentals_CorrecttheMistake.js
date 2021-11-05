// Challenge
Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.

console.log(correct("L0ND0N"),"LONDON")

// My Solution:
function correct(string){
  return string.split("").map(x => x == "0" ? x = "O" : x == "1" ? x = "I" : x == "5" ? x = "S" : x).join("")
}

// Other Solutions:
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}

const correct = string => string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");


function correct(string) {
  return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
}