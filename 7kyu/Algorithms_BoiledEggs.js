// Challenge
Boiled Eggs

Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
Rules

    you can put at most 8 eggs into the pot at once
    it takes 5 minutes to boil an egg
    we assume, that the water is boiling all the time (no time to heat up)
    for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

Example (Input --> Output)

0 --> 0
5 --> 5
10 --> 10

// My Solution:
function cookingTime(eggs) {
 return Math.ceil(eggs/8) * 5
}


// Other Solutions:
function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}

function cookingTime(eggs) {
  let boilTime = 5;
  let maxBoilEggs = 8; 
 return Math.ceil(eggs/maxBoilEggs) * boilTime;
}

const cookingTime = eggs => Math.ceil(eggs / 8) * 5;