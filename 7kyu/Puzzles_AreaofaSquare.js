// Challenge
Area of a Square

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

console.log(squareArea(2)); // 1.62
console.log(squareArea(0)); // 0
console.log(squareArea(14.05)); // 80

// My Solution:
function squareArea(A) {
  let a = A / (2 * Math.PI * (90 / 360));
  let area = Math.pow(a, 2);
  return Number(area.toFixed(2));
}

// Other Solutions:
function squareArea(A){
  var circum = 4 * A;
  var radius = circum / (2 * Math.PI);
  var area = Math.pow(radius, 2);
  return Math.round(area*100)/100
}

function squareArea(A){
  return Math.round(Math.pow(A*2/Math.PI,2) * 100) /100
}

const squareArea = A => Math.round(Math.pow((2*A/Math.PI),2)*100)/100