// Challenge:
Break Camel Case

Complete the solution so that the function will break up camel casing, using a space between words.

// My Solution:
function solution(string){
   return string.replace(/([A-Z])/g, " $1")
}


// Other Solutions:
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}



#strings