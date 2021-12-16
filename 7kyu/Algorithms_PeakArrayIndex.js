// Challenge
Peak array index

Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

For example:

--For Haskell
peak [1,12,3,3,6,3,1] == Just 2
peak [10,20,30,40]  == Nothing 

The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.

More examples in the test cases.

Good luck!

// My Solution:
function peak(arr){
  let left = 0;
  let right = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if(arr.length == 0){
    return -1;
  }
  for(let i = 0; i < arr.length; i++){
    if(i == 0){
      right = arr.slice(1).reduce(reducer, 0);
      if(right === i){
        return i;
      }
    }else{
      left = arr.slice(0, i).reduce(reducer, 0);
      right = arr.slice(i+1).reduce(reducer, 0);
      if(left == right){
        return i;
      }
    }
  }
  return -1;
}


// Other Solutions:
function peak(arr){
  var sum1=0
  var sum2=0
  var last=arr.length-1
  var first=0
 while(first<last){
   if(sum1>sum2){
     sum2+=arr[last];
     last--;
   }
   else if(sum1<=sum2){
     sum1+=arr[first]
     first++
   }
 }
 return last==first&&sum1==sum2?last:-1
}


function peak(arr) {
  let res = -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).reduce((acc, cur) => acc + cur, 0) 
      === arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0)) {
        res = i;
    }
  }
  
  return res;
}

function peak(arr){
  for(var i=0,l=0,r=arr.reduce((a,b)=>a+b,0);i<arr.length;i++){
    r-=arr[i]
    if(l==r) return i
    l+=arr[i]
  }
  return -1
}