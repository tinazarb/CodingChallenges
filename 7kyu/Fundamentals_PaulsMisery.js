// Challenge:
Paul's Misery

Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1

The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'

console.log(paul(['life', 'eating', 'life']), 'Super happy!');
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']), 'Super happy!');
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']), 'Happy!');

// My Solution:
function paul(x){
let score = 0
for (let i = 0; i < x.length; i++){
  if (x[i] === "kata"){
    score += 5
  } else if (x[i] === "Petes kata"){
    score += 10
  } else if (x[i] === "eating"){
    score += 1
  } else {score += 0}
} 
  if (score < 40){
  return 'Super happy!'
} else if (score < 70){
  return 'Happy!'
} else if (score < 100){
  return "Sad!"
} else {return "Miserable!"}
}

// Other Solutions:
function paul(arr){
  const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
  const num = arr.reduce( (a, i)=> +a + dic[i], 0)
  return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
}


function paul(activities) {
  const VALUES = {'Petes kata': 10, 'kata': 5, 'eating': 1, 'life': 0};
  const score = activities.reduce((s, a) => s + VALUES[a], 0);
  switch (true) {
    case score < 40: return 'Super happy!';
    case score < 70: return 'Happy!';
    case score < 100: return 'Sad!';
    default: return 'Miserable!';
  }
}


function paul(x){
  var points = {"kata": 5, "Petes kata": 10, "eating": 1},
      result = 0;
  x.map(el => result += ~~points[el]);
  switch (true) {
    case (result < 40):
      return "Super happy!";
    case (result < 70):
      return "Happy!";
    case (result < 100):
      return "Sad!";
    default:
      return "Miserable!";
  }
}