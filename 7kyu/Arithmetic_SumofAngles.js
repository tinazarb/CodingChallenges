// Challenge
Sum of angles

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// My Solution:
function angle(n){
  if (n < 3){
    return 0}
  else {return (n - 2) * 180}
}

// Other Solutions:
const angle = n => (n - 2) * 180;

function angle(n) {
  return 180*(n-2);
}

const angle = n => 180 * (n - 2)