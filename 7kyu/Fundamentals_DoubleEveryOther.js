// Challenge:
Double Every Other

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]

the function should return :

[1,4,3,8]

// My Solution:
function doubleEveryOther(a) {
  if (a.length === 0) {return a}
  let newArr = [a[0]]
  for (let i=1; i < a.length;i++){
    if ((i+1) %2 ===0){
      newArr.push(a[i] *2)
    } else {newArr.push(a[i])}
  } return newArr
}

// Other Solutions:
function doubleEveryOther(a) {
  for(let i = 1; i < a.length; i += 2) {
    a[i] *= 2;
  }
  return a;
}

const doubleEveryOther = (a) => a.map((c,i) => i % 2 == 0 ? c : 2 * c);

