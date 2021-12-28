// Challenge:
Incrementer

Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 (and not 0).

Your result can only contain single digit numbers, so if adding a digit with it's position gives you a multiple-digit number, only the last digit of the number should be returned.
Notes:

    return an empty array if your array is empty
    arrays will only contain numbers so don't worry about checking that

Examples

[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]

[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2


// My Solution:
function incrementer(nums) { 
  let newArr = []
  for (let i = 0; i <nums.length; i++){
    let sum = nums[i] + (i+1)
    if (sum < 10){
      newArr.push(sum)}
    else {
     let newSum = Number(sum.toString().split("").pop())
     newArr.push(newSum)
    }
    }return newArr
} 

// Other Solutions:
function incrementer(num) { 
  return num.map((a,i) => (a+i+1)%10);
}

function incrementer(num) { 
  var arr=[];
  for (var i=0; i<num.length; ++i)
    arr.push((num[i]+i+1)%10)
  return arr;
}

var incrementer=a=>a.map((a,i)=>+((a+i+1)+'').slice(-1))

const incrementer = $ => 
      $.map((el, i)=> el + i + 1).map(String).map(e=> e.slice(-1)).map(Number)