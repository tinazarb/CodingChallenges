// Challenge
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


// My Solution:
function high(x){
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'
  const score = word => word.split('').reduce((a,c)=> a + alphabet.indexOf(c),0)
  let highestWord = ''
  let highestCount = 0
  x.split(' ').forEach(w=>{
    const scoreCheck = score(w)
    if(scoreCheck > highestCount){
      highestWord = w
      highestCount = scoreCheck
    }
  })
  return highestWord
}

// Other Solutions:
function high(x){
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word){
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}

function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

function high(words) {

  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(' ')
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop()
    .word;
    
}