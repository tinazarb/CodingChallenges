// Challenge:
Responsible Drinking

Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
Examples

"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks

Note:

To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

// My Solution:
function hydrate(s) {
 let count = s.split(" ").filter(x => "1234567890".includes(x)).map(x => Number(x)).reduce((a,b)=> a+b,0)
  if (count === 1) {return "1 glass of water"}
  return `${count} glasses of water`
}

// Other Solutions:
function hydrate(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (parseInt(s[i]) > 0) {
      answer += +s[i];
    }
  }
  return answer > 1 ? `${answer} glasses of water`: '1 glass of water'
}


const hydrate = (s, w = [...s].filter(x => !isNaN(x)).reduce((a, b) => a + +b, 0)) => `${w} glass${w === 1 ? '' : 'es'} of water`;

function hydrate(s) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const formatGlass = n => n > 1 ? 'glasses' : 'glass';
  const numberOfDrinks = s
    .match(/\d/g)
    .map(Number)
    .reduce(reducer);
    
  return `${numberOfDrinks} ${formatGlass(numberOfDrinks)} of water`;
}