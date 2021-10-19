// Challenge
Nth Smallest Element (Array Series #4) 

Given an array/list [] of integers , Find the Nth smallest element in this array of integers

Array/list size is at least 3 .

Array/list's numbers could be a mixture of positives , negatives and zeros .

Repetition in array/list's numbers could occur , so don't Remove Duplications .

nthSmallest({3,1,2} ,2) ==> return (2) 
Since the passed number is 2 , Then * the second smallest element in this array/list is 2*

nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 


// My Solution:
function nthSmallest(arr, pos){
  return arr.sort((a,b) => a-b)[pos-1]
}

// Other Solutions:
const nthSmallest=(arr, pos)=>arr.sort((a,b)=>a-b)[pos-1];

function nthSmallest(arr, pos){
  let sorted = arr.sort((a,b) => a-b);
  
  return sorted[pos-1];
}