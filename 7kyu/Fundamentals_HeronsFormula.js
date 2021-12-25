// Challenge
Heron's formula

Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:
s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)}s∗(s−a)∗(s−b)∗(s−c)
​

where
s=a+b+c2s = \frac{a + b + c} 2s=2a+b+c​

Output should have 2 digits precision.



// My Solution:
function heron(a,b,c) {
  let s = (a + b + c) /2
  return Math.sqrt(s * (s-a) * (s-b) * (s-c))
}

// Other Solutions:
function heron(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
}

function heron(a, b, c) {
  var s = parseInt((a + b + c)/2);
  return Math.sqrt(s*(s - a)*(s - b)*(s - c));
}

const heron = (a, b, c) =>
  Math.round((4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2) ** .5 * 25) / 1e2;