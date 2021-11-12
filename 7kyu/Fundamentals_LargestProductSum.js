// Challenge:
Larger Product or Sum

For this Kata you will be given an array of numbers and another number n. You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers of the array, and compare the two.

If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"

Note The array will never be empty and n will always be smaller than the length of the array.
Example

sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // => "product"

Explanation

The sum of the 3 highest numbers is 41 + 36 + 20 = 97

The product of the lowest 3 numbers is 8 x 9 x 10 = 720

The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"


console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), "sum")

console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3), "product")

// My Solution:
function sumOrProduct(array, n) {
 let sumArr = array.sort((a,b) => a-b).slice(-n)
 let productArr = array.sort((a,b) => a-b).slice(0,n)
 let sum = 0
 let product = 1
 for (let i = 0; i < sumArr.length; i++){
   sum += sumArr[i]
 } for (let i = 0; i < productArr.length; i++){
   product *= productArr[i]
 }
  if (sum > product) {
    return "sum"
  } else if (sum == product) {
    return "same"
  } else {return "product"}
}

// Other solutions:
const sumOrProduct = (arr, n) => {
  const sorted = arr.sort((a, b) => a - b);
  const sum = sorted.slice(-n).reduce((acc, i) => acc + i);
  const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1);
  return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}


function sumOrProduct(array, n) {
  let end = array.length - 1
  ,  sort = array.slice().sort((a, b) => a - b)
  ,   sum = 0
  ,  prod = 1;
  for (let i = 0; i < n; i++) {
    sum += sort[end - i];
    prod *= sort[i];
  }
  if (sum > prod)
    return 'sum';
  if (sum < prod)
    return 'product';  
  return 'same';
}


function sumOrProduct(array, n) {
  let a = array.sort((a,b)=>a-b);
  let s = a.slice(-n).reduce((a,b)=>a+b);
  let p = a.slice(0,n).reduce((a,b)=>a*b);
  return s==p ? 'same' : s<p ? 'product':'sum';
}