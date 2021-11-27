// Challenge:
Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).


// My Solution:
function isTriangle(a,b,c){
 if (a <= 0 || b <= 0 || c <= 0){
    return false}
if (a+b > c && a+c > b && c+b > a){
  return true}
 else {return false}
}

// Other Solutions:
function isTriangle(a,b,c){ 
  return a + b > c && a + c > b && c + b > a;
}

function isTriangle(a,b,c){
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  return a+b > c;
}

var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2