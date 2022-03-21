// Challenge:
Filter Long Words

Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']


// My Solution:
function filterLongWords(sentence, n) {
  return sentence.split(" ").filter(x => x.length > n)
}


// Other Solutions:
const filterLongWords = (sentence, n) => sentence.split(/\s/g).filter( wd => wd.length > n )

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(w => w.length > n);
}