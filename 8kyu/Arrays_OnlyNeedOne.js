// Challenge:
Counting Sheep
You only need one - Beginner

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.


// My Solution:
function check(a, x) {
  if (a.includes(x)) {
    return true
  } else {
    return false
  }
}

// Top Solutions:
const check = (a,x) => a.includes(x);

function check(a,x){
  return a.includes(x);
};


function check(a,x){
  var result = false;
  for(i = 0; i < a.length; i++){
    if(a[i]==x){
    result  = true;
    }
   
  }
  return result;
};

#arrays