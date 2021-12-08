// Challenge
16+18=214

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

assert.strictEqual(add(16, 18), 214);
assert.strictEqual(add(26, 39), 515);
assert.strictEqual(add(122, 81), 1103)

// My Solution:
unction add(num1, num2) {
        var a = num1.toString();
        var b = num2.toString();
        var maxLength = Math.max(a.length, b.length);
        var s = '';

        for (var i = maxLength - 1; i >= 0; --i) {

            var indexA = a.length - (i + 1);
            var indexB = b.length - (i + 1);

            var valueA = (indexA >= 0)? parseInt(a[indexA]) : 0;
            var valueB = (indexB >= 0)? parseInt(b[indexB]) : 0;

            s += (valueA + valueB);
        }
        return Number(s);
}

// Other Solutions:
function add(num1, num2) {
    num1 = num1.toString().split("").reverse().join("");
    num2 = num2.toString().split("").reverse().join("");
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }
   var returnString = "";
    for (var i = 0; i < num1.length; i++) {
        var int1 = parseInt(num1[i]);
        var int2 = parseInt(num2[i] || 0);     
        returnString = (int1+ int2).toString()+returnString;
    }   
    return parseInt(returnString);
}


function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse()
  let arr2 = num2.toString().split('').reverse()
  let arr3 = []
  for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
  }
  return parseInt(arr3.reverse().join(''));
}