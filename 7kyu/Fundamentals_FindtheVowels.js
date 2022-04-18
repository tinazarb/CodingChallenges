// Challenge:
Find the vowels

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES

    Vowels in this context refers to: a e i o u y (including upper case)
    This is indexed from [1..n] (not zero indexed!)

// My Solution:
function vowelIndices(word){
  let arr = []
   word.toLowerCase().split("").forEach((x,i) => {if ("aeiouy".includes(x)) {arr.push(i+1)}})
   return arr
}


// Other Solutions:
function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}

function vowelIndices(word,a=[]){
  return (word.replace(/[aeiouy]/gi,(m,i)=>(a.push(i+1),m)),a)
}


function vowelIndices(word){
  const str = 'aeiouy';
  const arr = word.toLowerCase().split('');
  let answer = [];
  arr.forEach((name, i) => {
    if (str.indexOf(name) !== -1) {
      answer.push(i + 1);
    }
  });
  return answer;
}