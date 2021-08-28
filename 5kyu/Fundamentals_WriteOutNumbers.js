// Challenge
Write out numbers

Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.
Examples

number2words(0)  ==>  "zero"
number2words(1)  ==>  "one"
number2words(9)  ==>  "nine"
number2words(10)  ==>  "ten"
number2words(17)  ==>  "seventeen"
number2words(20)  ==>  "twenty"
number2words(21)  ==>  "twenty-one"
number2words(45)  ==>  "forty-five"
number2words(80)  ==>  "eighty"
number2words(99)  ==>  "ninety-nine"
number2words(100)  ==>  "one hundred"
number2words(301)  ==>  "three hundred one"
number2words(799)  ==>  "seven hundred ninety-nine"
number2words(800)  ==>  "eight hundred"
number2words(950)  ==>  "nine hundred fifty"
number2words(1000)  ==>  "one thousand"
number2words(1002)  ==>  "one thousand two"
number2words(3051)  ==>  "three thousand fifty-one"
number2words(7200)  ==>  "seven thousand two hundred"
number2words(7219)  ==>  "seven thousand two hundred nineteen"
number2words(8330)  ==>  "eight thousand three hundred thirty"
number2words(99999)  ==>  "ninety-nine thousand nine hundred ninety-nine"
number2words(888888)  ==>  "eight hundred eighty-eight thousand eight hundred eighty-eight"



// My Solution:
function number2words(n){
    // works for numbers between 0 and 999999
    var b=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var b2=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]
    if(n>=0 && n<20){
      return b[n];
    }
    if(n >= 20 && n<100){
      return b2[Math.floor(n/10)-2]+(n%10===0?'':'-'+b[n%10])
    }
    if(n>=100 && n<1000){
      return b[Math.floor(n/100)]+' hundred'+(n%100===0?'':' '+number2words(n%100));
    }else{
      return number2words(Math.floor(n/1000))+' thousand'+(n%1000===0?'':' '+number2words(n%1000));
    }
  }

// Other Solutions:
function number2words(n) {
  var words = []
  var english = {
    0: 'zero',    10: 'ten',
    1: 'one',     11: 'eleven',
    2: 'two',     12: 'twelve',     20: 'twenty',
    3: 'three',   13: 'thirteen',   30: 'thirty',
    4: 'four',    14: 'fourteen',   40: 'forty',
    5: 'five',    15: 'fifteen',    50: 'fifty',
    6: 'six',     16: 'sixteen',    60: 'sixty',
    7: 'seven',   17: 'seventeen',  70: 'seventy',
    8: 'eight',   18: 'eighteen',   80: 'eighty',
    9: 'nine',    19: 'nineteen',   90: 'ninety',
    100: 'hundred',
    1000: 'thousand'
  }

  if (n < 100 && english[n]) return english[n]

  var p1 = n / 1000 | 0
  var p2 = n % 1000

  if (p1) words.push(hundreds(p1), 'thousand')
  if (p2) words.push(hundreds(p2))

  return words.join(' ')

  function hundreds(n) {
    var words = []
    if (n >= 100) words.push(english[n / 100 | 0], 'hundred')

    var tens = n % 100
    if (tens) {
      if (english[tens]) {
        words.push(english[tens])
      } else {
        words.push(english[(0 | tens / 10) * 10] + '-' + english[tens % 10])
      }
    }

    return words.join(' ')
  }
}



var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2words(n){
  if (n < 20) return num[n];
  var digit = n%10;
  if (n < 100) return tens[Math.floor(n/10)-2] + (digit ? "-"+num[digit] : "");
  if (n < 1000) return num[Math.floor(n/100)] +" hundred" + (n%100 == 0 ? "" : " " + number2words(n%100));
  return number2words(Math.floor(n/1000)) + " thousand" + (n%1000 != 0 ? " " +number2words(n%1000) : "");
}