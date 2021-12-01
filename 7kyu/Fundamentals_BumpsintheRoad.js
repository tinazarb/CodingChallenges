// Challenge:
Bumps in the Road

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".


assert.strictEqual(bump("n"), "Woohoo!");
assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");

// My Solution:
function bump(x){
  let bumps = x.replace(/[^n]/g, "").length
  if (bumps > 15){
    return "Car Dead"
  } else{
    return "Woohoo!"
  }  
}

// Other Solutions:
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"


function bump(x){
  return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
}

const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';